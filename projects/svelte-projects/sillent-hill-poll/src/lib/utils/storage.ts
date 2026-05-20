/**
 * Storage utility layer.
 *
 * Responsibilities:
 * - Safe access to localStorage / sessionStorage.
 * - JSON serialization / deserialization.
 * - SSR-safe execution (window guard).
 * - Centralized error handling hooks.
 *
 * Prevents direct storage usage across the app.
 */

import type { StorageScope } from '$lib/types';

/**
 * Retrieves value from storage.
 *
 * @param key - storage key
 * @param defaultValue - fallback if key is missing
 * @param type - 'local' | 'session'
 *
 * Behavior:
 * - Returns defaultValue in SSR environment.
 * - Parses JSON value from storage.
 * - If key does not exist:
 *     - writes defaultValue (if provided)
 *     - returns defaultValue
 *
 * Errors are delegated to getItemErrorHandling callback.
 */
export function getStorageItem(
	{
		key,
		defaultValue,
		type = 'local'
	}: Readonly<{
		key: string;
		defaultValue?: unknown;
		type?: StorageScope;
	}>,
	getItemErrorHandling = (error: unknown) => {
		console.error('getStorageItem Error: ', error);
	}
) {
	if (typeof window !== 'object') return defaultValue;

	const storage = resolveStorage(type);

	let item;

	try {
		item = storage?.getItem(key);
	} catch (e) {
		getItemErrorHandling(e);
	}

	if (!item) {
		if (defaultValue !== undefined) {
			setStorageItem({ key, value: defaultValue, type });
			return defaultValue;
		}
		return undefined;
	}

	try {
		return JSON.parse(item);
	} catch (e) {
		getItemErrorHandling(e);
		return defaultValue;
	}
}

/**
 * Saves value to storage as JSON.
 *
 * @param key - storage key
 * @param value - any serializable value
 * @param type - 'local' | 'session'
 *
 * SSR-safe.
 * Errors delegated to setItemErrorHandling callback.
 */

export function setStorageItem(
	{
		key,
		value,
		type
	}: Readonly<{
		key: string;
		value: unknown;
		type: StorageScope;
	}>,
	setItemErrorHandling = (error: unknown) => {
		console.error('setStorageItem Error: ', error);
	}
) {
	if (typeof window !== 'object') return;

	const storage = resolveStorage(type);

	try {
		storage?.setItem(key, JSON.stringify(value));
	} catch (e) {
		setItemErrorHandling(e);
	}
}

/**
 * Removes key from storage.
 *
 * @param key - storage key
 * @param type - 'local' | 'session'
 *
 * SSR-safe.
 * Errors delegated to removeStorageErrorHandler callback.
 */
export function removeStorage(
	{
		key,
		type
	}: Readonly<{
		key: string;
		type: StorageScope;
	}>,
	removeStorageErrorHandler = (error: unknown) => {
		console.error('removeStorageItem Error: ', error);
	}
) {
	if (typeof window !== 'object') return;

	const storage = resolveStorage(type);

	try {
		storage?.removeItem(key);
	} catch (e) {
		removeStorageErrorHandler(e);
	}
}

function resolveStorage(type: StorageScope) {
	if (typeof window === 'undefined') return null;
	return type === 'local' ? localStorage : sessionStorage;
}
