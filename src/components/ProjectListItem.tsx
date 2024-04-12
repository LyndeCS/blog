import { cardSummary } from "@/types/portfolio";

type ProjectListItemProps = {
	card: cardSummary;
};

export function ProjectListItem({ card }: ProjectListItemProps) {
	const { heading, subHeading, tagNames, image } = card;
	return (
		<div className="w-[1700px] self-center flex hover:cursor-pointer">
			<div className="flex my-[24px] max-w-full">
				<div className="grow flex flex-col">
					<h2 className="text-white font-light">{heading}</h2>
					<p className="text-2xl text-[#8c8c8c] font-light">{subHeading}</p>
				</div>
			</div>
		</div>
	);
}
