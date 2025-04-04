import type { GetWeatherForecastBody } from "@/api/get-weather-forecast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useEffect } from "react"

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
	})

	useEffect(() => {
		let hasFetched = false 
	
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				if (hasFetched) return // Se já fez a requisição, não faz de novo
				hasFetched = true
				const toasts = toast.loading('carregando', {position: 'top-center'})
	
				const { latitude, longitude } = position.coords
	
				try {
					const response = await fetch(
						`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
					)
					const data = await response.json()
	
					const foundCity =
						data.address.city ||
						data.address.town ||
						data.address.village ||
						"Cidade não encontrada"
	
					const geoResponse = await fetch(
						`https://secure.geonames.org/searchJSON?q=${foundCity}&maxRows=1&username=MateusTms`,
					)
	
					if (!geoResponse.ok) throw new Error("Erro ao buscar cidade")
	
					const geoData: dateResponse = await geoResponse.json()
	
					getCoords({
						lat: geoData.geonames[0].lat,
						lon: geoData.geonames[0].lng,
					})
					toast.success(`${foundCity} foi encontrado`, { position: "top-center" , id: toasts})
				} catch {
					toast.error("Não foi possível encontrar sua localização", {
						position: "top-center",
					})
				}
			},
			() => {
				toast.error("Permissão de localização negada", { position: "top-center" })
			}
		)
	}, []) // O array de dependências vazio garante que o efeito só rode uma vez
	

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
			// console.log(date.geonames[0])

			getCoords({
				lat: date.geonames[0].lat,
				lon: date.geonames[0].lng,
			})

			toast.success(`${date.geonames[0].name} foi encontrado`, { id: toastId })
			return date.geonames[0]
		} catch {
			toast.error("Erro ao buscar cidade, verifique o nome da cidade", { id: toastId })
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
