export function Searchbar() {
	return (
		<form className="flex gap-4">
			<input
				type="text"
				className="bg-[#1C1C23] p-2 w-full text-sm placeholder:text-[#838383]"
				placeholder="Type to filter posts..."
			/>
		</form>
	);
}
