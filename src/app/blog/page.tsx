"use client";

import { BlogList } from "@/components/BlogList";
import { FeaturedItem } from "@/components/FeaturedItem";
import { Searchbar } from "@/components/Searchbar";
import { TagList } from "@/components/TagList";
import { useState } from "react";

const TAGS = [
	{ name: "React", active: false },
	{ name: "Tailwind", active: false },
	{ name: "MySQL", active: false },
	{ name: "Personal Development", active: false },
	{ name: "HTML", active: false },
	{ name: "CSS", active: false },
	{ name: "Typescript", active: false },
	{ name: "Interview", active: false },
	{ name: "Back-end", active: false },
	{ name: "Prisma", active: false },
	{ name: "Next.js", active: false },
	{ name: "Figma", active: false },
	{ name: "Design", active: false },
	{ name: "DALL-E", active: false },
	{ name: "Front-end", active: false },
	{ name: "Javascript", active: false },
	{ name: "Node.js", active: false },
];

export default function BlogHomePage() {
	const [searchString, setSearchString] = useState("");
	const [tags, setTags] = useState(TAGS);

	function onSearchChange(searchString: string) {
		setSearchString(searchString);
	}

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
		<main className="max-w-[1000px] min-h-screen container mx-auto pt-40">
			<div className="flex flex-col gap-y-4 mb-24">
				<h1 className="text-4xl font-semibold">Blog</h1>
				<Searchbar onSearchChange={onSearchChange} />
				<TagList tags={tags} toggleTagActive={onToggleTagActive} />
				<FeaturedItem />
				<BlogList tags={tags} searchString={searchString} />
			</div>
		</main>
	);
}
