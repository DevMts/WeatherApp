import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Form() {
  return (
    <form action="">
      <div className="px-12 py-6 flex gap-4">
        <Input type="text" placeholder="Procure sua Cidade" />
        <Button variant='secondary'>Procurar</Button>
      </div>
    </form>
  )
} 