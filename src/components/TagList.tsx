"use client";

import { useState } from "react";

const tagsTempArray = [
	{ name: "React", active: true },
	{ name: "Tailwind", active: false },
	{ name: "MySQL", active: false },
	{ name: "Personal Development", active: false },
	{ name: "HTML", active: false },
	{ name: "CSS", active: false },
	{ name: "Typescript", active: false },
	{ name: "Interview", active: false },
];
export function TagList() {
	const [tags, setTags] = useState(tagsTempArray);

	function toggleTagActive(name: string) {
		const updatedTags = tags.map((tag) => {
			if (tag.name === name) {
				return { ...tag, active: !tag.active };
			}
			return tag;
		});
		setTags(updatedTags);
	}

	return (
		<div className="flex flex-wrap gap-2 items-center">
			{tags.map((tag) => (
				<button
					//todo: change key to id
					key={tag.name}
					onClick={() => {
						toggleTagActive(tag.name);
					}}
					className={`font-mono text-sm py-[2px] px-[16px] h-fit rounded-[4px] border border-[#575763] ${
						tag.active
							? "bg-primary"
							: "hover:bg-[#292933] hover:border-[#666675]"
					}`}
				>
					{tag.name}
				</button>
			))}
		</div>
	);
}
