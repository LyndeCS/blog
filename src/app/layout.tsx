import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-pjs" });

export const metadata: Metadata = {
	title: "Chris Lynde",
	description: "Personal portfolio site",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="!scroll-smooth snap-y snap-always snap-mandatory scrollbar-none"
		>
			<body className={`${pjs.variable} font-sans bg-[#141419] text-[#F4EEE3]`}>
				<Navbar />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
