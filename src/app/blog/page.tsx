import { BlogItem } from "@/components/BlogItem";
import { FeaturedItem } from "@/components/FeaturedItem";
import { Searchbar } from "@/components/Searchbar";
import { TagList } from "@/components/TagList";

const blogs = [
	{
		date: "November 16, 2021",
		title: "Two-Week Tune-Up: Maximizing my Employability - Day 1",
		subtitle: "The first day of my journey to become a better developer",
		tags: ["Figma", "Design"],
		body: "I just finished building a basic todo app using Next.js and I would like to continue using it to build the blog website. The combination of static and server-side rendering sounds like it’s the best of both worlds, and I liked how all of the tools made it feel like a complete package throughout development. I am not very experienced with database hosting so I had to look into this. I used sqlite in the todo app which is fine for small scale local development, but I would like this project to be as close to production level as possible. The combination of Theo.t3’s video on the t3 stack and ChatGPT led me to PlanetScale. I was about to host the database on PlanetScale and use mysql until I noticed that Vercel introduced Vercel Postgres recently, and since I’m deploying the project on Vercel, I figured I might as well try it out and manage everything in one place.",
		image: "/images/thumbnail2.png",
	},
	{
		date: "November 17, 2021",
		title: "Two-Week Tune-Up: Maximizing my Employability - Day 2",
		subtitle: "The second day of my journey to become a better developer",
		tags: ["Figma", "Design"],
		body: "I finished the design of the main blog page. I spoke with designers during the process and gained valuable insight. My skills at quickly prototyping a design in Figma have improved drastically. Realizing how similar auto-layout and CSS Flexbox are had the effect of flipping a switch in my brain. The thing I’d like to improve most now while using Figma is reducing time spent navigating between elements. Certain elements that were deeply nested in groups required me to double click way too many times to focus them. I’m sure there is a way to improve this part of the Figma workflow. I realized you can use the text button to focus text instantly, this was a big help. I decided the dropdown menu overlapping the recommended article didn’t matter. I increased the vertical margin between the filters and the recommended article and enabled wrapping for the tags and everything looks good to me. Paying more attention to font, font weight, font size, font color to emphasize the most important elements like the article title, and reducing emphasis on less important elements like date posted was a key takeaway.",
		image: "/images/thumbnail3.png",
	},
	{
		date: "November 18, 2021",
		title: "Two-Week Tune-Up: Maximizing my Employability - Day 3",
		subtitle: "The third day of my journey to become a better developer",
		tags: ["Figma", "Design"],
		body: "I finished the design of the main blog page. I spoke with designers during the process and gained valuable insight. My skills at quickly prototyping a design in Figma have improved drastically. Realizing how similar auto-layout and CSS Flexbox are had the effect of flipping a switch in my brain. The thing I’d like to improve most now while using Figma is reducing time spent navigating between elements. Certain elements that were deeply nested in groups required me to double click way too many times to focus them. I’m sure there is a way to improve this part of the Figma workflow. I realized you can use the text button to focus text instantly, this was a big help. I decided the dropdown menu overlapping the recommended article didn’t matter. I increased the vertical margin between the filters and the recommended article and enabled wrapping for the tags and everything looks good to me. Paying more attention to font, font weight, font size, font color to emphasize the most important elements like the article title, and reducing emphasis on less important elements like date posted was a key takeaway.",
		image: "/images/thumbnail4.png",
	},
	{
		date: "November 19, 2021",
		title: "Two-Week Tune-Up: Maximizing my Employability - Day 4",
		subtitle: "The fourth day of my journey to become a better developer",
		tags: ["Figma", "Design"],
		body: "I finished the design of the main blog page. I spoke with designers during the process and gained valuable insight. My skills at quickly prototyping a design in Figma have improved drastically. Realizing how similar auto-layout and CSS Flexbox are had the effect of flipping a switch in my brain. The thing I’d like to improve most now while using Figma is reducing time spent navigating between elements. Certain elements that were deeply nested in groups required me to double click way too many times to focus them. I’m sure there is a way to improve this part of the Figma workflow. I realized you can use the text button to focus text instantly, this was a big help.",
		image: "/images/thumbnail3.png",
	},
];

export default function blog() {
	return (
		<main className="max-w-[800px] min-h-screen container mx-auto">
			<div className="flex flex-col gap-y-4">
				<h1 className="text-4xl font-semibold">Blog</h1>
				<Searchbar />
				<TagList />
				<FeaturedItem />
				<div className="grid grid-cols-3 gap-x-8 gap-y-10">
					{blogs.map((blog) => {
						return <BlogItem blog={blog} />;
					})}
					{blogs.map((blog) => {
						return <BlogItem blog={blog} />;
					})}
				</div>
			</div>
		</main>
	);
}
