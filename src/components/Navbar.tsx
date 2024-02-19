import Link from "next/link";

export function Navbar() {
	return (
		<nav className="py-12 container mx-auto flex justify-between font-semibold absolute max-w-[1700px] left-0 right-0 text-[#F4EEE3]">
			<Link href="/">
				<div>
					<span className="text-secondary">{"<"}</span>
					<span className="hover:underline decoration-secondary underline-offset-2 decoration-2">
						Christopher Lynde
					</span>
					<span className="text-secondary">{" />"}</span>
				</div>
			</Link>
			<ul className="flex gap-12">
				<li className="hover:underline hover:decoration-2 underline-offset-2 decoration-secondary">
					<Link href="/about">About</Link>
				</li>
				<li className="hover:underline hover:decoration-2 underline-offset-2 decoration-secondary">
					<Link href="/#portfolio">Portfolio</Link>
				</li>
				<li className="hover:underline hover:decoration-2 underline-offset-2 decoration-secondary">
					<Link href="/blog">Blog</Link>
				</li>
				<li className="hover:underline hover:decoration-2 underline-offset-2 decoration-secondary text-secondary">
					<Link href="/#contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
