import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
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
			thumbnail: data.thumbnail,
			summary: data.summary,
			tags: data.tags,
		};
	});

	return new Response(JSON.stringify(posts), {
		headers: { "Content-Type": "application/json" },
	});
}
