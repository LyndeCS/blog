import { useState } from "react";
import Image from "next/image";
import { cardSummary } from "@/types/portfolio";
import { v4 as uuidv4 } from "uuid";

// MOBILE PROJECT ITEM

type ProjectListItemProps = {
	// handleClick: (x: number, y: number) => void;
	handleModalOpen: (fileName: string, x: number, y: number) => void;
	cardData: cardSummary;
};

export function ProjectListItem({
	handleModalOpen,
	cardData,
}: ProjectListItemProps) {
	const { alt, heading, subHeading, tagNames, image, fileName } = cardData;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="w-full h-[80px] md:h-[144px] flex hover:cursor-pointer my-[16px] max-w-full"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={(e) => {
				handleModalOpen(fileName, e.clientX, e.clientY);
			}}
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
						} transition-all duration-700 max-w-fit`}
					/>
					{/* HEADER */}
					<h2
						className={`${
							isHovered ? "text-[#AFAFAF]" : "text-[#AFAFAF]"
						} font-medium text-[32px] md:text-[64px] pl-[24px] w-full leading-none align-bottom transition-all duration-500 pt-2`}
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
						className={`flex flex-row justify-end text-[#747474] text-[16px] gap-[24px] transition-all duration-500 items-center ${
							isHovered ? "opacity-100" : "opacity-0 translate-y-[5px]"
						}`}
					>
						{tagNames.map((tagName) => {
							return <p key={uuidv4()}>{tagName}</p>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
