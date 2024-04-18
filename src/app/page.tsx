import { VT323 } from "next/font/google";
import { SlArrowDown } from "react-icons/sl";
import { MdNearMe } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

import { ProjectList } from "@/components/ProjectList";
import { Footer } from "@/components/Footer";

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
					{/* <div className="flex flex-col gap-4 w-[48px] my-auto items-center">
						<div className="w-[24px] h-[1px] bg-[#F4EEE3]"></div>
						<div className="w-[16px] h-[1px] bg-gray-500"></div>
					</div> */}
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
							<span className="bg-gradient-to-r from-[#7b7b7b] via-[#848484] to-[#7b7b7b] text-transparent bg-clip-text">
								I bring digital dreams to life.
							</span>
						</h2>
						<div className="flex text-3xl tracking-tight space-x-16 font-medium animate-fade-in [animation-delay:_1s] opacity-0 [animation-fill-mode:forwards]">
							<div className="flex items-baseline space-x-1">
								<MdNearMe size={26} color={"#7b7b7b"} />
								<p className="bg-gradient-to-r from-[#7b7b7b] to-[#848484] text-transparent bg-clip-text">
									Ontario, Canada
								</p>
							</div>
							<div className="flex items-baseline space-x-3">
								<IoMdMail size={22} color={"#848484"} />
								<p className="bg-gradient-to-r from-[#848484] to-[#747474] text-transparent bg-clip-text">
									lyndechris@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* FOOTER */}
				<div className="flex flex-col h-[112px] max-w-[1700px] mx-auto">
					{/* DIVIDER */}
					<div className="w-[1700px] h-[1px] bg-[#4E4E4E] mx-auto"></div>
					{/* CONTENT */}
					<div className="flex flex-row h-full">
						{/* DOWN ARROWS */}
						{/* <div className="flex flex-row w-[48px] h-full justify-around items-center">
							<div className="h-[16px] w-[1px] bg-[#4E4E4E]"></div>
							<div className="h-[16px] w-[1px] bg-[#4E4E4E]"></div>
						</div> */}
						{/* COPY */}
						<div className="flex flex-row text-[#747474] font-medium tracking-wide justify-between w-full h-full pl-[113px] items-center">
							{/* <p>Front-End Development</p>
							<p>Responsive Design</p>
							<p>UI/UX Focus</p> */}
						</div>
					</div>
				</div>
			</section>

			{/* PORTFOLIO SECTION */}
			<section
				id="portfolio"
				className={`pt-32 max-w-[1700px] gap-[113px] mx-auto flex flex-col justify-between snap-start h-screen w-screen`}
			>
				<ProjectList />
				<Footer />
			</section>
		</div>
	);
}
