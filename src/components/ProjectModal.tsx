import { cardSummary } from "@/types/portfolio";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type ProjectModalProps = {
	mouseX: number;
	mouseY: number;
	onClose?: () => void;
	projectSummary: cardSummary;
};

export function ProjectModal({
	mouseX,
	mouseY,
	onClose,
	projectSummary,
}: ProjectModalProps) {
	const { alt, heading, subHeading, tagNames, image, description } =
		projectSummary;
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
				<div className="flex flex-col justify-between h-full w-full text-[#F4EEE3]">
					{/* BACK BUTTON */}
					<button
						className="border rounded border-[#AFAFAF] py-2 px-4 text-[#AFAFAF] w-fit hover:bg-[#AFAFAF] hover:bg-opacity-20"
						onClick={handleClose}
					>
						← <span className="pl-2">BACK</span>
					</button>
					{/* HEADER */}
					<div>
						<h2 className="font-semibold text-6xl">{heading}</h2>
						<h3 className="italic text-4xl">Title</h3>
						<p className="font-extralight">Role</p>
						<ul>
							{tagNames.map((tag) => {
								return <li key={uuidv4()}>{tag}</li>;
							})}
						</ul>
					</div>
					{/* BODY COPY */}
					<div className="flex flex-col gap-2">
						<p className="text-xl font-light">{description}</p>
					</div>
				</div>
				{/* THUMBNAIL */}
				<div className="w-full h-full bg-[#545464]"></div>
				{/* <img className="w-full h-full" src={image}></img> */}
			</div>
			{/* FOOTER */}
			<div
				className={`flex flex-col h-[80px] w-full mx-auto ${
					isModalAnimationComplete
						? "transition-opacity duration-300 opacity-100 ease-linear"
						: "opacity-0"
				}`}
			>
				{/* DIVIDER */}
				<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto"></div>

				{/* COPY */}
				<div className="flex flex-row h-full text-[#747474] text-[20px] gap-[24px] items-center">
					{tagNames.map((tagName) => {
						return <p key={uuidv4()}>{tagName}</p>;
					})}
				</div>
			</div>
		</div>
	);
}
