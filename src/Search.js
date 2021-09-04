import React, { useState } from "react";
import axios from "axios";

export default function Search() {
	let [city, setCity] = useState("");
	let [weatherData, setWeatherData] = useState({ ready: false });

	function weather(response) {
		setWeatherData({
			ready: true,
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			humidity: response.data.main.humidity,
			windSpeed: response.data.wind.speed,
		});
	}

	function submitting(event) {
		event.preventDefault();
		let apiKey = `640c47110d9c3fa96e9fd6063e6e2e9f`;
		let units = `metric`;
		let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
		axios.get(apiURL).then(weather);
	}

	function cityname(event) {
		setCity(event.target.value);
	}

	let form = (
		<form onSubmit={submitting}>
			<input type="search" placeholder="Type a city" onChange={cityname} />
			<input type="submit" className="btn btn-primary" value="Search" />
			<button className="btn btn-success"> Current Location </button>
		</form>
	);

	if (weatherData.ready) {
		return (
			<div className="Search">
				<div>{form}</div>
				<h2 className="text-capitalize"> {city} </h2>
				<div className="row">
					<div className="col-4">Time and Date</div>
					<div className="col-4">
						<div className="text-capitalize"> {weatherData.description} </div>
						<div class="clearfix">
							{" "}
							<img src={weatherData.icon} alt={weatherData.description} />{" "}
						</div>
						<span> {weatherData.temperature} </span>
						<a href="https://www.google.com/">°C</a> |{" "}
						<a href="https://www.google.com/">°F</a>
					</div>
					<div className="col-4">
						<li>Humidity: {weatherData.humidity}%</li>
						<li>Wind Speed: {weatherData.windSpeed}km/h</li>
					</div>
				</div>
			</div>
		);
	} else {
		return form;
	}
}
