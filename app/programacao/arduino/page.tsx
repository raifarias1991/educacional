import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Code, BookOpen, ChevronRight } from "lucide-react"
import Link from "next/link"
import LicaoCard from "@/components/LicaoCard"

export default function ArduinoPage() {
  const licoes = [
    {
      id: "introducao",
      titulo: "Introdução ao Arduino",
      descricao: "Conheça a plataforma Arduino e seus componentes básicos",
      nivel: "Iniciante",
      duracao: "30 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "primeiros-passos",
      titulo: "Primeiros Passos",
      descricao: "Instalação da IDE e seu primeiro sketch",
      nivel: "Iniciante",
      duracao: "45 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "leds",
      titulo: "Controlando LEDs",
      descricao: "Aprenda a controlar LEDs com saídas digitais",
      nivel: "Iniciante",
      duracao: "60 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "botoes",
      titulo: "Leitura de Botões",
      descricao: "Utilizando entradas digitais para ler o estado de botões",
      nivel: "Iniciante",
      duracao: "60 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "analogicos",
      titulo: "Sensores Analógicos",
      descricao: "Leitura de sensores analógicos como potenciômetros e LDRs",
      nivel: "Intermediário",
      duracao: "75 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "pwm",
      titulo: "PWM e Controle de Intensidade",
      descricao: "Controle de intensidade de LEDs e velocidade de motores",
      nivel: "Intermediário",
      duracao: "90 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "servo-motores",
      titulo: "Servo Motores",
      descricao: "Controlando servo motores com precisão",
      nivel: "Intermediário",
      duracao: "75 minutos",
      imagem: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "ultrassonico",
      titulo: "Sensor Ultrassônico",
      descricao: "Medindo distâncias com o sensor HC-SR04",
      nivel: "Intermediário",
      duracao: "90 minutos",
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
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Arduino</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-6">Programação com Arduino</h1>

        <div className="bg-primary/10 rounded-lg p-6 mb-8 border border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Aprenda a programar com Arduino</h2>
              <p className="text-muted-foreground mb-4">
                Neste módulo, você aprenderá os fundamentos da programação Arduino, desde os conceitos básicos até
                aplicações práticas. Cada lição foi projetada para construir seu conhecimento passo a passo, com
                exemplos práticos e exercícios interativos.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>8 lições • Progressão do iniciante ao intermediário</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-muted rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=200&width=300" alt="Arduino Uno" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <Tabs defaultValue="todas" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="todas">Todas as Lições</TabsTrigger>
            <TabsTrigger value="iniciante">Iniciante</TabsTrigger>
            <TabsTrigger value="intermediario">Intermediário</TabsTrigger>
            <TabsTrigger value="avancado">Avançado</TabsTrigger>
          </TabsList>

          <TabsContent value="todas" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {licoes.map((licao) => (
                <LicaoCard
                  key={licao.id}
                  titulo={licao.titulo}
                  descricao={licao.descricao}
                  nivel={licao.nivel}
                  duracao={licao.duracao}
                  imagem={licao.imagem}
                  link={`/programacao/arduino/${licao.id}`}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="iniciante" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {licoes
                .filter((licao) => licao.nivel === "Iniciante")
                .map((licao) => (
                  <LicaoCard
                    key={licao.id}
                    titulo={licao.titulo}
                    descricao={licao.descricao}
                    nivel={licao.nivel}
                    duracao={licao.duracao}
                    imagem={licao.imagem}
                    link={`/programacao/arduino/${licao.id}`}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="intermediario" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {licoes
                .filter((licao) => licao.nivel === "Intermediário")
                .map((licao) => (
                  <LicaoCard
                    key={licao.id}
                    titulo={licao.titulo}
                    descricao={licao.descricao}
                    nivel={licao.nivel}
                    duracao={licao.duracao}
                    imagem={licao.imagem}
                    link={`/programacao/arduino/${licao.id}`}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="avancado" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {licoes
                .filter((licao) => licao.nivel === "Avançado")
                .map((licao) => (
                  <LicaoCard
                    key={licao.id}
                    titulo={licao.titulo}
                    descricao={licao.descricao}
                    nivel={licao.nivel}
                    duracao={licao.duracao}
                    imagem={licao.imagem}
                    link={`/programacao/arduino/${licao.id}`}
                  />
                ))}
            </div>
            {licoes.filter((licao) => licao.nivel === "Avançado").length === 0 && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <h3 className="text-xl font-semibold mb-2">Lições Avançadas em Breve!</h3>
                    <p className="text-muted-foreground mb-4">
                      Estamos preparando lições avançadas para você. Fique atento às atualizações!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Recursos Adicionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Referência da Linguagem Arduino</h3>
                <p className="text-muted-foreground mb-4">
                  Consulte a documentação oficial da linguagem Arduino, incluindo todas as funções nativas, constantes e
                  exemplos de uso.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.arduino.cc/reference/pt/" target="_blank" rel="noopener noreferrer">
                    Acessar Documentação <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Fórum da Comunidade</h3>
                <p className="text-muted-foreground mb-4">
                  Participe do fórum da comunidade Arduino para tirar dúvidas, compartilhar projetos e aprender com
                  outros entusiastas.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://forum.arduino.cc/" target="_blank" rel="noopener noreferrer">
                    Visitar Fórum <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
