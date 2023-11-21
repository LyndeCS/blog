"use client";

import { Tag } from "@/types/blog";
import { useMemo } from "react";

type TagListProps = {
	tags: Tag[];
	toggleTagActive: (name: string) => void;
};

export function TagList({ tags, toggleTagActive }: TagListProps) {
	const sortedTags = useMemo(() => {
		return tags.sort((a, b) => {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});
	}, [tags]);

	return (
		<div className="flex flex-wrap gap-2 items-center">
			{sortedTags.map((tag) => (
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
