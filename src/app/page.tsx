export default function Home() {
	return (
		<>
			{/* HERO SECTION */}
			<section
				id="hero"
				className="h-screen flex flex-col justify-center snap-start"
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
				<a href="#portfolio" className="text-[1.25rem] text-primary max-w-fit">
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
		</>
	);
}
