import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import headshot from "headshot.png";

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
						I&apos;m a web developer from London, Ontario.
					</h2>
					<h3 className="opacity-50 italic text-[1.75rem] font-extralight mb-2">
						I&apos;m passionate about creating stylish and intuitive solutions.
					</h3>
					<a
						href="#portfolio"
						className="text-[1.25rem] text-primary max-w-fit"
					>
						{"//"} <span className="italic ml-1">see my work</span>
					</a>
				</section>

				{/* PORTFOLIO SECTION */}
				<section id="portfolio" className="h-screen snap-start">
					<div className="flex">
						<div className="space-y-4">
							<h2 className="text-xl">Ajenda</h2>
							<h2 className="text-xl">Streamwake</h2>
							<h2 className="text-xl">Personal Tech Blog</h2>
						</div>
					</div>
				</section>

				{/* ABOUT SECTION */}
				<section id="about" className="h-screen snap-start">
					<div className="container mx-auto flex justify-start px-4 md:px-8 xl:px-0">
						{/* Left section with image and social links */}
						<div className="w-1/4 h-min flex-shrink">
							{/* Profile image */}
							<img
								src="/images/headshot.png"
								alt="Your Name"
								className="rounded-full w-24 md:w-48 h-32 md:h-64 object-cover object-top"
							/>

							{/* Social media links */}
							<div className="mt-4 md:mt-8 flex flex-col space-y-2 md:space-y-4 text-sm">
								<div className="flex items-center">
									<FaGithub size={16} className="text-gray-500" />
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://github.com/LyndeCS"
										className="text-white ml-4 hover:text-secondary"
									>
										<span className="hidden md:inline-block">Follow on</span>{" "}
										GitHub
									</a>
								</div>
								<div className="flex items-center">
									<FaLinkedin size={16} className="text-gray-500" />
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/in/chrislynde/"
										className="text-white ml-4 hover:text-secondary"
									>
										<span className="hidden md:inline-block">Follow on</span>{" "}
										LinkedIn
									</a>
								</div>
								<div className="flex items-center">
									<FaTwitter size={16} className="text-gray-500" />
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://twitter.com/lynde_chris"
										className="text-white ml-4 hover:text-secondary"
									>
										<span className="hidden md:inline-block">Follow on</span>{" "}
										Twitter
									</a>
								</div>

								{/* DIVIDER */}
								<hr className="w-[75px] xxs:w-[90px] md:w-[175px] lg:w-[190px] bg-gray-500 h-[1px] border-none opacity-50"></hr>

								<div className="flex items-center">
									<FaEnvelope size={16} className="text-gray-500" />
									<a
										href="mailto:lyndechris@gmail.com"
										className="text-white ml-4 hover:text-secondary"
									>
										<span className="hidden md:inline-block">
											lyndechris@gmail.com
										</span>
										<span className="inline-block md:hidden">Email</span>
									</a>
								</div>
							</div>
						</div>

						{/* Middle section with paragraphs */}
						<div className="flex-grow lg:w-3/5 xl:w-2/4 pl-4 md:pl-8 lg:pl-0">
							{/* HEADING/SUBHEADING */}
							<div className="flex flex-col h-full md:h-min text-2xl xs:text-3xl sm:text-4xl sm:pl-4 md:pl-0 mt-[-6px]">
								<h1 className="font-bold text-white mb-6">
									Hi, my name is <br className="lg:hidden" />
									<span className="text-secondary">Christopher Lynde</span>.
								</h1>
								<h1 className="font-bold text-white md:mb-12 text-xl xxs:text-2xl xs:text-3xl sm:text-4xl">
									I&apos;m a full-stack developer with a passion for creating{" "}
									<span className="underline italic decoration-secondary">
										stylish and intuitive interfaces.
									</span>
								</h1>
							</div>

							{/* PARAGRAPHS (DESKTOP) */}
							<div className="hidden md:block flex-grow text-lg lg:text-xl md:text-justify text-white">
								<p className="mb-6">
									I graduated from Fanshawe College, where I learned the
									fundamentals of web development. Since then, I&apos;ve been
									committed to taking on diverse projects and exploring new
									tools to broaden my understanding of the technical landscape.
									My approach to work is defined by curiosity and determination;
									I&apos;m excited by challenges, and problem-solving brings a
									deep sense of accomplishment.
								</p>

								<p className="mb-6 ">
									<span className="italic bg-shark-300">
										Here are some technologies I&apos;m comfortable working
										with:
									</span>
								</p>

								<div className="space-y-2 mb-6">
									<div className="flex">
										<div className="w-1/5 font-bold underline">Front-End:</div>
										<div className="flex-1">
											React, JavaScript (ES6+), TypeScript, HTML5, CSS3
										</div>
									</div>
									<div className="flex">
										<div className="w-1/5 font-bold underline">Back-End:</div>
										<div className="flex-1">
											Node, LAMP stack (Linux, Apache, MySQL, PHP)
										</div>
									</div>
									<div className="flex">
										<div className="w-1/5 font-bold underline">Databases:</div>
										<div className="flex-1">
											MySQL, Microsoft SQL Server, Postgres, Firebase, MongoDB
										</div>
									</div>
									<div className="flex">
										<div className="w-1/5 font-bold underline">Styling:</div>
										<div className="flex-1">Tailwind, MUI, Bootstrap</div>
									</div>
									<div className="flex">
										<div className="w-1/5 font-bold underline">CMS:</div>
										<div className="flex-1">WordPress</div>
									</div>
									<div className="flex">
										<div className="w-1/5 font-bold underline">Scripting:</div>
										<div className="flex-1">Python</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* CONTACT SECTION */}
				<section id="contact" className="h-screen snap-start">
					<h2>Contact</h2>
				</section>
			</div>
		</div>
	);
}
