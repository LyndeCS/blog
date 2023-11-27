"use client";

import { useEffect, useMemo, useState } from "react";
import { BlogListItem } from "./BlogListItem";
import { BlogPostSummary, Tag } from "@/types/blog";

type BlogListProps = {
	tags: Tag[];
	searchString: string;
};

export function BlogList({ tags, searchString }: BlogListProps) {
	const [blogPostSummaries, setBlogPostSummaries] = useState<BlogPostSummary[]>(
		[]
	);

	useEffect(() => {
		fetch("/api/blogPosts")
			.then((res) => res.json())
			.then((data) => setBlogPostSummaries(data));
	}, []);

	const activeTags = useMemo(() => {
		return tags.filter((tag) => tag.active);
	}, [tags]);

	const filteredBlogs = useMemo(() => {
		return blogPostSummaries.filter((summary) => {
			return (
				(searchString === "" ||
					summary.title.toLowerCase().includes(searchString.toLowerCase())) &&
				(activeTags.length === 0 ||
					activeTags.every((tag) => summary.tags.includes(tag.name)))
			);
		});
	}, [blogPostSummaries, tags, searchString]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 justify-between">
			{filteredBlogs.map((blogPostSummary) => {
				return (
					<BlogListItem key={blogPostSummary.slug} blog={blogPostSummary} />
				);
			})}
		</div>
	);
}
