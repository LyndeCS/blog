import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
				className={`${inter.className} bg-[#141419] text-[#F4EEE3] container mx-auto max-w-[1440px]`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
