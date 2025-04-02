import { FaCloud } from "react-icons/fa6"
import { Card, CardContent, CardTitle } from "../ui/card"

export function Future() {
	return (
		<Card className="md:col-span-4">
			<CardContent className="">
				<CardTitle>Previsão para as próximas horas</CardTitle>
				<div className="flex flex-wrap items-center gap-6 mt-2.5">
					<div className="flex flex-col items-center gap-1.25 leading-[1.3] ">
						<span className="font-poppins text-xs text-muted-foreground">Agora</span>
            <FaCloud className="size-6 text-sky-400"/>
						<span className="font-poppins text-xs text-muted-foreground">24°C</span>
					</div>
					<div className="flex flex-col items-center gap-1.25 leading-[1.3] ">
						<span className="font-poppins text-xs text-muted-foreground">Agora</span>
            <FaCloud className="size-6 text-sky-400"/>
						<span className="font-poppins text-xs text-muted-foreground">24°C</span>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
