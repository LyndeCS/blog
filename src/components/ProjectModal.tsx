import { cardSummary, caseStudyData } from "@/types/portfolio";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaExternalLinkAlt } from "react-icons/fa";

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
			className={`fixed left-0 top-0 opacity-0 w-screen h-screen flex flex-col px-[40px] pt-[80px] animate-modal-slide-in`}
			// style={{ left: mouseX, top: mouseY }}
			onAnimationEnd={() => {
				setIsModalAnimationComplete(true);
			}}
		>
			{/* MAIN CONTENT */}
			<div
				className={`w-full h-full flex pb-10 gap-10 overflow-hidden ${
					isModalAnimationComplete
						? "transition-opacity ease-in-out duration-300 opacity-100"
						: "opacity-0"
				}`}
			>
				{/* LEFT DIVIDER */}
				<div className="flex flex-col h-full max-w-[700px] min-w-[700px] text-[#F4EEE3]">
					{/* HEADER */}
					<div className="flex flex-col leading-none gap-[10px] pb-[10px]">
						<h2 className="font-bold text-[52px] uppercase">{heading}</h2>
						<h3 className="font-normal text-[32px] text-pretty">{title}</h3>
						{/* DIVIDER */}
						<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto my-[10px]"></div>
					</div>
					{/* BODY */}
					<div className="flex flex-col pr-4 leading-8 gap-[40px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#3b3b40] scrollbar-track-[#1e1e25]">
						<div className="flex flex-col leading-none">
							<p className=" text-[#AFAFAF] text-[16px] pb-2 tracking-wider">
								Role: {role}
							</p>
							<ul className="flex  text-[#AFAFAF] text-[16px] gap-1 tracking-wider">
								Stack:
								{stack.map((tag, index) => {
									return (
										<li key={uuidv4()}>{`${tag}${
											index !== stack.length - 1 ? ", " : ""
										}`}</li>
									);
								})}
							</ul>
						</div>
						<div className="flex flex-col gap-[15px]">
							<h4 className="text-[25px] font-bold">The Problem</h4>
							<p className="text-[20px]">{problem}</p>
						</div>
						<div className="flex flex-col gap-[15px]">
							<h4 className="text-[25px] font-bold">Key Features</h4>
							<ul className="flex flex-col text-[20px] gap-[15px]">
								{features.map((feature, index) => {
									return <li key={uuidv4()}>{`• ${feature}`}</li>;
								})}
							</ul>
						</div>
						<div className="flex flex-col gap-[15px]">
							<h4 className="text-[25px] font-bold">Result</h4>
							<p className="text-[20px]">{result}</p>
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
						<a
							href={websiteUrl}
							className="w-fit h-full flex items-center gap-2 hover:underline underline-offset-2"
						>
							SEE IT LIVE
							<FaExternalLinkAlt />
						</a>
						<a
							href={githubUrl}
							className="w-fit h-full flex items-center hover:underline underline-offset-2"
						>
							GITHUB
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
