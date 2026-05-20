<script>
	import { Button, GridContainer } from '$lib/components';
	import { polls } from '$lib/stores';
	import { getStorageItem, setStorageItem } from '$lib/utils';

	$effect(() => {
		const storedPolls = getStorageItem({
			key: 'polls',
			defaultValue: []
		});

		polls.set(storedPolls);
	});
</script>

<GridContainer items="3">
	{#each $polls as poll (poll.id)}
		<div class="poll">
			<p class="poll-title">{poll.title}</p>
			<p class="poll-votes">Votes: {poll.votes}</p>
			<div class="flex flex-col items-start gap-1.5">
				{#each poll.questions as question (question.id)}
					<button
						class="pull-question"
						style="--range: {question.votes}%;"
						onclick={() => {
							polls.set(
								$polls.map((p) => {
									if (p.id === poll.id) {
										return {
											...p,
											votes: ++p.votes,
											questions: p.questions.map((q) => {
												if (q.id === question.id) {
													return {
														...q,
														votes: ++q.votes
													};
												}
												return { ...q };
											})
										};
									}

									return { ...p };
								})
							);

							setStorageItem({
								key: 'polls',
								value: $polls,
								type: 'local'
							});
						}}
					>
						{question.title} ({question.votes} vote{question.votes > 1 ? 's' : ''})</button
					>
				{/each}
			</div>
			<div class="mt-1.5 flex items-center justify-center">
				<Button
					onclick={() => {
						polls.set(
							$polls.filter((p) => {
								return p.id !== poll.id;
							})
						);

						setStorageItem({
							key: 'polls',
							value: $polls,
							type: 'local'
						});
					}}>Delete</Button
				>
			</div>
		</div>
	{/each}
</GridContainer>

<style>
	.poll {
		padding: 1rem;
		background: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgb(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0.8));
		border-radius: 0.5rem;
	}

	.poll-title {
		font-weight: bold;
		font-size: 1.5rem;
	}

	.poll-votes {
		margin-bottom: 20px;
	}

	.pull-question {
		--range: 0%;
		padding: 0.5rem;
		border-radius: 0.5rem;
		background:
			linear-gradient(to right, rgba(111, 0, 0, 0.5) var(--range), transparent 0),
			url(https://assets.mubicdn.net/images/film/8803/image-w1280.jpg);

		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;

		width: 100%;

		text-align: left;
	}
</style>
