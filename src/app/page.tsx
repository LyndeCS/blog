import { ProjectList } from "@/components/ProjectList";
import { Footer } from "@/components/Footer";
import { CgArrowLongDown } from "react-icons/cg";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIG9wYWNpdHk9IjEiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMTUxIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjE2IiBzcGVjdWxhckNvbnN0YW50PSIxLjMiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzQzNDM0MyIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgIAkJPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iNTEiPjwvZmVEaXN0YW50TGlnaHQ+CiAgCTwvZmVTcGVjdWxhckxpZ2h0aW5nPgogIAo8L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9IiMxNDE0MTkiPjwvcmVjdD48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0iIzQzNDM0MyIgZmlsdGVyPSJ1cmwoI25ubm9pc2UtZmlsdGVyKSI+PC9yZWN0Pjwvc3ZnPg==')]">
			{/* HERO SECTION */}
			<section
				id="hero"
				className={`h-screen flex flex-col snap-start justify-between`}
			>
				{/* MAIN CONTENT */}
				<div className="grow m-[40px]">
					{/* HEADING */}
					<h1 className="flex flex-col w-max top-0 left-0 leading-[0.8] font-extrabold text-[140px] tracking-[-0.04em]">
						<span className="text-[#F4EEE3]">CHRISTOPHER</span>
						<span className="bg-gradient-to-r from-[#6BF2D0] to-[#33D5EC] text-transparent bg-clip-text w-fit self-end">
							LYNDE
						</span>
					</h1>
					<h2 className="flex flex-col text-[100px] text-[#AFAFAF] font-extralight tracking-[-0.04em] leading-[0.82] ml-[520px] w-max">
						<div className="flex">
							<p>UI</p>
							<span className={`text-[88px]`}>/</span>
							<p>UX FOCUSED</p>
						</div>
						<div className="flex">
							<span className="text-[26px] pl-[8px] leading-9 tracking-tight">
								FRONT-END
							</span>
							<span className="">DEVELOPER</span>
						</div>
					</h2>
				</div>
				{/* TAGLINE */}
				<p className="text-[100px] text-[#AFAFAF] font-extralight leading-[1] tracking-[-0.04em] self-end mx-[40px]">
					“CRAFTING DIGITAL DREAMS.”
				</p>

				{/* FOOTER */}
				<div className="flex flex-col h-[80px] px-[40px] w-full">
					{/* DIVIDER */}
					<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto"></div>
					{/* CONTENT */}
					<div className="flex flex-row h-full justify-between">
						{/* DOWN ARROWS */}
						<a
							href="#portfolio"
							className="flex flex-row w-fit h-full justify-around items-center text-[#F4EEE3] text-[20px]"
						>
							<CgArrowLongDown />
							<CgArrowLongDown />
						</a>
						{/* SOCIALS */}
						<div className="flex flex-row text-[20px] text-[#747474] tracking-wide justify-between w-[1314px] h-full items-center">
							<div className="flex flex-row">
								<p>LYNDECHRIS</p>
								<span className={`${inter.className}`}>@</span>
								<p>GMAIL.COM</p>
							</div>
							<div className="flex flex-row">
								<p>GITHUB.COM</p>
								<span className="text-[18px]">/</span>
								<p>LYNDECS</p>
							</div>
							<div className="flex flex-row">
								<span className={`${inter.className}`}>@</span>
								<p>LYNDE_CHRIS</p>
							</div>
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
