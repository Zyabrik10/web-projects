import type { Poll } from '$lib/types';
import { writable } from 'svelte/store';

export const polls = writable<Poll[]>([]);
