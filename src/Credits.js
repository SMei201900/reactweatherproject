import React from "react";
import "./CreditStyle.css";

export default function Credits() {
	return (
		<div>
			<span className="credit">
				<a
					className="codeSource"
					href="https://github.com/SMei201900/reactweatherproject"
					target="_blank"
					rel="noreferrer"
				>
					Open source code
				</a>{" "}
				by:{" "}
				<a
					className="profile"
					href="https://www.linkedin.com/in/sally-mei-1a4439210/"
					target="_blank"
					rel="noreferrer"
				>
					Sally Mei
				</a>{" "}
				and{" "}
				<a
					className="hostSite"
					href="https://condescending-swartz-356e87.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					hosted by Netlify
				</a>
			</span>
		</div>
	);
}
