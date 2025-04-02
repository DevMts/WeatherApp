import { Form } from "./form"
import { Future } from "./future"
import { MiniCards } from "./minicards"
import { Temp } from "./temp"
import { Days } from "./days"

export function Main() {
	return (
		<main className="px-8 md:px-44 w-full mx-auto mb-8  ">
			<Form />
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<Temp />
				<MiniCards typeWeather="Umidade" />
				<MiniCards typeWeather="Velocidade do vento" />
				<MiniCards typeWeather="Pressão" />
				<MiniCards typeWeather="Visibilidade" />
				<Future />
				<Days />
			</div>
		</main>
	)
}
