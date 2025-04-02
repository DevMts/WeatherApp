import { WiCloudyWindy } from "react-icons/wi"
import { Card, CardContent } from "../ui/card"

export function Temp() {
	return (
		<Card className="md:col-span-4">
			<CardContent className="flex md:flex-row flex-col-reverse justify-between px-6 items-center">
				<div className="flex flex-col items-center md:items-start font-poppins leading-[1.3]">
					<strong className="text-2xl  font-semibold text-foreground">24°C</strong>
					<span className="text-muted-foreground text-xs font-medium mt-2.5">
						San Francisco, CA
					</span>
					<span className="text-xs font-medium text-secondary-foreground">
						Parcialmente Nublado
					</span>
				</div>
        <div>
          <WiCloudyWindy className="size-20" />
        </div>
			</CardContent>
		</Card>
	)
}
