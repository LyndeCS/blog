import Link from "next/link";

export function Navbar() {
	return (
		<header>
			<nav className="py-12 container mx-auto flex justify-between font-semibold absolute max-w-[1700px] left-0 right-0 text-[#F4EEE3]">
				<Link href="/">
					<div>
						<span className="text-secondary">{"<"}</span>
						<span className="relative before:h-[2px] after:h-[2px] before:bg-secondary after:bg-secondary before:absolute after:absolute before:left-0 after:left-[58px] before:bottom-[0px] after:bottom-[0px] before:w-0 after:w-0 hover:before:w-[49px] hover:after:w-[31px] before:duration-200 before:delay-200 before:hover:delay-0 after:duration-200 after:hover:delay-200 after:delay-0">
							Chris Lynde
						</span>
						<span className="text-secondary">{" />"}</span>
					</div>
				</Link>
				<ul className="flex gap-12">
					<li className="relative after:h-[2px] after:bg-secondary after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-full after:duration-[400ms]">
						<Link href="/about">About</Link>
					</li>
					<li className="relative after:h-[2px] after:bg-secondary after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-full after:duration-[400ms]">
						<Link href="/#portfolio">Portfolio</Link>
					</li>
					<li className="relative after:h-[2px] after:bg-secondary after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-[71%] after:duration-[400ms]">
						<Link href="/blog">Blog</Link>
					</li>
					<li className="relative text-secondary after:h-[2px] after:bg-secondary after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-full after:duration-[400ms]">
						<Link href="/#contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
