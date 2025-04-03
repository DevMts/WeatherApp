import {
	type GetWeatherForecastBody,
	type GetWeatherForecastResponse,
	getWeatherForecast,
} from "@/api/get-weather-forecast"
import { useState } from "react"
import { Days } from "./days"
import { Form } from "./form"
import { Future } from "./future"
import { MiniCards } from "./minicards"
import { Temp } from "./temp"
import { getWeatherCurrent, type GetWeatherCurrentResponse } from "@/api/get-weather-weather"

// interface City

export function Main() {
	const [coords, setcords] = useState<GetWeatherForecastBody>({
		lat: "",
		lon: "",
		state: ""
	})
	const [weatherForecast, setweatherForecast] = useState<GetWeatherForecastResponse>()
	const [weatherCurrent, setweatherCurrent] = useState<GetWeatherCurrentResponse>({
		main: {
			temp: 0,
			humidity: 0,
			pressure: 0,
		},
		visibility: "",
		wind: {
			speed: 0,
		},
		name: '',
		weather: [],
	})

	async function getCoords({ lat, lon }: GetWeatherForecastBody) {
		setcords({ lat, lon })
		const data = await getWeatherForecast({ lat, lon })
		console.log(data)
		setweatherForecast(data)
		const weatherCurrent = await getWeatherCurrent({ lat, lon })
		setweatherCurrent(weatherCurrent)
	}

	return (
		<main className="px-8 md:px-44 w-full mx-auto mb-8  ">
			<Form setCoods={getCoords} />
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<Temp  data={weatherCurrent && weatherCurrent} state={coords.state} />
				<MiniCards typeWeather="Umidade" value={weatherCurrent.main.humidity} />
				<MiniCards typeWeather="Velocidade do vento" value={weatherCurrent.wind.speed}/>
				<MiniCards typeWeather="Pressão" value={weatherCurrent.main.pressure} />
				<MiniCards typeWeather="Visibilidade" value={weatherCurrent.visibility} />
				<Future list={weatherForecast?.list}/>
				<Days
					list={weatherForecast?.list?.filter((item) => new Date(item.dt_txt).getHours() === 12)}
				/>
			</div>
		</main>
	)
}
