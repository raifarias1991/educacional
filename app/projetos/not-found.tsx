import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Projeto não encontrado</h2>
      <p className="text-muted-foreground mb-8">O projeto que você está procurando não existe ou foi removido.</p>
      <Button asChild>
        <Link href="/projetos">Ver todos os projetos</Link>
      </Button>
    </div>
  )
}
