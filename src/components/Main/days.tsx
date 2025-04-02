import { FaCloud } from "react-icons/fa6"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"

export function Days() {
	return (
		<Card className="md:col-span-4">
			<CardHeader>
				<CardTitle>Próximos dias</CardTitle>
			</CardHeader>
			<CardContent className="max-w-full overflow-x-hidden">
				<div className="flex gap-2 flex-col ">
					{["Segunda", "Terça", "Quarta"].map((dia) => (
						<div key={dia} className="w-full flex items-center justify-between gap-4 ">
							<span className="min-w-[70px]">{dia}</span>
							<FaCloud className="size-4.5 text-sky-400" />
							<div className="flex items-center gap-2">
								<span>19°C</span>
								<Progress value={(19 + 24) / 2} className="w-18 h-1 hidden sm:block" />
                <span className="sm:hidden block"> - </span>
								<span>24°C</span>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
