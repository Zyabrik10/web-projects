<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	type Props = {
		children: Snippet;
		href: Pathname;
		[key: string]: unknown;
	};

	const { children, href, ...props }: Props = $props();

	const pathnames = $derived(page.url.pathname.split('/').filter((str) => str));
	const hrefPathnames = $derived(new URL(page.url.origin + href).pathname);
</script>

<a
	{...props}
	href={resolve(href)}
	class="link"
	class:active={href === '/'
		? true
		: pathnames.some((pathname) => hrefPathnames.includes(pathname))}>{@render children()}</a
>

<style>
	.link {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 10px 20px;
		color: rgb(111, 0, 0);

		font-weight: bold;
	}

	.link:hover,
	.link:focus {
		background-color: black;
	}

	.link.active {
		text-decoration: underline;
	}
</style>
