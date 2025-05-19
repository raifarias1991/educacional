import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, BookOpen, Code, Cpu, Zap, Gauge, Radar, Bot } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Educação em Robótica",
  description: "Plataforma completa para aprender robótica de forma prática e interativa",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Cabeçalho */}
      <header className="bg-gradient-to-r from-primary/10 to-blue-600/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Bot className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-primary">Educação</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plataforma completa para aprender robótica de forma prática e interativa
          </p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-12">
        {/* Seção de Categorias */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bem-vindo ao mundo da robótica!</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Da teoria à prática, nosso programa educativo guia você desde os conceitos básicos até projetos avançados
              de robótica autônoma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card de Teoria */}
            <Card className="bg-secondary/10 border-secondary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-secondary" />
                  <div>
                    <CardTitle>Teoria</CardTitle>
                    <CardDescription>Fundamentos essenciais</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-secondary" />
                    História da robótica
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-secondary" />
                    Princípios mecânicos
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-secondary" />
                    Eletrônica básica
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/teoria/introducao" passHref className="w-full">
                  <Button variant="secondary" className="w-full">
                    Explorar <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Card de Montagem */}
            <Card className="bg-primary/10 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Cpu className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Montagem</CardTitle>
                    <CardDescription>Construção prática</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Kit Bolt Starter
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Robô seguidor de linha
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Braço robótico simples
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/montagem" passHref className="w-full">
                  <Button variant="default" className="w-full">
                    Explorar <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Card de Programação */}
            <Card className="bg-destructive/10 border-destructive/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Code className="h-8 w-8 text-destructive" />
                  <div>
                    <CardTitle>Programação</CardTitle>
                    <CardDescription>Lógica e algoritmos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-destructive" />
                    Arduino Básico
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-destructive" />
                    Controle de motores
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-destructive" />
                    Sensores e atuadores
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/programacao" passHref className="w-full">
                  <Button variant="destructive" className="w-full">
                    Explorar <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Card de Projetos */}
            <Card className="bg-emerald-500/10 border-emerald-500/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-emerald-500" />
                  <div>
                    <CardTitle>Projetos</CardTitle>
                    <CardDescription>Aplicações reais</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-emerald-500" />
                    Robô autônomo
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-emerald-500" />
                    Estação meteorológica
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-emerald-500" />
                    Sistema de irrigação
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/projetos" passHref className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-500/10"
                  >
                    Explorar <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Seção de Atualizações */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Últimas Atualizações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card de Sensor Ultrassônico */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Radar className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Sensor Ultrassônico</CardTitle>
                    <CardDescription>Atualizado em 15/06/2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Novo tutorial completo sobre o sensor HC-SR04, incluindo montagem física, princípio de funcionamento e
                  programação avançada para navegação autônoma.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Arduino</Badge>
                  <Badge variant="secondary">Nível: Intermediário</Badge>
                  <Badge variant="secondary">45 min</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/programacao/sensor-ultrassonico" passHref>
                  <Button variant="outline" className="w-full">
                    Acessar Tutorial Completo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Card de Controle de Velocidade - Versão Simplificada */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Gauge className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle>Controle de Velocidade</CardTitle>
                    <CardDescription>Novo em 10/06/2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Aprenda técnicas de controle de motores DC usando PWM com o driver L298N, incluindo aceleração suave e
                  configuração avançada para projetos robóticos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Motores</Badge>
                  <Badge variant="secondary">Nível: Básico</Badge>
                  <Badge variant="secondary">30 min</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/programacao/controle-motores" passHref>
                  <Button variant="outline" className="w-full">
                    Acessar Tutorial Completo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Card de Projeto Completo */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Projeto Completo</CardTitle>
                    <CardDescription>Novo em 05/06/2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Novo projeto passo a passo: construa um robô seguidor de linha com sensor infravermelho e calibração
                  automática, ideal para competições.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Projeto</Badge>
                  <Badge variant="secondary">Nível: Intermediário</Badge>
                  <Badge variant="secondary">2 horas</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/projetos/robo-seguidor" passHref>
                  <Button variant="outline" className="w-full">
                    Acessar Tutorial Completo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Chamada para Ação */}
        <section className="bg-secondary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes e entusiastas que estão aprendendo robótica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/teoria/introducao">Começar pelo Básico</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projetos">Ver Projetos</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-background border-t py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-bold">Robótica</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link href="/sobre" className="text-sm hover:underline">
                Sobre o Projeto
              </Link>
              <Link href="/recursos" className="text-sm hover:underline">
                Recursos Educativos
              </Link>
              <Link href="/comunidade" className="text-sm hover:underline">
                Comunidade
              </Link>
              <Link href="/contato" className="text-sm hover:underline">
                Contato
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Educação em Robótica. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
