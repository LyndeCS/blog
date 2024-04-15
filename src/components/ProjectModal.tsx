import { cardSummary } from "@/types/portfolio";

type ProjectModalProps = {
	// children: ReactNode;
	onClose?: () => void;
	projectSummary: cardSummary;
};

export function ProjectModal({ onClose, projectSummary }: ProjectModalProps) {
	const handleClose = () => {
		if (onClose) onClose();
	};

	return (
		<div className="fixed top-0 left-0 flex bg-black w-full h-full rounded shadow-lg">
			{/* z-50 */}
			{/* {children} */}
			<button onClick={handleClose}>Close Modal</button>
		</div>
	);
}
