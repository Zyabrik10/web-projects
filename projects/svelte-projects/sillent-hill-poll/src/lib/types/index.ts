export type StorageScope = 'local' | 'session';

export type PollQuestion = {
	id: string;
	title: string;
	votes: number;
};

export type Poll = {
	id: string;
	title: string;
	votes: number;
	questions: PollQuestion[];
};
