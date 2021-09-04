import React from "react";
import "./App.css";
import Credits from "./Credits";
import Search from "./Search.js";

export default function App() {
	return (
		<div className="App">
			<div className="gradient">
				<h1>Weather App</h1>
				<Search />
				<br />
				<Credits />
			</div>
		</div>
	);
}
