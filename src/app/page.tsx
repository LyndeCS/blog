import { VT323 } from "next/font/google";
import { SlArrowDown } from "react-icons/sl";
import { MdNearMe } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

import { v4 as uuidv4 } from "uuid";
import { ProjectListItem } from "@/components/ProjectListItem";

const projectCardItems = [
	{
		id: uuidv4(),
		heading: "AJENDA",
		subHeading: "Task Manager/Scheduler",
		tagNames: [""],
		image: "",
	},
	{
		id: uuidv4(),
		heading: "STREAMWAKE",
		subHeading: "Group-watch Discord Bot",
		tagNames: [""],
		image: "",
	},
	{
		id: uuidv4(),
		heading: "TECH BLOG",
		subHeading: "Written Programming Articles",
		tagNames: [""],
		image: "",
	},
];

export default function Home() {
	return (
		<div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIG9wYWNpdHk9IjEiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMTUxIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjE2IiBzcGVjdWxhckNvbnN0YW50PSIxLjMiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzQzNDM0MyIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgIAkJPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iNTEiPjwvZmVEaXN0YW50TGlnaHQ+CiAgCTwvZmVTcGVjdWxhckxpZ2h0aW5nPgogIAo8L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9IiMxNDE0MTkiPjwvcmVjdD48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0iIzQzNDM0MyIgZmlsdGVyPSJ1cmwoI25ubm9pc2UtZmlsdGVyKSI+PC9yZWN0Pjwvc3ZnPg==')]">
			{/* HERO SECTION */}
			<section
				id="hero"
				className={`h-screen flex flex-col snap-start justify-between`}
			>
				{/* MAIN CONTENT */}
				<div className="flex flex-row container mx-auto max-w-[1700px] mt-[16rem] gap-[113px]">
					{/* SIDE NAV */}
					<div className="flex flex-col gap-4 w-[48px] my-auto">
						<div className="w-[32px] h-[2px] bg-[#F4EEE3]"></div>
						<div className="w-[32px] h-[2px] bg-gray-500"></div>
						{/* <div className="w-[32px] h-[2px] bg-gray-500"></div> */}
					</div>
					{/* HERO COPY */}
					<div className="flex flex-col grow">
						<h1 className="text-[72px] font-bold tracking-tighter animate-fade-in-up [animation-delay:_0.25s] opacity-0 [animation-fill-mode:forwards]">
							Hi, I&apos;m{" "}
							<span className="bg-gradient-to-r from-[#15E9B4] to-[#15ACC1] text-transparent bg-clip-text">
								Chris Lynde
							</span>
							. Web developer.
						</h1>
						<h2 className="text-[72px] leading-[3rem] tracking-tighter mb-28 animate-fade-in-up [animation-delay:_0.5s] opacity-0 [animation-fill-mode:forwards]">
							<span className="bg-gradient-to-r from-[#747474] via-[#C6C6C6] to-[#747474] text-transparent bg-clip-text">
								I bring digital dreams to life.
							</span>
						</h2>
						<div className="flex text-3xl tracking-tight space-x-16 font-medium animate-fade-in [animation-delay:_1s] opacity-0 [animation-fill-mode:forwards]">
							<div className="flex items-baseline space-x-1">
								<MdNearMe size={26} color={"#747474"} />
								<p className="bg-gradient-to-r from-[#747474] to-[#C6C6C6] text-transparent bg-clip-text">
									Ontario, Canada
								</p>
							</div>
							<div className="flex items-baseline space-x-3">
								<IoMdMail size={22} color={"#9e9e9e"} />
								<p className="bg-gradient-to-r from-[#C6C6C6] to-[#747474] text-transparent bg-clip-text">
									lyndechris@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* FOOTER */}
				<div className="flex flex-col h-[112px] max-w-[1700px] mx-auto">
					{/* DIVIDER */}
					<div className="w-[1700px] h-[2px] bg-[#4E4E4E] mx-auto"></div>
					{/* CONTENT */}
					<div className="flex flex-row h-full">
						{/* DOWN ARROWS */}
						<div className="flex flex-row w-[48px] h-full justify-around items-center">
							<div className="h-[16px] w-[2px] bg-[#4E4E4E]"></div>
							<div className="h-[16px] w-[2px] bg-[#4E4E4E]"></div>
						</div>
						{/* COPY */}
						<div className="flex flex-row text-[#747474] justify-between w-full h-full pl-[113px] items-center">
							<p>CURRENTLY WORKING AT HOME XD</p>
							<p>PREVIOUSLY FRONT END AT ALSO HOME XD</p>
							<p>FORMER INTERN AT ALSO ALSO HOME</p>
						</div>
					</div>
				</div>
			</section>

			{/* PORTFOLIO SECTION */}
			<section
				id="portfolio"
				className={`text-4xl pt-32 max-w-[1700px] gap-[113px] mx-auto flex flex-row snap-start h-screen`}
			>
				{/* SIDE NAV */}
				<div className="flex flex-col gap-4 w-[48px] my-auto">
					<div className="w-[32px] h-[2px] bg-gray-500"></div>
					<div className="w-[32px] h-[2px] bg-[#F4EEE3]"></div>
					{/* <div className="w-[32px] h-[2px] bg-gray-500"></div> */}
				</div>

				{/* PROJECT LIST */}
				<div className="w-full">
					<div className="w-full h-[2px] bg-[#4E4E4E] mx-auto" />
					{projectCardItems.map((cardSummary) => {
						return (
							<>
								<ProjectListItem key={cardSummary.id} card={cardSummary} />
								<div className="w-full h-[2px] bg-[#4E4E4E] mx-auto" />
							</>
						);
					})}
				</div>
			</section>

			{/* <div className="w-[1700px] self-center flex hover:cursor-pointer">
					<div className="flex my-[24px] max-w-full hover:bg-gradient-to-r hover:from-[#15E9B4] hover:to-[#15ACC1] hover:text-transparent hover:bg-clip-text">
						<div className="grow flex flex-col">
							<h2 className="text-white font-light">Ajenda</h2>
							<p className="text-2xl text-[#8c8c8c] font-light">
								Task management and scheduling
							</p>
						</div>
						<img
							src="/images/ajenda.png"
							alt="ajenda"
							className="aspect-video w-1/4 saturate-50 opacity-50 hover:saturate-100 hover:opacity-100"
						/>
					</div>
				</div>

				<div className="w-full flex justify-center hover:cursor-pointer">
					<div className="flex my-[24px] max-w-[1700px]">
						<div className="grow flex flex-col">
							<h2 className="text-white font-light">Streamwake</h2>
							<p className="text-2xl text-[#8c8c8c] font-light">
								Discord bot for watch parties
							</p>
						</div>
						<img
							src="/images/streamwake.png"
							alt="ajenda"
							className="aspect-video w-1/4 saturate-50 opacity-50 hover:saturate-100 hover:opacity-100"
						/>
					</div>
				</div>

				<div className="w-[1700px] self-center flex hover:cursor-pointer">
					<div className="flex my-[24px] max-w-full hover:bg-white hover:bg-opacity-50">
						<div className="grow flex flex-col hover:text hover:bg-white hover:bg-opacity-[0.02] hover:duration-500">
							<h2 className="text-white font-light">Tech Blog</h2>
							<p className="text-2xl text-[#8c8c8c] font-light">
								Written programming articles
							</p>
						</div>
						<img
							src="/images/techblog.png"
							alt="ajenda"
							className="aspect-video w-1/4 saturate-50 opacity-50 hover:saturate-100 hover:opacity-100"
						/>
					</div>
				</div> */}
		</div>
	);
}
