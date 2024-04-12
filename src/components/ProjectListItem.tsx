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
	const { heading, subHeading, tagNames, image } = card;
	return (
		<div className="w-full h-[144px] flex hover:cursor-pointer my-[16px] max-w-full">
			<div className="w-full flex flex-row justify-between pt-[24px]">
				{/* LEFT */}
				<div>
					<h2 className="text-[#AFAFAF] font-medium text-[64px]">{heading}</h2>
				</div>
				{/* RIGHT */}
				<div className="w-[512px] flex justify-between">
					<h3 className={`${ipm.className} text-[20px] text-[#AFAFAF]`}>
						{subHeading}
					</h3>
					<FaExpandArrowsAlt size={16} color={"#F4EEE3"} />
				</div>
			</div>
		</div>
	);
}
