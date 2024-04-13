"use client";

import { useState } from "react";
import Image from "next/image";
import { cardSummary } from "@/types/portfolio";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { IBM_Plex_Mono } from "next/font/google";
const ipm = IBM_Plex_Mono({
	weight: ["200", "300", "400"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

type ProjectListItemProps = {
	card: cardSummary;
};

export function ProjectListItem({ card }: ProjectListItemProps) {
	const { alt, heading, subHeading, tagNames, image } = card;
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className="w-full h-[144px] flex hover:cursor-pointer my-[16px] max-w-full"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="w-full flex flex-row justify-between gap-[24px]">
				{/* IMAGE */}
				<Image
					alt={alt}
					src={image}
					width="256"
					height="144"
					className={`${isHovered ? "block" : "hidden"}`}
				/>
				{/* COPY */}
				<div className="w-full flex justify-between mt-[24px] leading-[0.5]">
					<h2
						className={`${
							isHovered ? "text-[#F4EEE3]" : "text-[#AFAFAF]"
						} font-medium text-[64px]`}
					>
						{heading}
					</h2>
					<div className="w-[512px] flex flex-row justify-between">
						<h3
							className={`${ipm.className} text-[20px] inline-block align-top ${
								isHovered ? "text-[#F4EEE3]" : "text-[#AFAFAF]"
							}`}
						>
							{subHeading}
						</h3>
						<FaExpandArrowsAlt
							size={16}
							color={"#F4EEE3"}
							className={`${isHovered ? "block" : "hidden"}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
