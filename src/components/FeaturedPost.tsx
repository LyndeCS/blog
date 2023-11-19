"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export function FeaturedPost() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href="#"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<article className="flex my-12 gap-4">
				<div className="w-1/2 rounded-md overflow-hidden">
					<img
						src="/images/thumbnail1.png"
						alt="Laptop with rising graph on screen"
						className={`scale-110 ease-in-out transition duration-[1s] ${
							isHovered ? "scale-[1.15]" : ""
						}`}
					/>
				</div>

				<div className="flex flex-col gap-4 w-1/2">
					<p className="font-mono font-light text-[#75757D] text-xs">
						November 15, 2021
					</p>
					{/* <p className="font-mono text-sm text-[#75757D] mb-[-12px]">NEW</p> */}
					<h2
						className={`text-2xl font-bold decoration-secondary decoration-2 underline-offset-[3px] mt-[-10px] ${
							isHovered ? "underline" : ""
						}`}
					>
						Two-Week Tune-Up: Maximizing my Employability - Day 0
					</h2>
					<p className={`${inter.className} font-light text-[16px]`}>
						Follow me on my journey as I supercharge my portfolio, tech
						knowledge, and interview skills{<br />} in an effort to optimize my
						appeal as
						{<br />} a potential employee.
					</p>
					<p
						className={`font-mono text-secondary font-light underline-offset-2 ${
							isHovered ? "underline" : ""
						}`}
					>
						Read more
					</p>
				</div>
			</article>
		</Link>
	);
}
