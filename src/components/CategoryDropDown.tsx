const categories = [
	"Front-end",
	"Back-end",
	"Full-stack",
	"DevOps",
	"Design",
	"Other",
];
const tags = [
	"React",
	"Tailwind",
	"MySQL",
	"Personal Development",
	"HTML",
	"CSS",
	"Typescript",
	"Interview",
];

const tags2 = [
	{ name: "React", active: true },
	{ name: "Tailwind", active: false },
	{ name: "MySQL", active: false },
	{ name: "Personal Development", active: false },
	{ name: "HTML", active: false },
	{ name: "CSS", active: false },
	{ name: "Typescript", active: false },
	{ name: "Interview", active: false },
];
export function CategoryDropDown() {
	return (
		<div className="flex flex-wrap gap-2 items-center">
			{tags2.map((tag, index) => (
				<button
					key={index}
					className="font-mono text-sm py-[2px] px-[16px] h-fit rounded-[4px] border border-[#575763]"
				>
					{tag.name}
				</button>
			))}
		</div>
	);
}
