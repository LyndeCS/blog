import { cardSummary, caseStudyData } from "@/types/portfolio";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type ProjectModalProps = {
	mouseX: number;
	mouseY: number;
	onClose?: () => void;
	projectSummary: caseStudyData;
};

export function ProjectModal({
	mouseX,
	mouseY,
	onClose,
	projectSummary,
}: ProjectModalProps) {
	const {
		heading,
		title,
		role,
		stack,
		problem,
		features,
		result,
		websiteUrl,
		githubUrl,
	} = projectSummary;
	const [isModalAnimationComplete, setIsModalAnimationComplete] =
		useState(false);

	const handleModalAnimationEnd = () => {
		setIsModalAnimationComplete(true);
	};

	const handleClose = () => {
		if (onClose) onClose();
	};

	return (
		<div
			className={`fixed left-0 top-0 opacity-0 w-full h-full rounded flex flex-col justify-between px-[40px] pt-[80px] animate-modal-slide-in`}
			// style={{ left: mouseX, top: mouseY }}
			onAnimationEnd={() => {
				setIsModalAnimationComplete(true);
			}}
		>
			{/* MAIN CONTENT */}
			<div
				className={`w-full h-full flex pb-10 gap-10 ${
					isModalAnimationComplete
						? "transition-opacity ease-in-out duration-300 opacity-100"
						: "opacity-0"
				}`}
			>
				{/* LEFT DIVIDER */}
				<div className="flex flex-col h-full max-w-[700px] min-w-[700px] text-[#F4EEE3] gap-[40px]">
					{/* HEADER */}
					<div className="flex flex-col">
						<h2 className="font-bold text-[52px] uppercase leading-none">
							{heading}
						</h2>
						<h3 className="font-normal text-[32px]">{title}</h3>
						{/* DIVIDER */}
						<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto my-[10px]"></div>
						<p className="italic text-[#AFAFAF] text-[20px]">{role}</p>
						<ul className="flex italic text-[#AFAFAF] text-[20px]">
							{stack.map((tag) => {
								return <li key={uuidv4()}>{`${tag}, `}</li>;
							})}
						</ul>
					</div>
					{/* BODY */}
					<div className="flex flex-col leading-8 gap-[40px]">
						<div className="flex flex-col gap-[15px]">
							<h4 className="text-[25px] font-bold">The Problem</h4>
							<p className="text-[20px] font-light">{problem}</p>
						</div>
						<div className="flex flex-col gap-[15px]">
							<h4 className="text-[25px] font-bold">Key Features</h4>
							<p className="text-[20px] font-light">{features}</p>
						</div>
						<div className="flex flex-col gap-[15px]">
							<h4 className="text-[25px] font-bold">Result</h4>
							<p className="text-[20px] font-light">{result}</p>
						</div>
					</div>
				</div>
				{/* RIGHT DIVIDER */}
				<div className="w-full h-full bg-[#545464]"></div>
				{/* <img className="w-full h-full" src={image}></img> */}
			</div>
			{/* FOOTER */}
			<div
				className={`flex flex-col h-[80px] w-full mx-auto text-[#AFAFAF] text-[20px] ${
					isModalAnimationComplete
						? "transition-opacity duration-300 opacity-100 ease-linear"
						: "opacity-0"
				}`}
			>
				{/* DIVIDER */}
				<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto"></div>
				<div className="flex h-full justify-between gap-[40px]">
					<div className="flex max-w-[700px] min-w-[700px]">
						{/* BACK BUTTON */}
						<button
							className="py-2 px-4 text-[#AFAFAF] w-fit"
							onClick={handleClose}
						>
							← <span className="pl-2">BACK</span>
						</button>
					</div>

					{/* LINKS */}
					<div className="flex justify-between w-full">
						<a href="" className="w-fit h-full flex items-center">
							SEE IT LIVE
						</a>
						<a href="" className="w-fit h-full flex items-center">
							GITHUB
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
