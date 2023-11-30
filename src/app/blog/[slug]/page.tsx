"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ params }: { params: { slug: string } }) {
	const [content, setContent] = useState("");

	useEffect(() => {
		fetch(`/api/blogPost?slug=${params.slug}`)
			.then((res) => res.json())
			.then((data) => setContent(data.content));
	}, [params.slug]);

	return (
		<article className="max-w-[800px] container mx-auto">
			<ReactMarkdown>{content}</ReactMarkdown>
		</article>
	);
}
