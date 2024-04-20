export type cardSummary = {
	id: string;
	alt: string;
	heading: string;
	subHeading: string;
	description: string;
	tagNames: string[];
	image: string;
};

export type modalSummary = {
	heading: string;
	problem: string;
	role: string;
	stack: string[];
	features: string[];
	result: string;
	url: string;
};
