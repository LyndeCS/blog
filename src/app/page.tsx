export default function Home() {
	return (
		<div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIG9wYWNpdHk9IjEiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJ0dXJidWxlbmNlIiBiYXNlRnJlcXVlbmN5PSIwLjIiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjE1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+Cgk8ZmVTcGVjdWxhckxpZ2h0aW5nIHN1cmZhY2VTY2FsZT0iNCIgc3BlY3VsYXJDb25zdGFudD0iMC43NSIgc3BlY3VsYXJFeHBvbmVudD0iMjAiIGxpZ2h0aW5nLWNvbG9yPSIjNTE1MTUxIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJ0dXJidWxlbmNlIiByZXN1bHQ9InNwZWN1bGFyTGlnaHRpbmciPgogICAgCQk8ZmVEaXN0YW50TGlnaHQgYXppbXV0aD0iMyIgZWxldmF0aW9uPSIxMDkiPjwvZmVEaXN0YW50TGlnaHQ+CiAgCTwvZmVTcGVjdWxhckxpZ2h0aW5nPgogIAo8L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9IiMxNDE0MTkiPjwvcmVjdD48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0iIzUxNTE1MSIgZmlsdGVyPSJ1cmwoI25ubm9pc2UtZmlsdGVyKSI+PC9yZWN0Pjwvc3ZnPg==')]">
			<div className="container mx-auto max-w-[1440px]">
				{/* HERO SECTION */}
				<section
					id="hero"
					className={`h-screen flex flex-col justify-center snap-start`}
				>
					<h1 className="text-[5rem] font-bold mt-12">
						Hi, my name is{" "}
						<span className="bg-gradient-to-r from-[#15E9B4] to-[#15ACC1] text-transparent bg-clip-text">
							Christopher
						</span>
						.
					</h1>
					<h2 className="text-[3.5rem] mb-32">
						I'm a web developer from London, Ontario.
					</h2>
					<h3 className="opacity-50 italic text-[1.75rem] font-extralight mb-2">
						I'm passionate about creating stylish and intuitive solutions.
					</h3>
					<a
						href="#portfolio"
						className="text-[1.25rem] text-primary max-w-fit"
					>
						// <span className="italic">see my work</span>
					</a>
				</section>
				{/* ABOUT SECTION */}
				<section id="about" className="h-screen snap-start">
					<h2>About</h2>
				</section>
				{/* PORTFOLIO SECTION */}
				<section id="portfolio" className="h-screen snap-start">
					<h2>Portfolio</h2>
				</section>
				{/* CONTACT SECTION */}
				<section id="contact" className="h-screen snap-start">
					<h2>Contact</h2>
				</section>
			</div>
		</div>
	);
}
