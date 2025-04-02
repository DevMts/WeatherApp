import { z } from "zod"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

const citySchema = z.object({
	city: z.string().min(3).max(50),
})

type City = z.infer<typeof citySchema>

export function Form() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<City>({
		resolver: zodResolver(citySchema),
		defaultValues: { city: "São Paulo" },
	})

  async function handleSubmitas(data: City) {
    const toastId = toast.loading('Carregando...');
  
    try {
      const response = await fetch(
        `https://secure.geonames.org/searchJSON?q=${data.city}&maxRows=1&username=MateusTms`
      );
      
      if (!response.ok) {
        throw new Error('Erro ao buscar cidade');
      }
  
      const date = await response.json();
      console.log(date);
  
      toast.success(`${date.geonames[0].name} foi encontrado`, { id: toastId });
      // return date[0]
    } catch  {
      toast.error('Erro ao buscar cidade, verifique seu nome de usuário', { id: toastId });
    }
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
