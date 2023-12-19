import styles from "./Waves.module.css";

export function Waves() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={styles.waves}
			preserveAspectRatio="none"
			viewBox="0 24 150 28"
		>
			<defs>
				<path
					id="gentle-wave"
					d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
				></path>
			</defs>
			<g className={styles.parallax}>
				<use
					x="48"
					fill="rgba(21, 223, 182, 0.02"
					xlinkHref="#gentle-wave"
				></use>
				<use
					x="48"
					y="5"
					fill="rgba(21, 223, 182, 0.03)"
					xlinkHref="#gentle-wave"
				></use>
				<use
					x="48"
					y="10"
					fill="rgba(21, 223, 182, 0.05)"
					xlinkHref="#gentle-wave"
				></use>
				<use
					x="48"
					y="15"
					fill="rgba(21, 223, 182, 0.07)"
					xlinkHref="#gentle-wave"
				></use>
			</g>
		</svg>
	);
}
