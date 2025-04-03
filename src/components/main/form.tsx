import type { GetWeatherForecastBody } from "@/api/get-weather-forecast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const citySchema = z.object({
	city: z.string().min(3).max(50),
})

type City = z.infer<typeof citySchema>

interface dateResponse {
	geonames: [
		{
			name: string
			adminCodes1: {
				ISO3166_2: string
			}
			lat: string
			lng: string
		},
	]
}
interface FormProps {
	setCoods: (coords: GetWeatherForecastBody) => void
}
export function Form({ setCoods }: FormProps) {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<City>({
		resolver: zodResolver(citySchema),
		defaultValues: { city: "São Paulo" },
	})

	async function handleSubmitas(data: City) {
		const toastId = toast.loading("Carregando...")

		try {
			const response = await fetch(
				`https://secure.geonames.org/searchJSON?q=${data.city}&maxRows=1&username=MateusTms`,
			)

			if (!response.ok) {
				throw new Error("Erro ao buscar cidade")
			}

			const date: dateResponse = await response.json()
			console.log(date.geonames[0])
			getCoords({ lat: date.geonames[0].lat, lon: date.geonames[0].lng })

			toast.success(`${date.geonames[0].name} foi encontrado`, { id: toastId })
			return date.geonames[0]
		} catch {
			toast.error("Erro ao buscar cidade, verifique seu nome de usuário", { id: toastId })
		}
	}

	function getCoords({ lon, lat }: GetWeatherForecastBody) {
		setCoods({ lat, lon })
	}

	return (
		<form action="" onSubmit={handleSubmit(handleSubmitas)}>
			<div className="py-6 flex gap-4">
				<Input
					type="text"
					className=""
					list="citys"
					placeholder="Procure sua Cidade"
					{...register("city")}
				/>
				<Button type="submit" variant="secondary" disabled={isSubmitting}>
					Procurar
				</Button>
			</div>
		</form>
	)
}
