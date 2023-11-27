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

export type BlogPost = {
	title: string;
	date: string;
	categories: string[];
	tags: string[];
	summary: string;
	slug: string;
	content: string;
};

export type BlogPostSummary = {
	title: string;
	date: string;
	tags: string[];
	summary: string;
	slug: string;
	thumbnail: string;
};
