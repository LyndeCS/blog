import Link from "next/link";

export function Navbar() {
	return (
		<nav className="py-12 flex justify-between">
			<div className="hover:underline decoration-secondary">
				<Link href="/">{`<Christopher Lynde />`}</Link>
			</div>
			<ul className="flex gap-12">
				<li className="hover:underline decoration-secondary">
					<Link href="/#about">About</Link>
				</li>
				<li className="hover:underline decoration-secondary">
					<Link href="/#portfolio">Portfolio</Link>
				</li>
				<li className="hover:underline decoration-secondary">
					<Link href="/#contact">Contact</Link>
				</li>
				<li className="hover:underline decoration-secondary">
					<Link href="/blog">Blog</Link>
				</li>
			</ul>
		</nav>
	);
}
