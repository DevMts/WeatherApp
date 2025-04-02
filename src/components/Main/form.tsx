import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function Form() {
	return (
		<form action="">
			<div className="py-6 flex gap-4">
				<Input type="text" className="" list="citys" placeholder="Procure sua Cidade" />
				<Button type="submit" variant="secondary">
					Procurar
				</Button>
			</div>
		</form>
	)
}
