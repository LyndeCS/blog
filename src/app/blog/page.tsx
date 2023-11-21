"use client";

import { BlogList } from "@/components/BlogList";
import { FeaturedItem } from "@/components/FeaturedItem";
import { Searchbar } from "@/components/Searchbar";
import { TagList } from "@/components/TagList";
import { useState } from "react";

const blogs = [
	{
		id: 1,
		date: "November 16, 2021",
		title: "Two-Week Tune-Up: Day 1",
		subtitle: "The first day of my journey to become a better developer",
		tagNames: ["Figma", "Design"],
		body: "I just finished building a basic todo app using Next.js and I would like to continue using it to build the blog website. The combination of static and server-side rendering sounds like it’s the best of both worlds, and I liked how all of the tools made it feel like a complete package throughout development. I am not very experienced with database hosting so I had to look into this. I used sqlite in the todo app which is fine for small scale local development, but I would like this project to be as close to production level as possible. The combination of Theo.t3’s video on the t3 stack and ChatGPT led me to PlanetScale. I was about to host the database on PlanetScale and use mysql until I noticed that Vercel introduced Vercel Postgres recently, and since I’m deploying the project on Vercel, I figured I might as well try it out and manage everything in one place.",
		image: "/images/thumbnail2.png",
	},
	{
		id: 2,
		date: "November 17, 2021",
		title: "Two-Week Tune-Up: Day 2",
		subtitle: "The second day of my journey to become a better developer",
		tagNames: ["Figma", "Design"],
		body: "I finished the design of the main blog page. I spoke with designers during the process and gained valuable insight. My skills at quickly prototyping a design in Figma have improved drastically. Realizing how similar auto-layout and CSS Flexbox are had the effect of flipping a switch in my brain. The thing I’d like to improve most now while using Figma is reducing time spent navigating between elements. Certain elements that were deeply nested in groups required me to double click way too many times to focus them. I’m sure there is a way to improve this part of the Figma workflow. I realized you can use the text button to focus text instantly, this was a big help. I decided the dropdown menu overlapping the recommended article didn’t matter. I increased the vertical margin between the filters and the recommended article and enabled wrapping for the tags and everything looks good to me. Paying more attention to font, font weight, font size, font color to emphasize the most important elements like the article title, and reducing emphasis on less important elements like date posted was a key takeaway.",
		image: "/images/thumbnail3.png",
	},
	{
		id: 3,
		date: "November 18, 2021",
		title: "Quickly targetting elements using Figma",
		subtitle: "The third day of my journey to become a better developer",
		tagNames: ["Figma", "Design", "DALL-E"],
		body: "I finished the design of the main blog page. I spoke with designers during the process and gained valuable insight. My skills at quickly prototyping a design in Figma have improved drastically. Realizing how similar auto-layout and CSS Flexbox are had the effect of flipping a switch in my brain. The thing I’d like to improve most now while using Figma is reducing time spent navigating between elements. Certain elements that were deeply nested in groups required me to double click way too many times to focus them. I’m sure there is a way to improve this part of the Figma workflow. I realized you can use the text button to focus text instantly, this was a big help. I decided the dropdown menu overlapping the recommended article didn’t matter. I increased the vertical margin between the filters and the recommended article and enabled wrapping for the tags and everything looks good to me. Paying more attention to font, font weight, font size, font color to emphasize the most important elements like the article title, and reducing emphasis on less important elements like date posted was a key takeaway.",
		image: "/images/thumbnail4.png",
	},
	{
		id: 4,
		date: "November 19, 2021",
		title: "Two-Week Tune-Up: Maximizing my Employability - Day 4",
		subtitle: "The fourth day of my journey to become a better developer",
		tagNames: ["React", "Typescript", "Tailwind"],
		body: "I finished the design of the main blog page. I spoke with designers during the process and gained valuable insight. My skills at quickly prototyping a design in Figma have improved drastically. Realizing how similar auto-layout and CSS Flexbox are had the effect of flipping a switch in my brain. The thing I’d like to improve most now while using Figma is reducing time spent navigating between elements. Certain elements that were deeply nested in groups required me to double click way too many times to focus them. I’m sure there is a way to improve this part of the Figma workflow. I realized you can use the text button to focus text instantly, this was a big help.",
		image: "/images/thumbnail1.png",
	},
	{
		id: 5,
		date: "November 20, 2021",
		title: "Two-Week Tune-Up: Maximizing my Employability - Day 5",
		subtitle: "The fifth day of my journey to become a better developer",
		tagNames: ["Front-end", "Prisma"],
		body: "I finished the design of the main blog page. I spoke with designers during the process and gained valuable insight. My skills at quickly prototyping a design in Figma have improved drastically. Realizing how similar auto-layout and CSS Flexbox are had the effect of flipping a switch in my brain. The thing I’d like to improve most now while using Figma is reducing time spent navigating between elements. Certain elements that were deeply nested in groups required me to double click way too many times to focus them. I’m sure there is a way to improve this part of the Figma workflow. I realized you can use the text button to focus text instantly, this was a big help.",
		image: "/images/thumbnail2.png",
	},
	{
		id: 6,
		date: "November 21, 2021",
		title: "Two-Week Tune-Up: Maximizing my Employability - Day 6",
		subtitle: "The sixth day of my journey to become a better developer",
		tagNames: ["React", "Next.js", "Back-end"],
		body: "I don’t like the horizontal margins adjusting to the browser scroll bar appearing, making note of this to consider during development. I created the Category select menu as its own component, then I tried to implement another component to house the tags, but I don’t believe that will allow me to flex-wrap the tags to appear underneath the select menu. I combined the two into the same component. I am now realizing I could create a separate button component for the tags, but the solution is simple enough and already perfectly implemented that I’m deeming it unnecessary.",
		image: "/images/thumbnail3.png",
	},
	{
		id: 7,
		date: "November 22, 2021",
		title: "Two-Week Tune-Up: Maximizing my Employability - Day 7",
		subtitle: "The seventh day of my journey to become a better developer",
		tagNames: [
			"React",
			"Tailwind",
			"Back-end",
			"Prisma",
			"Next.js",
			"Typescript",
		],
		body: "Goal for the Day: Search filtering and reset button, Tags filtering implemented. <Image> component from Next requiring width/height the way i initially implemented. I believe it should ideally do this automatically.",
		image: "/images/thumbnail4.png",
	},
];

const TAGS = [
	{ name: "React", active: false },
	{ name: "Tailwind", active: false },
	{ name: "MySQL", active: false },
	{ name: "Personal Development", active: false },
	{ name: "HTML", active: false },
	{ name: "CSS", active: false },
	{ name: "Typescript", active: false },
	{ name: "Interview", active: false },
];

export default function blog() {
	const [tags, setTags] = useState(TAGS);

	function onToggleTagActive(name: string) {
		const updatedTags = tags.map((tag) => {
			if (tag.name === name) {
				return { ...tag, active: !tag.active };
			}
			return tag;
		});
		setTags(updatedTags);
	}

	return (
		<main className="max-w-[1000px] min-h-screen container mx-auto">
			<div className="flex flex-col gap-y-4 mb-24">
				<h1 className="text-4xl font-semibold">Blog</h1>
				<Searchbar />
				<TagList tags={tags} toggleTagActive={onToggleTagActive} />
				<FeaturedItem />
				<BlogList blogs={blogs} tags={tags} />
			</div>
		</main>
	);
}
