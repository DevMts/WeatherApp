import { Card, CardContent, CardTitle } from "../ui/card"
import type { GetWeatherForecastResponse } from "@/api/get-weather-forecast"
import { useEffect, useState } from "react"
import { WeatherIcon } from "@/icons"

export function Future({ list }: GetWeatherForecastResponse) {
	const [newProvisions, setNewProvisions] = useState<
		{
			main: { temp: number; temp_max: number; temp_min: number }
			weather: { icon: string; description: string }[]
			dt_txt: string
		}[]
	>([])

	useEffect(() => {
		if (!list) return

		const now = new Date()
		const next24h = new Date(now.getTime() + 24 * 60 * 60 * 1000)

		const filtered = list.filter((item) => {
			const itemDate = new Date(item.dt_txt)
			return itemDate >= now && itemDate <= next24h
		})

		setNewProvisions(filtered)
	}, [list])

	return (
		<Card className="md:col-span-4">
			<CardContent className="">
				<CardTitle>Previsão para as próximas horas</CardTitle>
				<div className="flex flex-wrap md:justify-start justify-center items-center gap-6 mt-2.5">
					{newProvisions.map((weather) => {
						console.log(weather)

						return (
							<div
								key={weather.dt_txt}
								className="flex flex-col items-center gap-1.25 leading-[1.3] "
							>
								<span className="font-poppins text-xs text-muted-foreground">
									{weather.dt_txt.split(" ")[1].slice(0, 5)}
								</span>
								<WeatherIcon
									iconCode={weather.weather[0].icon && weather.weather[0].icon}
									size="24"
								/>
								<span className="font-poppins text-xs text-muted-foreground">
									{weather.main.temp}°C
								</span>
							</div>
						)
					})}
					{list && list.length > 1 && newProvisions.length === 0 && (
						<div className="text-sm text-muted-foreground">
							Nenhum dado disponível para as próximas horas.
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	)
}
