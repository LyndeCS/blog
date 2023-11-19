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

export function TagList() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{tags.map((tag) => (
				<button className="font-mono text-sm py-[3px] px-[12px] h-fit rounded-[4px] border border-[#575763]">
					{tag}
				</button>
			))}
		</div>
	);
}
