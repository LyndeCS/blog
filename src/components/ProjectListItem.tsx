"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { cardSummary } from "@/types/portfolio";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
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
						} transition-all duration-500 max-w-fit`}
					/>
					{/* HEADER */}
					<h2
						className={`${
							isHovered ? "text-[#AFAFAF]" : "text-[#AFAFAF]"
						} font-medium text-[64px] pl-[24px] w-full leading-none align-bottom transition-all duration-500 pt-2`}
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
						} flex flex-row justify-end text-[#696969] text-sm gap-[8px] font-medium transition-all duration-500 items-center ${
							isHovered ? "opacity-100" : "opacity-0 translate-y-[5px]"
						}`}
					>
						{tagNames.map((tagName, index) => {
							return (
								<Fragment key={uuidv4()}>
									<p>{tagName}</p>
									{
										index < tagNames.length - 1 && "/"
										// <div className="bg-[#4E4E4E] w-[1px] h-1/2" />
									}
								</Fragment>
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
