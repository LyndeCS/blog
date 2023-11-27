import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogPostSummary } from "@/types/blog";

export async function getPost(slug: string): Promise<BlogPost> {
	const filePath = path.join(process.cwd(), "content/posts", `${slug}.md`);
	const fileContents = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		slug,
		title: data.title,
		date: data.date,
		categories: data.categories,
		tags: data.tags,
		summary: data.summary,
		content,
	};
}

export async function getAllPostSummaries(): Promise<BlogPostSummary[]> {
	const postsDirectory = path.join(process.cwd(), "content/posts");
	const filenames = fs.readdirSync(postsDirectory);

	const posts = filenames.map((filename) => {
		const slug = filename.replace(/\.md$/, "");
		const filePath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, "utf8");
		const { data } = matter(fileContents);

		return {
			slug,
			title: data.title,
			date: data.date,
			summary: data.summary,
			tags: data.tags,
			thumbnail: data.thumbnail,
		};
	});

	return posts;
}
