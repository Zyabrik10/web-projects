<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		className?: string;
		style?: string;
		items?: string;
		itemsGap?: string;
		dir?: 'row' | 'column';
		wrap?: 'wrap' | 'nowrap' | 'reverse-wrap';
		children: Snippet;
		[key: string]: unknown;
	};

	const {
		children,
		className: classValue = '',
		style = '',
		items = '3',
		itemsGap = '10px',
		dir = 'row',
		wrap = 'wrap',
		...rest
	}: Props = $props();
</script>

<div
	{...rest}
	class={['grid', classValue]}
	style={`--grid-items:${items};--grid-items-gap:${itemsGap};--grid-direction:${dir};--grid-wrap:${wrap};${style}`}
>
	{@render children()}
</div>

<style>
	.grid {
		display: flex;
		gap: var(--grid-items-gap);
		flex-wrap: var(--grid-wrap);
		flex-direction: var(--grid-direction);
	}

	.grid > :global(*) {
		flex-basis: calc((100% - (var(--grid-items) - 1) * var(--grid-items-gap)) / var(--grid-items));
	}
</style>
