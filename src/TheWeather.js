import React, { useState } from "react";

export default function TheWeather(props) {
	let [unit, setUnit] = useState("celsius");

	function toFdegrees(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function toCdegrees(event) {
		event.preventDefault();
		setUnit("celsius");
	}

	if (unit === "celsius") {
		return (
			<span>
				<span> {props.celsius}</span>
				<span>
					°C |
					<a href="/" onClick={toFdegrees}>
						°F{" "}
					</a>
				</span>
			</span>
		);
	} else {
		let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
		return (
			<span>
				<span> {fahrenheit}</span>
				<span>
					<a href="/" onClick={toCdegrees}>
						{""}
						°C
					</a>{" "}
					| °F{" "}
				</span>
			</span>
		);
	}
}
