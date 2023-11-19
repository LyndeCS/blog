"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type BlogProps = {
	blog: {
		date: string;
		title: string;
		subtitle: string;
		tags: string[];
		body: string;
		image: string;
	};
};

export function BlogItem({ blog }: BlogProps) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<Link
			href="#"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="flex flex-col basis-[30%] gap-2"
		>
			<Image
				src={blog.image}
				alt="Article Thumbnail"
				width={260}
				height={162}
				className="rounded-md"
			/>
			<h3
				className={`font-bold decoration-secondary decoration-2 underline-offset-[3px] ${
					isHovered ? "underline" : ""
				}`}
			>
				{blog.title}
			</h3>
			<p className="font-mono font-light text-[#75757D] text-xs">{blog.date}</p>
			<p className={`${inter.className} text-sm font-light`}>{blog.subtitle}</p>
		</Link>
	);
}
