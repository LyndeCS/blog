import Link from "next/link";

export function Navbar() {
	return (
		<nav className="py-12 container mx-auto flex justify-between font-semibold absolute max-w-[1700px] left-0 right-0 text-[#F4EEE3]">
			<Link href="/">
				<div>
					<span className="text-secondary">{"<"}</span>
					<span className="hover:underline decoration-secondary underline-offset-2 decoration-2">
						Chris Lynde
					</span>
					<span className="text-secondary">{" />"}</span>
				</div>
			</Link>
			<ul className="flex gap-12">
				<li className="relative after:h-[2px] after:bg-secondary  after:absolute after:left-0 after:bottom-[1px] after:w-0 hover:after:w-full after:duration-300">
					<Link href="/about">About</Link>
				</li>
				<li className="relative after:h-[2px] after:bg-secondary after:absolute after:left-0 after:bottom-[1px] after:w-0 hover:after:w-full after:duration-300">
					<Link href="/#portfolio">Portfolio</Link>
				</li>
				<li className="relative after:h-[2px] after:bg-secondary after:absolute after:left-0 after:bottom-[1px] after:w-0 hover:after:w-[72%] after:duration-300">
					<Link href="/blog">Blog</Link>
				</li>
				<li className="relative text-secondary after:h-[2px] after:bg-secondary after:absolute after:left-0 after:bottom-[1px] after:w-0 hover:after:w-full after:duration-300">
					<Link href="/#contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
