<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	type Props = {
		value: string;
		type?: HTMLInputTypeAttribute;
		[key: string]: unknown;
	};

	let { value = $bindable(), type = 'text', ...props }: Props = $props();
</script>

<input {...props} bind:value {type} class="input" />

<style>
	.input {
		padding: 0.5rem;

		border-radius: 0.5rem;

		border: 1px solid #000;
		outline: 2px solid transparent;

		transition: outline 0.3s;

		background:
			radial-gradient(closest-side, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.7)),
			url(https://cdn.wallpapersafari.com/17/15/MZs7jV.jpg);

		background-size: cover;
		color: rgb(200, 200, 200, 1);
	}

	.input:hover,
	.input:focus {
		outline: 2px solid rgb(0, 93, 165);
	}
</style>
