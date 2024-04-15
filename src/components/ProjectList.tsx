"use client";

import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProjectListItem } from "./ProjectListItem";
import { ProjectModal } from "./ProjectModal";
import { cardSummary } from "@/types/portfolio";

const projectCardItems = [
	{
		id: uuidv4(),
		alt: "Ajenda app",
		heading: "AJENDA",
		subHeading: "Task Manager/Scheduler",
		description:
			"Get organized with this intuitive task list manager and scheduler. Sort tasks by status (overdue, unscheduled, scheduled, completed), prioritize with drag-and-drop reordering, and view your workload across daily, weekly, and monthly timelines.",
		tagNames: ["REACT", "MUI", "FIREBASE"],
		image: "/images/ajenda.png",
	},
	{
		id: uuidv4(),
		alt: "Streamwake discord bot",
		heading: "STREAMWAKE",
		subHeading: "Group-watch Discord Bot",
		description:
			"Effortlessly organize watch parties with this handy Discord bot! Streamline show suggestions, create watchlists, enjoy a built-in player, and automatically track everyone's viewing progress.",
		tagNames: ["DISCORDJS", "NODEJS", "MYSQL"],
		image: "/images/streamwake.png",
	},
	{
		id: uuidv4(),
		alt: "Personal tech blog",
		heading: "TECH BLOG",
		subHeading: "Written Programming Articles",
		description:
			"Discover practical programming insights with this focused tech blog. Explore a curated collection of written articles offering solutions to common coding challenges. Easily find the information you need using tags and a convenient search bar.",
		tagNames: ["REACT", "TYPESCRIPT", "TAILWIND", "NEXTJS"],
		image: "/images/techblog.png",
	},
];

export function ProjectList() {
	const [modalData, setModalData] = useState({
		isOpen: false,
		cardData: projectCardItems[0],
	});

	const handleModalOpen = (cardData: cardSummary) => {
		setModalData({ isOpen: true, cardData: cardData });
	};

	const handleModalClose = () => {
		console.log("closed");
		setModalData({ isOpen: false, cardData: projectCardItems[0] });
	};

	return (
		<>
			<div className="w-full ml-[100px]">
				<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto" />
				{projectCardItems.map((cardSummary) => {
					return (
						<Fragment key={cardSummary.id}>
							<ProjectListItem
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
					// isOpen={modalData.isOpen}
					onClose={handleModalClose}
					projectSummary={modalData.cardData}
				/>
			)}
		</>
	);
}
