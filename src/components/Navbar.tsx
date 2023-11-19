import Link from "next/link";

export function Navbar() {
	return (
		<nav className="py-12 mb-12 flex justify-between font-semibold">
			<Link href="/">
				<div className="hover:underline decoration-secondary">
					<span className="text-secondary">{"<"}</span>Christopher Lynde
					<span className="text-secondary">{" />"}</span>
				</div>
			</Link>
			<ul className="flex gap-12">
				<li className="hover:underline hover:decoration-2 underline-offset-2 decoration-secondary">
					<Link href="/#about">About</Link>
				</li>
				<li className="hover:underline hover:decoration-2 underline-offset-2 decoration-secondary">
					<Link href="/#portfolio">Portfolio</Link>
				</li>
				<li className="hover:underline hover:decoration-2 underline-offset-2 decoration-secondary">
					<Link href="/#contact">Contact</Link>
				</li>
				<li className="hover:underline decoration-secondary underline underline-offset-2 decoration-2">
					<Link href="/blog">Blog</Link>
				</li>
			</ul>
		</nav>
	);
}
