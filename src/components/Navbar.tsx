import Link from "next/link";

export function Navbar() {
	return (
		<header>
			<nav className="mt-[40px] mr-[40px] absolute right-0 text-[#AFAFAF] text-[20px]">
				<ul className="flex gap-[28px]">
					<li className="relative after:h-[1px] after:bg-[#49DAE8] after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-full after:duration-[300ms]">
						<Link href="/about">ABOUT</Link>
					</li>
					<li className="relative after:h-[1px] after:bg-[#49DAE8] after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-full after:duration-[300ms]">
						<Link href="/#portfolio">PORTFOLIO</Link>
					</li>
					<li className="relative after:h-[1px] after:bg-[#49DAE8] after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-full after:duration-[300ms]">
						<Link href="/blog">BLOG</Link>
					</li>
					<li className="relative text-[#F4EEE3] after:h-[1px] after:bg-[#49DAE8] after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-full after:duration-[300ms]">
						<a href="mailto:lyndechris@gmail.com">CONTACT</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
