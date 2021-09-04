import React from "react";
import "./ButtonStyling.css";

export default function Search() {
	let form = (
		<form onSubmit="">
			<input type="search" placeholder="Type a city" onChange="" />
			<input type="submit" className="btn btn-primary" value="Search" />
			<button className="btn btn-success"> Current Location </button>
		</form>
	);

	return (
		<div className="Search">
			<div>{form}</div>
			<h2> the location or city name </h2>
			<div className="row">
				<div className="col-4">Time and Date</div>
				<div className="col-4">
					<div>Description </div>
					<div class="clearfix"> Image </div>
					<span> Temperature </span>
					<a href="#">°C</a> | <a href="#">°F</a>
				</div>
				<div className="col-4">
					<li>Humidity</li>
					<li>Wind Speed</li>
				</div>
			</div>
		</div>
	);
}
