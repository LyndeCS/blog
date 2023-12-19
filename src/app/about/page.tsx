import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function About() {
	return (
		<section id="about" className="h-screen pt-64">
			<div className="container mx-auto flex max-w-[1440px] justify-start px-4 md:px-8 xl:px-0">
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
								<span className="hidden md:inline-block">Follow on</span> GitHub
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
							committed to taking on diverse projects and exploring new tools to
							broaden my understanding of the technical landscape. My approach
							to work is defined by curiosity and determination; I&apos;m
							excited by challenges, and problem-solving brings a deep sense of
							accomplishment.
						</p>

						<p className="mb-6 ">
							<span className="italic bg-shark-300">
								Here are some technologies I&apos;m comfortable working with:
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
	);
}
