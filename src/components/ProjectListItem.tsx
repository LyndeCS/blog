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
			<div className="w-full flex flex-row justify-between gap-[24px] overflow-hidden">
				{/* IMAGE */}
				<div className="flex w-full">
					<Image
						alt={alt}
						src={image}
						width={256}
						height={144}
						className={`${
							isHovered ? "opacity-100" : "opacity-0 ml-[-280px]"
						} transition-all duration-500 inline-block max-w-fit`}
					/>
					<h2
						className={`${
							isHovered ? "text-[#F4EEE3]" : "text-[#AFAFAF]"
						} font-medium text-[64px] inline-block pl-[24px] w-full leading-0`}
					>
						{heading}
					</h2>
				</div>
				{/* COPY */}
				<div className="w-[512px] flex flex-col justify-between mt-[24px] ">
					<h3
						className={`text-[20px] inline-block align-top leading-[0.5] text-right tracking-wide ${
							isHovered ? "text-[#AFAFAF]" : "text-[#AFAFAF]"
						}`}
					>
						{subHeading}
					</h3>
					{/* TAGNAMES */}
					<div
						className={`${
							ipm.className
						} flex flex-row justify-end text-[#868686] gap-[12px] font-medium transition-all duration-500 ${
							isHovered ? "opacity-100" : "opacity-0 translate-x-[256px]"
						}`}
					>
						{tagNames.map((tagName, index) => {
							return (
								<>
									<p>{tagName}</p>
									{index < tagNames.length - 1 && (
										<div className="bg-[#4E4E4E] w-[1px] h-full" />
									)}
								</>
							);
						})}
					</div>
					{/* <FaExpandArrowsAlt
							size={16}
							color={"#F4EEE3"}
							className={`${isHovered ? "block" : "hidden"}`}
						/> */}
				</div>
			</div>
		</div>
	);
}
