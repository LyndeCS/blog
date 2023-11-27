import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const slug = url.searchParams.get("slug");

	if (!slug) {
		return new Response("Slug not provided", { status: 400 });
	}

	const filePath = path.join(process.cwd(), "content/posts", `${slug}.md`);
	if (!fs.existsSync(filePath)) {
		return new Response("Post not found", { status: 404 });
	}

	const markdown = fs.readFileSync(filePath, "utf8");
	const { content } = matter(markdown);

	return new Response(JSON.stringify({ content }), {
		headers: { "Content-Type": "application/json" },
	});
}
