type SearchbarProps = {
	onSearchChange: (searchString: string) => void;
};

export function Searchbar({ onSearchChange }: SearchbarProps) {
	return (
		<input
			type="text"
			className="bg-[#1C1C23] p-2 w-full text-sm placeholder:text-[#838383]"
			placeholder="Type to filter posts..."
			onChange={(e) => {
				onSearchChange(e.target.value);
			}}
		/>
	);
}
