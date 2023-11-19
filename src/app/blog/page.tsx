import { CategoryDropDown } from "@/components/CategoryDropDown";
import { Searchbar } from "@/components/Searchbar";

export default function blog() {
	return (
		<main className="max-w-[800px] container mx-auto">
			<div className="flex flex-col gap-y-4">
				<h1 className="text-2xl">Blog</h1>
				<Searchbar />
				<CategoryDropDown />
			</div>
		</main>
	);
}
