import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Zap, ChevronRight, ListChecks, Cpu, Settings, BookOpen, Code } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Lista de projetos disponíveis com detalhes completos
const projetos = [
  {
    id: "robo-seguidor",
    titulo: "Robô Seguidor de Linha",
    descricao: "Construa um robô capaz de seguir linhas no chão usando sensores infravermelhos.",
    nivel: "Intermediário",
    tempo: "3-4 horas",
    categoria: "Robótica Móvel",
    objetivos: [
      "Entender o funcionamento de sensores infravermelhos",
      "Implementar algoritmos de controle PID",
      "Construir um chassi funcional para o robô",
      "Programar comportamentos autônomos",
    ],
    componentes: [
      "Arduino Uno",
      "Driver L298N",
      "2 Motores DC com rodas",
      "Módulo com 3-5 sensores IR",
      "Chassi de acrílico ou MDF",
      "Bateria ou fonte de alimentação",
    ],
    imagem: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "braco-robotico",
    titulo: "Braço Robótico Controlado por Servo",
    descricao: "Monte um braço robótico com 3 graus de liberdade controlado por servomotores.",
    nivel: "Avançado",
    tempo: "5-6 horas",
    categoria: "Robótica Industrial",
    objetivos: [
      "Compreender cinemática de braços robóticos",
      "Trabalhar com múltiplos servomotores",
      "Implementar controle de precisão",
      "Criar interface de controle manual",
    ],
    componentes: [
      "Arduino Uno",
      "4-5 Servomotores",
      "Estrutura de acrílico ou impressa em 3D",
      "Potenciômetros ou joystick",
      "Fonte de alimentação para servos",
    ],
    imagem: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "estacao-meteo",
    titulo: "Estação Meteorológica IoT",
    descricao: "Construa uma estação meteorológica conectada à internet que monitora temperatura, umidade e pressão.",
    nivel: "Intermediário",
    tempo: "4 horas",
    categoria: "IoT",
    objetivos: [
      "Integrar múltiplos sensores ambientais",
      "Implementar conectividade Wi-Fi",
      "Enviar dados para plataformas na nuvem",
      "Visualizar dados em tempo real",
    ],
    componentes: [
      "ESP8266 ou ESP32",
      "Sensor DHT22 (temperatura e umidade)",
      "Sensor BMP280 (pressão atmosférica)",
      "Display OLED",
      "Caixa de proteção à prova d'água",
    ],
    imagem: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "robo-autonomo",
    titulo: "Robô Autônomo com Desvio de Obstáculos",
    descricao: "Desenvolva um robô que navega autonomamente desviando de obstáculos usando sensor ultrassônico.",
    nivel: "Intermediário",
    tempo: "4-5 horas",
    categoria: "Robótica Móvel",
    objetivos: [
      "Entender o funcionamento de sensores ultrassônicos",
      "Implementar algoritmos de desvio de obstáculos",
      "Construir um chassi robusto para o robô",
      "Programar comportamentos autônomos inteligentes",
    ],
    componentes: [
      "Arduino Uno",
      "Driver L298N",
      "2 Motores DC com rodas",
      "Sensor ultrassônico HC-SR04",
      "Chassi de acrílico ou MDF",
      "Bateria ou fonte de alimentação",
    ],
    imagem: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "irrigacao-automatica",
    titulo: "Sistema de Irrigação Automática",
    descricao: "Crie um sistema que monitora a umidade do solo e irriga plantas automaticamente quando necessário.",
    nivel: "Iniciante",
    tempo: "2-3 horas",
    categoria: "IoT",
    objetivos: [
      "Trabalhar com sensores de umidade do solo",
      "Implementar controle de bomba d'água ou válvula solenóide",
      "Criar sistema de monitoramento em tempo real",
      "Configurar alertas e notificações",
    ],
    componentes: [
      "Arduino Uno ou ESP8266",
      "Sensor de umidade do solo",
      "Módulo relé",
      "Mini bomba d'água ou válvula solenóide",
      "Fonte de alimentação",
      "Mangueiras e conectores",
    ],
    imagem: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "robo-velocidade",
    titulo: "Robô com Controle de Velocidade",
    descricao: "Desenvolva um robô com controle preciso de velocidade usando técnicas avançadas de PWM.",
    nivel: "Intermediário",
    tempo: "3-4 horas",
    categoria: "Robótica Móvel",
    objetivos: [
      "Implementar controle PWM para motores DC",
      "Criar curvas de aceleração e desaceleração suaves",
      "Desenvolver sistema de controle PID para velocidade constante",
      "Construir interface para ajuste de parâmetros em tempo real",
    ],
    componentes: [
      "Arduino Uno ou Nano",
      "Driver L298N ou TB6612FNG",
      "2 Motores DC com encoders",
      "Chassi de acrílico ou MDF",
      "Bateria LiPo ou fonte de alimentação",
      "Módulo Bluetooth HC-05 (opcional)",
    ],
    imagem: "/placeholder.svg?height=400&width=600",
  },
]

export default function ProjetoDetalhes({ params }: { params: { id: string } }) {
  // Encontra o projeto com o ID correspondente
  const projeto = projetos.find((p) => p.id === params.id)

  // Se o projeto não for encontrado, retorna 404
  if (!projeto) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Início
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/projetos" className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Projetos
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{projeto.titulo}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-6 bg-muted">
            <img
              src={projeto.imagem || "/placeholder.svg?height=400&width=600"}
              alt={projeto.titulo}
              className="object-cover w-full h-full"
            />
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl">Descrição do Projeto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{projeto.descricao}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <ListChecks className="h-5 w-5 mr-2" />
                    Objetivos de Aprendizado
                  </h3>
                  <ul className="space-y-2">
                    {projeto.objetivos.map((objetivo, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-4 w-4 mt-1 mr-2 flex-shrink-0 text-primary" />
                        <span>{objetivo}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Cpu className="h-5 w-5 mr-2" />
                    Componentes Necessários
                  </h3>
                  <ul className="space-y-2">
                    {projeto.componentes.map((componente, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-4 w-4 mt-1 mr-2 flex-shrink-0 text-primary" />
                        <span>{componente}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Passo a Passo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Montagem Mecânica
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Siga estas instruções para montar a estrutura física do projeto:
                  </p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Prepare o chassi e fixe os motores nas posições indicadas</li>
                    <li>Instale as rodas e verifique o alinhamento</li>
                    <li>Monte o suporte para os sensores na frente do robô</li>
                    <li>Fixar a placa Arduino e o driver de motores</li>
                    <li>Organize os fios usando braçadeiras ou termorretrátil</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Cpu className="h-5 w-5 mr-2" />
                    Conexões Elétricas
                  </h3>
                  <p className="text-muted-foreground mb-4">Realize as conexões conforme o diagrama esquemático:</p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Conecte os motores ao driver L298N</li>
                    <li>Ligue os sensores às portas analógicas do Arduino</li>
                    <li>Alimente o sistema com a bateria</li>
                    <li>Verifique todas as conexões antes de energizar</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    Programação
                  </h3>
                  <p className="text-muted-foreground mb-4">Implemente o código seguindo estas etapas:</p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Configure as portas no setup()</li>
                    <li>Implemente a leitura dos sensores</li>
                    <li>Crie a lógica de controle dos motores</li>
                    <li>Adicione calibração inicial dos sensores</li>
                    <li>Teste e ajuste os parâmetros PID</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes do Projeto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Nível de Dificuldade</h4>
                <p className="font-medium">{projeto.nivel}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Tempo Estimado</h4>
                <p className="font-medium">{projeto.tempo}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Categoria</h4>
                <p className="font-medium">{projeto.categoria}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Habilidades Envolvidas</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline">Eletrônica</Badge>
                  <Badge variant="outline">Programação</Badge>
                  <Badge variant="outline">Mecânica</Badge>
                  {projeto.categoria === "IoT" && <Badge variant="outline">Conectividade</Badge>}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recursos Adicionais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="#">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Documentação Completa
                </Link>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link href="#">
                  <Code className="h-4 w-4 mr-2" />
                  Código Fonte
                </Link>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link href="#">
                  <Settings className="h-4 w-4 mr-2" />
                  Diagrama Esquemático
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Projetos Relacionados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projetos
                .filter((p) => p.id !== projeto.id && p.categoria === projeto.categoria)
                .slice(0, 2)
                .map((projetoRel) => (
                  <Link
                    key={projetoRel.id}
                    href={`/projetos/${projetoRel.id}`}
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <h4 className="font-medium">{projetoRel.titulo}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{projetoRel.descricao}</p>
                  </Link>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
