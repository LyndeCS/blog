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
		<article>
			<ReactMarkdown>{content}</ReactMarkdown>
		</article>
	);
}
