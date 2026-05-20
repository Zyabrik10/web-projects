<script lang="ts">
	import { Button, Input } from '$lib/components';
	import { polls } from '$lib/stores';
	import type { Poll } from '$lib/types';
	import { setStorageItem } from '$lib/utils';

	let pollQuestion = $state('');
	let answerA = $state('');
	let answerB = $state('');

	function reset() {
		pollQuestion = '';
		answerA = '';
		answerB = '';
	}
</script>

<form
	class="form"
	onsubmit={(e) => {
		e.preventDefault();

		const poll: Poll = {
			id: crypto.randomUUID(),
			title: pollQuestion,
			votes: 0,
			questions: [
				{
					id: crypto.randomUUID(),
					votes: 0,
					title: answerA
				},
				{
					id: crypto.randomUUID(),
					votes: 0,
					title: answerB
				}
			]
		};

		console.log(poll);

		polls.set([...$polls, poll]);

		setStorageItem({
			key: 'polls',
			value: $polls,
			type: 'local'
		});

		reset();
	}}
>
	<p style="color: rgb(111, 0, 0);">Poll question?</p>
	<Input bind:value={pollQuestion} />

	<p style="color: rgb(111, 0, 0);">Answer A value:</p>
	<Input bind:value={answerA} />

	<p style="color: rgb(111, 0, 0);">Answer B value:</p>
	<Input bind:value={answerB} />

	<Button type="submit">Submit Poll</Button>
</form>

<style>
	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5rem;
	}
</style>
