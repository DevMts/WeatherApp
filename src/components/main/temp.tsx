import type { GetWeatherCurrentResponse } from "@/api/get-weather-weather"
import { Card, CardContent } from "../ui/card"
import { WeatherIcon } from "@/icons";

export function Temp({ data}: {data: GetWeatherCurrentResponse}) {
	
	return (
		<Card className="md:col-span-4">
			<CardContent className="flex md:flex-row flex-col-reverse justify-between px-6 items-center">
				<div className="flex flex-col items-center md:items-start font-poppins leading-[1.3]">
					<strong className="text-2xl  font-semibold text-foreground">{data.main.temp}°C</strong>
					<span className="text-muted-foreground text-xs font-medium mt-2.5">
						{data.name}

					</span>
					<span className="text-xs font-medium text-secondary-foreground">
						{data?.weather[0]?.description.replace(/^\w/, (c) => c.toUpperCase())}
					</span>
				</div>
				<div>
					{/* <WeatherIcon iconCode={data.weather[0].icon} size="80"/> */}
					{data.weather[0] === undefined ? null : <WeatherIcon iconCode={data.weather[0].icon} size="80"/>}
				</div>
			</CardContent>
		</Card>
	)
}
