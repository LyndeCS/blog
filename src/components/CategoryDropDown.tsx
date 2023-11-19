export function CategoryDropDown() {
	const categories = [
		"Front-end",
		"Back-end",
		"Full-stack",
		"DevOps",
		"Design",
		"Other",
	];
	return (
		<select
			name="categories"
			className="bg-[#1C1C23] px-4 py-2 text-sm w-1/3"
			defaultValue=""
		>
			<option key={0} value="" disabled hidden>
				Categories
			</option>
			{categories.map((category, index) => (
				<option key={index + 1} value={category}>
					{category}
				</option>
			))}
		</select>
	);
}
