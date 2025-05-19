import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home, Code, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ComponenteCard from "@/components/ComponenteCard"

export default function ProgramacaoPage() {
  const licoes = [
    {
      id: "introducao",
      titulo: "Introdução à Programação com Arduino",
      descricao: "Conceitos básicos da linguagem Arduino e estrutura de um sketch",
      nivel: "Iniciante",
      duracao: "90 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "controle-motores",
      titulo: "Controlando os Motores",
      descricao: "Aprenda a fazer seu robô se mover usando o driver L298N",
      nivel: "Iniciante",
      duracao: "45 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "sensor-ultrassonico",
      titulo: "Sensor Ultrassônico HC-SR04",
      descricao: "Detectando obstáculos e medindo distâncias",
      nivel: "Intermediário",
      duracao: "60 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "desvio-obstaculos",
      titulo: "Desvio de Obstáculos",
      descricao: "Programando o robô para navegar autonomamente",
      nivel: "Intermediário",
      duracao: "90 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "wifi-esp8266",
      titulo: "Conectividade Wi-Fi com ESP8266",
      descricao: "Controlando o robô remotamente via rede sem fio",
      nivel: "Avançado",
      duracao: "120 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
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
                <Link href="/programacao">
                  <Code className="h-4 w-4 mr-2" />
                  Programação
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-6">Programação com Arduino</h1>

        <div className="bg-primary/10 rounded-lg p-6 mb-8 border border-primary/20">
          <h2 className="text-2xl font-semibold mb-4">Sobre este módulo</h2>
          <p className="text-muted-foreground mb-4">
            Neste módulo, você aprenderá a programar o Arduino para controlar seu robô. Começaremos com conceitos
            básicos e avançaremos gradualmente até implementar funcionalidades complexas como navegação autônoma e
            controle via Wi-Fi.
          </p>
          <p className="text-muted-foreground">
            Cada lição inclui explicações teóricas, exemplos de código comentados e desafios práticos para reforçar o
            aprendizado.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Lições Disponíveis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {licoes.map((licao) => (
            <ComponenteCard
              key={licao.id}
              titulo={licao.titulo}
              descricao={licao.descricao}
              nivel={licao.nivel}
              duracao={licao.duracao}
              imagem={licao.imagem}
              link={`/programacao/${licao.id}`}
            />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6">Recursos Adicionais</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Referência da Linguagem Arduino</CardTitle>
              <CardDescription>Documentação oficial de funções e sintaxe</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Consulte a documentação completa da linguagem Arduino, incluindo todas as funções nativas, constantes e
                exemplos de uso.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.arduino.cc/reference/pt/" target="_blank" rel="noopener noreferrer">
                  Acessar Documentação <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Biblioteca de Exemplos</CardTitle>
              <CardDescription>Códigos prontos para usar em seu projeto</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Explore nossa biblioteca de exemplos de código para diversas funcionalidades, desde controle básico de
                motores até sistemas complexos de navegação.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/programacao/exemplos">
                  Ver Exemplos <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
