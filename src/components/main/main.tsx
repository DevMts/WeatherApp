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
import { toast } from "sonner"

// interface City

export function Main() {
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
		const data = await getWeatherForecast({ lat, lon })
		const weatherCurrent = await getWeatherCurrent({ lat, lon })
		if (!data || !weatherCurrent) {
			toast.error("Erro ao buscar cidade, verifique o nome da cidade")
			return
		}
		setweatherForecast(data)
		setweatherCurrent(weatherCurrent)
	}

	return (
		<main className="px-8 md:px-44 w-full mx-auto mb-8  ">
			<Form setCoods={getCoords} />
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<Temp data={weatherCurrent && weatherCurrent} />
				<MiniCards typeWeather="Umidade" value={weatherCurrent.main.humidity} />
				<MiniCards typeWeather="Velocidade do vento" value={weatherCurrent.wind.speed} />
				<MiniCards typeWeather="Pressão" value={weatherCurrent.main.pressure} />
				<MiniCards typeWeather="Visibilidade" value={weatherCurrent.visibility} />
				<Future list={weatherForecast?.list} />
				<Days
					list={weatherForecast?.list?.filter((item) => new Date(item.dt_txt).getHours() === 12)}
				/>
			</div>
		</main>
	)
}
