import { Waves } from "@/components/Waves";
import { VT323, IBM_Plex_Mono } from "next/font/google";
const vt323 = VT323({ weight: "400", subsets: ["latin"] });
const ipm = IBM_Plex_Mono({
	weight: ["200", "300", "400"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIG9wYWNpdHk9IjEiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMTUxIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjE2IiBzcGVjdWxhckNvbnN0YW50PSIxLjMiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzQzNDM0MyIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgIAkJPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iNTEiPjwvZmVEaXN0YW50TGlnaHQ+CiAgCTwvZmVTcGVjdWxhckxpZ2h0aW5nPgogIAo8L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9IiMxNDE0MTkiPjwvcmVjdD48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0iIzQzNDM0MyIgZmlsdGVyPSJ1cmwoI25ubm9pc2UtZmlsdGVyKSI+PC9yZWN0Pjwvc3ZnPg==')]">
			{/* HERO SECTION */}
			<section
				id="hero"
				className={`h-screen flex flex-col justify-center pt-24`}
			>
				<div className="container mx-auto max-w-[1440px] mb-32">
					<div className="flex flex-col mb-20">
						<h1 className="text-[5rem] font-bold">
							Hi, my name is{" "}
							<span className="bg-gradient-to-r from-[#15E9B4] to-[#15ACC1] text-transparent bg-clip-text">
								Christopher
							</span>
							.
						</h1>
						<h2 className="text-[3.5rem] leading-[3.2rem]">
							Web developer. I bring digital dreams to life.
						</h2>
					</div>
					{/* <h3 className="text-[#B9B9BA] text-[1.75rem] font-extralight">
						I&apos;m passionate about creating stylish and intuitive solutions.
					</h3> */}
					<a
						href="#portfolio"
						className="text-[1.75rem] text-white max-w-fit font-light"
					>
						{"//"}{" "}
						<span className="ml-1 text-3xl hover:text-primary animate-pulse">
							see my work
						</span>
					</a>
				</div>
				{/* <Waves /> */}
			</section>

			{/* PORTFOLIO SECTION */}

			<section id="portfolio" className="min-h-screen max-h-max mt-[7px]">
				{/* <div className="h-32 pt-4 w-full flex bg-gradient-to-b from-[#113532] text-[#141419] space-x-8 overflow-hidden">
					<h3 className="text-7xl -rotate-12">REACT</h3>
					<h3 className="text-7xl -rotate-12">TAILWIND</h3>
					<h3 className="text-7xl -rotate-12">NEXT.JS</h3>
					<h3 className="text-7xl -rotate-12">TYPESCRIPT</h3>
					<h3 className="text-7xl -rotate-12">MYSQL</h3>
					<h3 className="text-7xl -rotate-12">NODE.JS</h3>
				</div> */}

				<div
					className={`${ipm.className} text-4xl flex flex-col my-48 justify-between`}
				>
					<div className="w-full flex border-y-2 border-[#7d7d7d] border-opacity-50 justify-center hover:cursor-pointer">
						<div className="flex my-[16px] max-w-[1440px] hover:bg-gradient-to-r hover:from-[#15E9B4] hover:to-[#15ACC1] hover:text-transparent hover:bg-clip-text">
							<div className="w-2/3 flex flex-col justify-between">
								<div>
									<h2 className="text-white">Ajenda</h2>
									<p className="text-2xl text-[#8c8c8c] font-light">
										Task management and scheduling
									</p>
								</div>
								<div></div>
							</div>
							<img
								src="/images/ajenda.png"
								alt="ajenda"
								className="aspect-video w-1/3 saturate-50 opacity-50 hover:opacity-100"
							/>
						</div>
					</div>

					<div className="w-full flex justify-center hover:cursor-pointer">
						<div className="flex my-[16px] max-w-[1440px]">
							<div className="w-2/3 flex flex-col">
								<h2 className="text-white">Streamwake</h2>
								<p className="text-2xl text-[#8c8c8c] font-light">
									Discord bot for watch parties
								</p>
							</div>
							<img
								src="/images/streamwake.png"
								alt="ajenda"
								className="aspect-video w-1/3 saturate-50 opacity-50"
							/>
						</div>
					</div>

					<div className="w-full flex justify-center border-y-2 border-[#7d7d7d] border-opacity-50 hover:cursor-pointer">
						<div className="flex my-[16px] max-w-[1440px] hover:bg-white hover:bg-opacity-50">
							<div className="w-2/3 flex flex-col hover:text hover:bg-white hover:bg-opacity-[0.02] hover:duration-500">
								<h2 className="text-white">Tech Blog</h2>
								<p className="text-2xl text-[#8c8c8c] font-light">
									Written programming articles
								</p>
							</div>
							<img
								src="/images/techblog.png"
								alt="ajenda"
								className="aspect-video w-1/3 saturate-50 opacity-50"
							/>
						</div>
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
