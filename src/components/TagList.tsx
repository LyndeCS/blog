"use client";

import { Tag } from "@/types/blog";

type TagListProps = {
	tags: Tag[];
	toggleTagActive: (name: string) => void;
};

export function TagList({ tags, toggleTagActive }: TagListProps) {
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
