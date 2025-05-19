import type React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ChevronRight } from "lucide-react"
import Link from "next/link"

interface ComponenteCardProps {
  titulo: string
  descricao: string
  nivel: string
  duracao: string
  imagem: string
  link: string
}

const ComponenteCard: React.FC<ComponenteCardProps> = ({ titulo, descricao, nivel, duracao, imagem, link }) => {
  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case "Iniciante":
        return "bg-green-500"
      case "Intermediário":
        return "bg-yellow-500"
      case "Avançado":
        return "bg-red-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <div className="bg-muted h-40 overflow-hidden">
        <img src={imagem || "/placeholder.svg"} alt={titulo} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{titulo}</CardTitle>
          <Badge className={getNivelColor(nivel)}>{nivel}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-muted-foreground mb-4">{descricao}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-2" />
          <span>{duracao}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full" asChild>
          <Link href={link}>
            Iniciar Lição <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ComponenteCard
