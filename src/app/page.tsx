import { Waves } from "@/components/Waves";
import { VT323 } from "next/font/google";
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export default function Home() {
	return (
		<div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIG9wYWNpdHk9IjEiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMTUxIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjE2IiBzcGVjdWxhckNvbnN0YW50PSIxLjMiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzQzNDM0MyIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgIAkJPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iNTEiPjwvZmVEaXN0YW50TGlnaHQ+CiAgCTwvZmVTcGVjdWxhckxpZ2h0aW5nPgogIAo8L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9IiMxNDE0MTkiPjwvcmVjdD48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0iIzQzNDM0MyIgZmlsdGVyPSJ1cmwoI25ubm9pc2UtZmlsdGVyKSI+PC9yZWN0Pjwvc3ZnPg==')]">
			{/* HERO SECTION */}
			<section id="hero" className={`h-screen flex flex-col justify-between`}>
				<div className="container mx-auto max-w-[1440px] mt-[15rem]">
					<h1 className="text-[5rem] font-bold mt-12">
						Hi, my name is{" "}
						<span className="bg-gradient-to-r from-[#15E9B4] to-[#15ACC1] text-transparent bg-clip-text">
							Christopher
						</span>
						.
					</h1>
					<h2 className="text-[3.5rem] mb-16">
						I&apos;m a web developer from London, Ontario.
					</h2>
					<h3 className="text-[#B9B9BA] text-[1.75rem] font-extralight mb-2 italic">
						I&apos;m passionate about creating stylish and intuitive solutions.
					</h3>
					<a
						href="#portfolio"
						className="text-[1.25rem] text-primary max-w-fit"
					>
						{"//"} <span className="italic ml-1 text-2xl">see my work</span>
					</a>
				</div>
				<Waves />
			</section>

			{/* PORTFOLIO SECTION */}
			<section id="portfolio" className="min-h-screen max-h-max mt-[7px]">
				<div className="h-32 pt-4 w-full flex bg-[#113532] text-[#141419] space-x-8 overflow-hidden">
					<h3 className="text-7xl -rotate-12">REACT</h3>
					<h3 className="text-7xl -rotate-12">TAILWIND</h3>
					<h3 className="text-7xl -rotate-12">NEXT.JS</h3>
					<h3 className="text-7xl -rotate-12">TYPESCRIPT</h3>
					<h3 className="text-7xl -rotate-12">MYSQL</h3>
					<h3 className="text-7xl -rotate-12">NODE.JS</h3>
				</div>
				<div
					className={`${vt323.className} text-7xl flex flex-col container mx-auto max-w-[1440px] h-[100%] my-48 justify-between space-y-48 text-[#B9B9BA]`}
				>
					<div className="w-full">
						<h2 className="text-white">AJENDA</h2>
						<p className="text-4xl">Task Management and Scheduling</p>
						<p className="text-4xl">React Firebase MUI</p>
					</div>
					<div className="w-full">
						<h2 className="text-white">STREAMWAKE</h2>
						<p className="text-4xl">Discord bot for watch parties</p>
						<p className="text-4xl">Node.js Discord.js MySQL</p>
					</div>
					<div className="w-full">
						<h2 className="text-white">TECH BLOG</h2>
						<p className="text-4xl">Succinct solutions for common challenges</p>
						<p className="text-4xl">React Typescript Tailwind Next.js</p>
					</div>
				</div>
			</section>

			{/* ABOUT SECTION */}

			{/* CONTACT SECTION */}
			<section id="contact" className="h-screen">
				<h2>Contact</h2>
			</section>
		</div>
	);
}
