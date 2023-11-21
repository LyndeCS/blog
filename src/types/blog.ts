export type Tag = {
	name: string;
	active: boolean;
};

export type BlogListItem = {
	id: number;
	date: string;
	title: string;
	subtitle: string;
	tagNames: string[];
	image: string;
};

export type Blog = {
	id: number;
	date: string;
	title: string;
	subtitle: string;
	tagNames: string[];
	body: string;
	image: string;
};
