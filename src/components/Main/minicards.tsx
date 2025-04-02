import { IoWater } from "react-icons/io5"
import { Card, CardContent } from "../ui/card"
import { LuWind } from "react-icons/lu"
import { FaEye, FaGauge } from "react-icons/fa6"
import { X } from "lucide-react"
import colors from 'tailwindcss/colors'

interface miniCardProps {
	typeWeather: "Umidade" | "Velocidade do vento" | "Pressão" | "Visibilidade"
}

export function MiniCards({ typeWeather }: miniCardProps) {
	function iconTheme() {
		switch (typeWeather) {
			case "Umidade":
				return <IoWater color={colors.sky[500]} size={20}/>
			case "Velocidade do vento":
				return <LuWind color={colors.slate[400]}  size={20}/>
			case "Pressão":
				return <FaGauge color={colors.violet[400]}  size={20}/>
			case "Visibilidade":
				return <FaEye color={colors.green[300]}  size={20} />
			default:
				return <X />
		}
	}

	return (
		<Card className="col-span-1 w-full">
			<CardContent className="flex justify-between items-center">
				<div className="leading-[1.3] flex flex-col gap-1.25 items-start">
					<span className="text-sm text-muted-foreground">{typeWeather}</span>
					<span className="text-xl font-semibold text-foreground">65%</span>
				</div>
				<div>{iconTheme()}</div>
			</CardContent>
		</Card>
	)
}
