"use client";

import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProjectListItem } from "./ProjectListItem";
import { ProjectModal } from "./ProjectModal";
import { cardSummary, caseStudyData } from "@/types/portfolio";

const projectCardItems = [
	{
		id: uuidv4(),
		alt: "Ajenda app",
		heading: "AJENDA",
		subHeading: "TASK MANAGER/SCHEDULER",
		description:
			"Get organized with this intuitive task list manager and scheduler. Sort tasks by status (overdue, unscheduled, scheduled, completed), prioritize with drag-and-drop reordering, and view your workload across daily, weekly, and monthly timelines.",
		tagNames: ["REACT", "MUI", "FIREBASE"],
		image: "/images/ajenda.png",
		fileName: "ajenda-case-study.json",
	},
	{
		id: uuidv4(),
		alt: "Streamwake discord bot",
		heading: "STREAMWAKE",
		subHeading: "GROUP-WATCH DISCORD BOT",
		description:
			"Effortlessly organize watch parties with this handy Discord bot! Streamline show suggestions, create watchlists, enjoy a built-in player, and automatically track everyone's viewing progress.",
		tagNames: ["DISCORDJS", "NODEJS", "MYSQL"],
		image: "/images/streamwake.png",
		fileName: "streamwake-case-study.json",
	},
	{
		id: uuidv4(),
		alt: "Personal tech blog",
		heading: "TECH BLOG",
		subHeading: "WRITTEN PROGRAMMING ARTICLES",
		description:
			"Discover practical programming insights with this focused tech blog. Explore a curated collection of written articles offering solutions to common coding challenges. Easily find the information you need using tags and a convenient search bar.",
		tagNames: ["REACT", "TYPESCRIPT", "TAILWIND", "NEXTJS"],
		image: "/images/techblog.png",
		fileName: "tech-blog-case-study.json",
	},
];

const DEFAULT_MODAL_DATA = {
	heading: "Loading...",
	title: "Loading...",
	role: "Loading...",
	stack: ["Loading..."],
	problem: "Loading...",
	features: ["Loading..."],
	result: "Loading...",
	websiteUrl: "Loading...",
	githubUrl: "Loading...",
};

export function ProjectList() {
	const [modalData, setModalData] = useState({
		isOpen: false,
		data: DEFAULT_MODAL_DATA,
	});
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);

	const handleModalOpen = async (
		caseStudyFileName: string,
		x: number,
		y: number
	) => {
		const response = await fetch(`/case-studies/${caseStudyFileName}`);
		const data: caseStudyData = await response.json();
		setMouseX(x);
		setMouseY(y);
		setModalData({ isOpen: true, data: data });
	};

	const handleModalClose = () => {
		setModalData({ isOpen: false, data: DEFAULT_MODAL_DATA });
	};

	return (
		<>
			<div className="w-full pl-[520px] items-end">
				<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto" />
				{projectCardItems.map((cardSummary) => {
					return (
						<Fragment key={cardSummary.id}>
							<ProjectListItem
								// handleClick={handleProjectItemClick}
								handleModalOpen={handleModalOpen}
								cardData={cardSummary}
							/>
							<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto" />
						</Fragment>
					);
				})}
			</div>

			{/* MODAL */}
			{modalData.isOpen && (
				<ProjectModal
					mouseX={mouseX}
					mouseY={mouseY}
					onClose={handleModalClose}
					projectSummary={modalData.data}
				/>
			)}
		</>
	);
}
