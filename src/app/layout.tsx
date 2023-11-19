import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Christopher Lynde",
	description: "Personal portfolio site",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${pjs.className} bg-[#141419] text-[#F4EEE3] container mx-auto max-w-[1440px]`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
