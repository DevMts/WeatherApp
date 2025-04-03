import { IoWater } from "react-icons/io5"
import { Card, CardContent } from "../ui/card"
import { LuWind } from "react-icons/lu"
import { FaEye, FaGauge } from "react-icons/fa6"
import { X } from "lucide-react"
import colors from 'tailwindcss/colors'
import { Skeleton } from "../ui/skeleton"

interface miniCardProps {
	typeWeather: "Umidade" | "Velocidade do vento" | "Pressão" | "Visibilidade"
	value: string | number
}

export function MiniCards({ typeWeather, value}: miniCardProps) {
	function iconTheme() {
		switch (typeWeather) {
			case "Umidade":
				return { icon: <IoWater color={colors.sky[500]} size={20} />, unit: "%" };
			case "Velocidade do vento":
				return { icon: <LuWind color={colors.slate[400]} size={20} />, unit: "km/h" };
			case "Pressão":
				return { icon: <FaGauge color={colors.violet[400]} size={20} />, unit: "hPa" };
			case "Visibilidade":
				return { icon: <FaEye color={colors.green[300]} size={20} />, unit: "m" };
			default:
				return { icon: <X />, unit: "" };
		}
	}
	
	return (
		<Card className="col-span-1 w-full">
			<CardContent className="flex justify-between items-center">
				<div className="leading-[1.3] flex flex-col gap-1.25 items-start">
					<span className="text-sm text-muted-foreground">{typeWeather}</span>
					<span className="text-xl font-semibold text-foreground flex items-center justify-center gap-1">{value === '' || value === 0 ? <Skeleton className="size-4 "/>  : value}{iconTheme().unit}</span>
				</div>
				<div>{iconTheme().icon}</div>
			</CardContent>
		</Card>
	)
}
