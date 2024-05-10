"use client";

import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

export function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);
	return (
		<>
			<header className="hidden md:block">
				<nav className="mt-[40px] mr-[40px] absolute right-0 text-[#AFAFAF] text-[20px]">
					<ul className="flex gap-[28px]">
						<li className="relative after:h-[1px] after:bg-[#49DAE8] after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-full after:duration-[300ms]">
							<Link href="/#portfolio">PORTFOLIO</Link>
						</li>
						<li className="relative after:h-[1px] after:bg-[#49DAE8] after:absolute after:left-0 after:bottom-[2px] after:w-0 hover:after:w-full after:duration-[300ms]">
							<Link href="/about">ABOUT</Link>
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

			<header className="block md:hidden">
				<nav className="mt-[40px] mr-[40px] absolute right-0">
					<button
						className="text-[#AFAFAF] text-[20px] focus:outline-none"
						onClick={toggleMenu}
					>
						<IoMenuSharp className="h-12 w-12" />
					</button>

					<div
						className={`absolute right-0 mt-2 p-4 bg-[#1d1d24] shadow-md rounded-md
                                ${menuOpen ? "block" : "hidden"}`}
					>
						<ul className="text-[20px]">
							{" "}
							{/* Adjust styling as needed */}
							<li className="py-2 hover:bg-gray-100">
								<Link href="/#portfolio">PORTFOLIO</Link>
							</li>
							<li className="py-2 hover:bg-gray-100">
								<Link href="/about">ABOUT</Link>
							</li>
							<li className="py-2 hover:bg-gray-100">
								<Link href="/blog">BLOG</Link>
							</li>
							<li className="py-2 text-tertiary hover:bg-tertiary hover:bg-opacity-20">
								<a href="mailto:lyndechris@gmail.com">CONTACT</a>
							</li>
							{/* Add the rest of your links similarly */}
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}
