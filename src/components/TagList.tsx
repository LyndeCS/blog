const tags = [
	{ name: "React", active: true },
	{ name: "Tailwind", active: false },
	{ name: "MySQL", active: false },
	{ name: "Personal Development", active: false },
	{ name: "HTML", active: false },
	{ name: "CSS", active: false },
	{ name: "Typescript", active: false },
	{ name: "Interview", active: false },
];
export function TagList() {
	return (
		<div className="flex flex-wrap gap-2 items-center">
			{tags.map((tag) => (
				<button
					key={tag.name}
					className={`font-mono text-sm py-[2px] px-[16px] h-fit rounded-[4px] border border-[#575763] ${
						tag.active ? "bg-primary" : ""
					}`}
				>
					{tag.name}
				</button>
			))}
		</div>
	);
}
