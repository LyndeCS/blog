"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";
import { v4 as uuidv4 } from "uuid";
import { Blog } from "@/types/blog";

const inter = Inter({ subsets: ["latin"] });

type BlogListItemProps = {
	blog: Blog;
};

export function BlogListItem({ blog }: BlogListItemProps) {
	const { title, subtitle, date, tagNames, image } = blog;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href={`/blog/sussy`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="flex flex-col gap-2"
		>
			<div className="relative w-[312px] h-[174px] rounded-md overflow-hidden">
				<Image
					src={image}
					alt="Article Thumbnail"
					fill
					sizes="100%"
					style={{
						objectFit: "cover", // cover, contain, none
					}}
					className={`rounded-md ease-in-out transition duration-[1s] ${
						isHovered ? "scale-[1.02]" : ""
					}`}
				/>
			</div>

			<h3
				className={`text-lg font-bold decoration-secondary decoration-2 underline-offset-[2px] ${
					isHovered ? "underline" : ""
				}`}
			>
				{title}
			</h3>
			<p className="font-mono font-light text-[#75757D] text-xs">{date}</p>
			<p className={`${inter.className} text-sm font-light`}>{subtitle}</p>
			<ul className="flex flex-wrap gap-2 my-2">
				{tagNames.map((tagName) => (
					<li
						key={uuidv4()}
						className="font-mono text-sm py-[1px] px-[8px] h-fit rounded-[4px] border border-[#575763]"
					>
						{tagName}
					</li>
				))}
			</ul>
		</Link>
	);
}
