<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		[key: string]: unknown;
	};

	const { children, ...props }: Props = $props();
</script>

<button {...props} class="button">{@render children()}</button>

<style>
	.button {
		padding: 0.5rem;
		background:
			radial-gradient(closest-side, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.7)),
			url(https://w0.peakpx.com/wallpaper/202/639/HD-wallpaper-silent-hill-video-game.jpg);
		background-size: cover;

		background-position: center;

		background-repeat: no-repeat;

		color: rgb(111, 0, 0);

		border-radius: 0.5rem;
	}
</style>
