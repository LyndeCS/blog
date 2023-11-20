"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";
import { v4 as uuidv4 } from "uuid";

const inter = Inter({ subsets: ["latin"] });

type BlogProps = {
	blog: {
		id: number;
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
			className="flex flex-col gap-2"
		>
			<div className="relative w-[312px] h-[168px] rounded-md overflow-hidden">
				<Image
					src={blog.image}
					alt="Article Thumbnail"
					fill
					sizes="(min-width: 808px) 50vw, 100vw"
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
				{blog.title}
			</h3>
			<p className="font-mono font-light text-[#75757D] text-xs">{blog.date}</p>
			<p className={`${inter.className} text-sm font-light`}>{blog.subtitle}</p>
			<ul className="flex gap-2 my-2">
				{blog.tags.map((tag) => (
					<li
						key={uuidv4()}
						className="font-mono text-sm py-[1px] px-[8px] h-fit rounded-[4px] border border-[#575763]"
					>
						{tag}
					</li>
				))}
			</ul>
		</Link>
	);
}
