"use client";

import { useMemo, useState } from "react";
import { BlogListItem } from "./BlogListItem";
import { Blog, Tag } from "@/types/blog";

type BlogListProps = {
	blogs: Blog[];
	tags: Tag[];
};

export function BlogList({ blogs, tags }: BlogListProps) {
	// const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
	const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
	const [searchString, setSearchString] = useState("");

	const filteredBlogs = useMemo(() => {
		return blogs.filter((blog) => {
			return (
				(searchString === "" ||
					blog.title.toLowerCase().includes(searchString.toLowerCase())) &&
				(selectedTags.length === 0 ||
					selectedTags.some((tag) => blog.tagNames.includes(tag.name)))
			);
		});
	}, [selectedTags, searchString, blogs]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 justify-between">
			{filteredBlogs.map((blog) => {
				return <BlogListItem key={blog.id} blog={blog} />;
			})}
		</div>
	);
}
