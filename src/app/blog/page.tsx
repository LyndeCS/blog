import { CategoryDropDown } from "@/components/CategoryDropDown";
import { FeaturedPost } from "@/components/FeaturedPost";
import { Searchbar } from "@/components/Searchbar";
import { TagList } from "@/components/TagList";

export default function blog() {
	return (
		<main className="max-w-[800px] container mx-auto">
			<div className="flex flex-col gap-y-4">
				<h1 className="text-4xl font-semibold">Blog</h1>
				<Searchbar />
				<CategoryDropDown />
				<FeaturedPost />
			</div>
		</main>
	);
}
