import { FaCloud } from "react-icons/fa6"
import { Card, CardContent, CardTitle } from "../ui/card"
import type { GetWeatherForecastResponse } from "@/api/get-weather-forecast"
import { useEffect, useState } from "react"

export function Future({ list }: GetWeatherForecastResponse) {
	const [newProvisions, setNewProvisions] = useState<
		{
			main: { temp: number; temp_max: number; temp_min: number }
			weather: { icon: string; description: string }[]
			dt_txt: string
			adminCodes1: { ISO3166_2: string }
		}[]
	>([])

	useEffect(() => {
		if (!list) return // Evita erro se `list` for undefined
		const current = new Date().toISOString().split("T")[0]
		console.log(list)

		console.log(list.filter((item) => item.dt_txt.startsWith(current)))

		setNewProvisions(list.filter((item) => item.dt_txt.startsWith(current)))
	}, [list]) // Só executa quando `list` muda

	return (
		<Card className="md:col-span-4">
			<CardContent className="">
				<CardTitle>Previsão para as próximas horas</CardTitle>
				<div className="flex flex-wrap items-center gap-6 mt-2.5">
					{newProvisions.map((weather) => {
						console.log(weather)

						return (
							<div
								key={weather.dt_txt}
								className="flex flex-col items-center gap-1.25 leading-[1.3] "
							>
								<span className="font-poppins text-xs text-muted-foreground">
									{weather.dt_txt.split(" ")[1]}
								</span>
								<FaCloud className="size-6 text-sky-400" />
								<span className="font-poppins text-xs text-muted-foreground">24°C</span>
							</div>
						)
					})}
					{list && (list.length > 1 && newProvisions.length === 0 && (
						<div className="text-sm text-muted-foreground">
							Nenhum dado disponível para as próximas horas.
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
