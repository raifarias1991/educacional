import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"

// Lista de projetos disponíveis
const projetos = [
  {
    id: "robo-seguidor",
    titulo: "Robô Seguidor de Linha",
    descricao: "Construa um robô capaz de seguir linhas no chão usando sensores infravermelhos.",
    nivel: "Intermediário",
    tempo: "3-4 horas",
    categoria: "Robótica Móvel",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "braco-robotico",
    titulo: "Braço Robótico Controlado por Servo",
    descricao: "Monte um braço robótico com 3 graus de liberdade controlado por servomotores.",
    nivel: "Avançado",
    tempo: "5-6 horas",
    categoria: "Robótica Industrial",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "estacao-meteo",
    titulo: "Estação Meteorológica IoT",
    descricao: "Construa uma estação meteorológica conectada à internet que monitora temperatura, umidade e pressão.",
    nivel: "Intermediário",
    tempo: "4 horas",
    categoria: "IoT",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "robo-autonomo",
    titulo: "Robô Autônomo com Desvio de Obstáculos",
    descricao: "Desenvolva um robô que navega autonomamente desviando de obstáculos usando sensor ultrassônico.",
    nivel: "Intermediário",
    tempo: "4-5 horas",
    categoria: "Robótica Móvel",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "irrigacao-automatica",
    titulo: "Sistema de Irrigação Automática",
    descricao: "Crie um sistema que monitora a umidade do solo e irriga plantas automaticamente quando necessário.",
    nivel: "Iniciante",
    tempo: "2-3 horas",
    categoria: "IoT",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "robo-controlado",
    titulo: "Robô Controlado por Bluetooth",
    descricao: "Monte um robô que pode ser controlado remotamente através de um aplicativo no smartphone.",
    nivel: "Intermediário",
    tempo: "3-4 horas",
    categoria: "Robótica Móvel",
    imagem: "/placeholder.svg?height=200&width=300",
  },
]

export default function ProjetosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Início
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/projetos">
                <Zap className="h-4 w-4 mr-2" />
                Projetos
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-4xl font-bold mb-6">Projetos de Robótica</h1>

      <div className="bg-primary/10 rounded-lg p-6 mb-8 border border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Aprenda na Prática</h2>
        <p className="text-muted-foreground mb-4">
          Explore nossa coleção de projetos práticos de robótica, desde iniciantes até avançados. Cada projeto inclui
          instruções passo a passo, lista de materiais e código-fonte completo.
        </p>
        <p className="text-muted-foreground">
          Escolha um projeto que corresponda ao seu nível de habilidade e comece a construir hoje mesmo!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projetos.map((projeto) => (
          <Card key={projeto.id} className="overflow-hidden flex flex-col h-full hover:shadow-md transition-all">
            <div className="bg-muted h-40 overflow-hidden">
              <img
                src={projeto.imagem || "/placeholder.svg"}
                alt={projeto.titulo}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{projeto.titulo}</CardTitle>
              <CardDescription>
                {projeto.nivel} • {projeto.tempo}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{projeto.descricao}</p>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full" asChild>
                <Link href={`/projetos/${projeto.id}`}>
                  Ver Detalhes <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Não encontrou o que estava procurando? Temos mais projetos em desenvolvimento.
        </p>
        <Button variant="outline" asChild>
          <Link href="/contato">Sugerir um Projeto</Link>
        </Button>
      </div>
    </div>
  )
}
