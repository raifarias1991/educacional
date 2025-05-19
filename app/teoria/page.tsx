import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home, BookOpen } from "lucide-react"
import Link from "next/link"
import GlossarioItem from "@/components/GlossarioItem"

export default function TeoriaPage() {
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
                <Link href="/teoria">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Teoria
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-6">Fundamentos Teóricos</h1>

        <Tabs defaultValue="conceitos" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="conceitos">Conceitos Básicos</TabsTrigger>
            <TabsTrigger value="componentes">Componentes</TabsTrigger>
            <TabsTrigger value="glossario">Glossário</TabsTrigger>
          </TabsList>

          <TabsContent value="conceitos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>O que é Robótica?</CardTitle>
                  <CardDescription>Definição e conceitos fundamentais</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A robótica é um campo interdisciplinar que integra engenharia mecânica, elétrica, eletrônica e
                    ciência da computação para projetar, construir e programar máquinas automatizadas capazes de
                    realizar tarefas específicas.
                  </p>
                  <p>
                    No contexto educacional, a robótica permite aplicar conceitos teóricos de física, matemática e
                    programação em projetos práticos, estimulando o pensamento crítico e a resolução de problemas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tipos de Robôs</CardTitle>
                  <CardDescription>Classificações e aplicações</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Robôs Móveis:</strong> Capazes de se locomover (como o que construiremos neste curso)
                    </li>
                    <li>
                      <strong>Robôs Industriais:</strong> Utilizados em linhas de produção para tarefas repetitivas
                    </li>
                    <li>
                      <strong>Robôs Humanoides:</strong> Projetados para imitar a forma e os movimentos humanos
                    </li>
                    <li>
                      <strong>Robôs Autônomos:</strong> Capazes de tomar decisões sem intervenção humana
                    </li>
                    <li>
                      <strong>Robôs Colaborativos:</strong> Projetados para trabalhar em conjunto com humanos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Princípios de Eletrônica</CardTitle>
                  <CardDescription>Fundamentos para entender circuitos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Para construir robôs, é essencial compreender alguns conceitos básicos de eletrônica:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Tensão (V):</strong> A "pressão" que faz a eletricidade fluir
                    </li>
                    <li>
                      <strong>Corrente (A):</strong> O fluxo de elétrons em um circuito
                    </li>
                    <li>
                      <strong>Resistência (Ω):</strong> A oposição ao fluxo de corrente
                    </li>
                    <li>
                      <strong>Lei de Ohm:</strong> V = I × R (Tensão = Corrente × Resistência)
                    </li>
                    <li>
                      <strong>Circuitos em série e paralelo:</strong> Diferentes formas de conectar componentes
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Princípios de Programação</CardTitle>
                  <CardDescription>Lógica para controlar robôs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A programação é o que dá "vida" ao robô, permitindo que ele execute tarefas específicas:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Algoritmos:</strong> Sequências de instruções para resolver problemas
                    </li>
                    <li>
                      <strong>Variáveis:</strong> Armazenam dados que podem mudar durante a execução
                    </li>
                    <li>
                      <strong>Estruturas de controle:</strong> if/else, loops, funções
                    </li>
                    <li>
                      <strong>Lógica booleana:</strong> Operações com verdadeiro/falso
                    </li>
                    <li>
                      <strong>Entrada/Saída:</strong> Leitura de sensores e controle de atuadores
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="componentes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Arduino Uno</CardTitle>
                  <CardDescription>O cérebro do robô</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    O Arduino Uno é uma placa microcontroladora baseada no ATmega328P. Possui 14 pinos digitais de
                    entrada/saída, 6 entradas analógicas, um cristal de 16MHz, conexão USB, conector de alimentação e um
                    botão de reset.
                  </p>
                  <p>
                    É ideal para projetos de robótica educacional por sua facilidade de uso, baixo custo e ampla
                    comunidade de suporte.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Driver L298N</CardTitle>
                  <CardDescription>Controlador de motores</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    O L298N é um driver de motor duplo que permite controlar a velocidade e direção de dois motores DC
                    simultaneamente. Suporta tensões de 5V a 35V e correntes de até 2A por canal.
                  </p>
                  <p>
                    Utiliza uma configuração chamada "ponte H" que permite inverter a polaridade aplicada aos motores,
                    possibilitando o movimento em ambas as direções.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sensor Ultrassônico HC-SR04</CardTitle>
                  <CardDescription>Os "olhos" do robô</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    O HC-SR04 é um sensor que utiliza ultrassom para medir distâncias. Emite pulsos sonoros e mede o
                    tempo que leva para o eco retornar após atingir um objeto.
                  </p>
                  <p>
                    Possui alcance de 2cm a 400cm com precisão de até 3mm, sendo ideal para detecção de obstáculos em
                    projetos de robótica.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Módulo ESP8266</CardTitle>
                  <CardDescription>Conectividade Wi-Fi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    O ESP8266 é um microcontrolador com Wi-Fi integrado, permitindo que projetos Arduino se conectem à
                    internet. Pode ser programado diretamente ou usado como um módulo de comunicação.
                  </p>
                  <p>
                    Com ele, é possível controlar o robô remotamente via Wi-Fi ou enviar dados coletados para serviços
                    na nuvem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="glossario" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Glossário de Termos Técnicos</CardTitle>
                <CardDescription>Referência rápida para conceitos importantes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <GlossarioItem
                    termo="Atuador"
                    definicao="Componente que converte energia (geralmente elétrica) em movimento ou ação física. Exemplos: motores, servos, solenoides."
                  />

                  <GlossarioItem
                    termo="PWM (Pulse Width Modulation)"
                    definicao="Técnica que varia a largura de pulsos em um sinal digital para simular tensões analógicas. Usada para controlar a velocidade dos motores."
                  />

                  <GlossarioItem
                    termo="Sensor"
                    definicao="Dispositivo que detecta mudanças no ambiente e converte essas informações em sinais elétricos que podem ser interpretados pelo microcontrolador."
                  />

                  <GlossarioItem
                    termo="Microcontrolador"
                    definicao="Pequeno computador em um único circuito integrado, contendo processador, memória e periféricos de entrada/saída programáveis."
                  />

                  <GlossarioItem
                    termo="Ponte H"
                    definicao="Circuito eletrônico que permite aplicar tensão em ambas as direções através de uma carga. Essencial para controlar motores DC em ambos os sentidos."
                  />

                  <GlossarioItem
                    termo="Sketch"
                    definicao="Nome dado aos programas escritos para Arduino. Contém pelo menos duas funções: setup() e loop()."
                  />

                  <GlossarioItem
                    termo="GPIO (General Purpose Input/Output)"
                    definicao="Pinos de entrada/saída de propósito geral em um microcontrolador, que podem ser configurados via software para funcionar como entrada ou saída."
                  />

                  <GlossarioItem
                    termo="Ultrassom"
                    definicao="Ondas sonoras com frequência acima do limite audível pelo ouvido humano (>20kHz). Utilizadas em sensores para medir distâncias."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
