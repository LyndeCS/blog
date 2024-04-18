import { CgArrowLongUp } from "react-icons/cg";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export function Footer() {
	return (
		<footer className="flex flex-col h-[80px] w-full">
			{/* DIVIDER */}
			<div className="w-full h-[1px] bg-[#4E4E4E] mx-auto"></div>
			{/* CONTENT */}
			<div className="flex flex-row h-full justify-between">
				{/* DOWN ARROWS */}
				<a
					href="#hero"
					className="flex flex-row w-fit h-full justify-around items-center text-[#F4EEE3] text-[20px]"
				>
					<CgArrowLongUp />
					<CgArrowLongUp />
				</a>
				{/* SOCIALS */}
				<div className="flex flex-row text-[20px] text-[#747474] tracking-wide justify-between w-[1314px] h-full items-center">
					<p>BUILT WITH NEXT.JS</p>
					<p>© 2024 CHRISTOPHER LYNDE</p>
				</div>
			</div>
		</footer>
	);
}
