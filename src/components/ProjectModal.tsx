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
			className={`fixed left-0 top-0 opacity-0 w-full h-full rounded flex flex-col justify-between px-[40px] pt-[40px] animate-modal-slide-in`}
			// style={{ left: mouseX, top: mouseY }}
			onAnimationEnd={() => {
				setIsModalAnimationComplete(true);
			}}
		>
			{/* MAIN CONTENT */}
			<div
				className={`w-full h-full flex pb-10 gap-10 ${
					isModalAnimationComplete
						? "transition-opacity ease-in- duration-300 opacity-100"
						: "opacity-0"
				}`}
			>
				{/* LEFT 1/3 */}
				<div className="flex flex-col justify-between h-full w-1/3 text-[#F4EEE3]">
					{/* HEADER */}
					<div>
						<h2 className="font-bold text-[52px]">{heading}</h2>
						<h3 className="font-normal text-[32px]">Title</h3>
						{/* DIVIDER */}
						<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto"></div>
						<p className="font-extralight">Role</p>
						<p className="font-extralight">Problem</p>
						<p className="font-extralight">Features</p>
						<p className="font-extralight">Result</p>
						<ul>
							{stack.map((tag) => {
								return <li key={uuidv4()}>{tag}</li>;
							})}
						</ul>
					</div>
				</div>
				{/* THUMBNAIL */}
				<div className="w-2/3 h-full bg-[#545464]"></div>
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
				<div className="flex h-full justify-between">
					{/* BACK BUTTON */}
					<button
						className="py-2 px-4 text-[#AFAFAF] w-fit"
						onClick={handleClose}
					>
						← <span className="pl-2">BACK</span>
					</button>

					{/* LINKS */}
					<div className="flex w-2/3 justify-between">
						<a href="" className="w-fit h-full py-2 px-4 flex items-center">
							SEE IT LIVE
						</a>
						<a href="" className="w-fit h-full py-2 px-4 flex items-center">
							GITHUB
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
