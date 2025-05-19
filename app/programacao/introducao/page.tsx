import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CodeBlock } from "@/components/CodeBlock"
import { Home, Code, ChevronRight, Lightbulb, AlertTriangle, Download } from "lucide-react"
import Link from "next/link"

export default function IntroducaoArduinoPage() {
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
              <BreadcrumbLink>Introdução ao Arduino</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold">Introdução ao Arduino</h1>
            <p className="text-muted-foreground mt-2">Primeiros passos na programação e eletrônica com Arduino</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/programacao/arduino/leds">
                Próxima Lição
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-grow">
            <Progress value={0} className="h-2" />
          </div>
          <div className="text-sm text-muted-foreground whitespace-nowrap">0% concluído</div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 mb-8 border border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Objetivos de Aprendizado</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Compreender o que é Arduino e suas aplicações</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Configurar o ambiente de desenvolvimento Arduino IDE</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Entender a estrutura básica de um programa Arduino</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Criar seus primeiros projetos práticos com Arduino</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 bg-muted rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=200&width=300" alt="Arduino Uno" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <Tabs defaultValue="oquee" className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="oquee">O que é Arduino</TabsTrigger>
            <TabsTrigger value="instalacao">Instalação</TabsTrigger>
            <TabsTrigger value="eletronica">Eletrônica Básica</TabsTrigger>
            <TabsTrigger value="programacao">Programação</TabsTrigger>
            <TabsTrigger value="projetos">Projetos</TabsTrigger>
          </TabsList>

          <TabsContent value="oquee" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">O que é Arduino?</h3>
                <p className="mb-4">
                  Arduino é uma plataforma de prototipagem eletrônica de código aberto (open-source) baseada em hardware
                  e software flexíveis e fáceis de usar. Foi criada em 2005 na Itália com o objetivo de facilitar o
                  acesso à tecnologia para estudantes, hobbistas e qualquer pessoa interessada em criar objetos ou
                  ambientes interativos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Hardware</h4>
                    <p>
                      O hardware Arduino consiste em uma placa de circuito impresso com um microcontrolador (geralmente
                      da família AVR da Atmel), além de componentes complementares que facilitam a programação e
                      incorporação a outros circuitos.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Software</h4>
                    <p>
                      O software Arduino inclui um ambiente de desenvolvimento integrado (IDE) que permite escrever,
                      compilar e enviar programas para a placa Arduino usando uma linguagem baseada em C/C++, mas
                      simplificada para facilitar o aprendizado.
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Por que usar Arduino?</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Facilidade de uso:</strong> Projetado para iniciantes, sem necessidade de conhecimentos
                    avançados em eletrônica ou programação.
                  </li>
                  <li>
                    <strong>Multiplataforma:</strong> A IDE funciona em Windows, macOS e Linux.
                  </li>
                  <li>
                    <strong>Código aberto:</strong> Tanto o hardware quanto o software são open-source, permitindo
                    adaptações e melhorias pela comunidade.
                  </li>
                  <li>
                    <strong>Comunidade ativa:</strong> Ampla comunidade global que compartilha projetos, bibliotecas e
                    soluções.
                  </li>
                  <li>
                    <strong>Baixo custo:</strong> Placas e componentes acessíveis para estudantes e hobbistas.
                  </li>
                  <li>
                    <strong>Versatilidade:</strong> Pode ser usado em inúmeras aplicações, desde projetos simples até
                    sistemas complexos.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Tipos de placas Arduino</h4>
                <p className="mb-4">
                  Existem diversos modelos de placas Arduino, cada uma com características específicas para diferentes
                  necessidades:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-2 text-left">Modelo</th>
                        <th className="border border-border p-2 text-left">Microcontrolador</th>
                        <th className="border border-border p-2 text-left">Pinos Digitais</th>
                        <th className="border border-border p-2 text-left">Pinos Analógicos</th>
                        <th className="border border-border p-2 text-left">Características</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2">Arduino Uno</td>
                        <td className="border border-border p-2">ATmega328P</td>
                        <td className="border border-border p-2">14 (6 PWM)</td>
                        <td className="border border-border p-2">6</td>
                        <td className="border border-border p-2">Modelo mais popular e recomendado para iniciantes</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">Arduino Nano</td>
                        <td className="border border-border p-2">ATmega328P</td>
                        <td className="border border-border p-2">14 (6 PWM)</td>
                        <td className="border border-border p-2">8</td>
                        <td className="border border-border p-2">
                          Versão compacta do Uno, ideal para projetos pequenos
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">Arduino Mega</td>
                        <td className="border border-border p-2">ATmega2560</td>
                        <td className="border border-border p-2">54 (15 PWM)</td>
                        <td className="border border-border p-2">16</td>
                        <td className="border border-border p-2">Mais pinos e memória, para projetos complexos</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">Arduino Leonardo</td>
                        <td className="border border-border p-2">ATmega32U4</td>
                        <td className="border border-border p-2">20 (7 PWM)</td>
                        <td className="border border-border p-2">12</td>
                        <td className="border border-border p-2">
                          Capacidade de emular dispositivos USB (teclado, mouse)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mt-6">
                  <h4 className="text-lg font-semibold mb-2">Neste curso</h4>
                  <p>
                    Utilizaremos principalmente o Arduino Uno, que é o modelo mais comum e recomendado para iniciantes.
                    No entanto, os conceitos aprendidos podem ser aplicados a praticamente qualquer placa Arduino com
                    pequenas adaptações.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Componentes do Arduino Uno</h3>
                <p className="mb-4">
                  Antes de começarmos a programar, é importante conhecer os principais componentes da placa Arduino Uno:
                </p>

                <div className="bg-muted rounded-lg p-4 mb-6">
                  <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Componentes do Arduino Uno"
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>

                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <strong>Microcontrolador:</strong> O "cérebro" da placa, um chip ATmega328P que executa os
                    programas.
                  </li>
                  <li>
                    <strong>Porta USB:</strong> Usada para conectar o Arduino ao computador para programação e
                    comunicação serial.
                  </li>
                  <li>
                    <strong>Conector de alimentação:</strong> Para conectar uma fonte externa de energia (7-12V).
                  </li>
                  <li>
                    <strong>Pinos de alimentação:</strong>
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        <strong>5V e 3.3V:</strong> Fornecem tensão regulada para alimentar componentes.
                      </li>
                      <li>
                        <strong>GND:</strong> Pinos de terra (ground).
                      </li>
                      <li>
                        <strong>Vin:</strong> Entrada de tensão quando se usa uma fonte externa.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Pinos digitais (0-13):</strong> Podem ser configurados como entrada ou saída, operando em
                    5V.
                    <ul className="list-disc pl-5 mt-1">
                      <li>Os pinos marcados com ~ suportam PWM (modulação por largura de pulso).</li>
                      <li>Pinos 0 (RX) e 1 (TX) são usados para comunicação serial.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Pinos analógicos (A0-A5):</strong> Usados principalmente como entradas para ler sensores
                    analógicos.
                  </li>
                  <li>
                    <strong>Botão de reset:</strong> Reinicia o programa em execução no Arduino.
                  </li>
                  <li>
                    <strong>LEDs indicadores:</strong>
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        <strong>Power (PWR):</strong> Indica que a placa está energizada.
                      </li>
                      <li>
                        <strong>L:</strong> Conectado ao pino 13, útil para testes.
                      </li>
                      <li>
                        <strong>TX/RX:</strong> Piscam durante a comunicação serial.
                      </li>
                    </ul>
                  </li>
                </ol>

                <div className="bg-green-900/20 border-l-4 border-green-600 p-4 rounded-r-lg mt-6">
                  <h4 className="text-lg font-semibold mb-2">Dica</h4>
                  <p>
                    Familiarize-se com o layout da placa Arduino. Isso facilitará muito quando você estiver montando
                    circuitos e conectando componentes. Uma referência visual da placa é sempre útil durante seus
                    primeiros projetos.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Aplicações do Arduino</h3>
                <p className="mb-4">
                  O Arduino pode ser usado em uma ampla variedade de projetos, desde simples experimentos educacionais
                  até produtos comerciais complexos. Algumas aplicações comuns incluem:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Robótica</h4>
                    <p>
                      Controle de motores, sensores e atuadores para criar robôs autônomos, braços robóticos, veículos
                      controlados remotamente e mais.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Automação Residencial</h4>
                    <p>
                      Sistemas de iluminação inteligente, controle de temperatura, segurança, irrigação automatizada e
                      outros dispositivos para casas inteligentes.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Instrumentação e Medição</h4>
                    <p>
                      Estações meteorológicas, monitoramento ambiental, sensores de qualidade do ar, medidores de
                      energia e outros dispositivos de coleta de dados.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Arte Interativa</h4>
                    <p>
                      Instalações artísticas que respondem ao ambiente ou interação humana, esculturas cinéticas,
                      displays LED e projetos de arte digital.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Wearables</h4>
                    <p>
                      Roupas e acessórios inteligentes, monitores de saúde vestíveis, tecidos interativos e dispositivos
                      de assistência.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Internet das Coisas (IoT)</h4>
                    <p>
                      Dispositivos conectados à internet que coletam e compartilham dados, sistemas de monitoramento
                      remoto e controle via web.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Limitações</h4>
                  <p className="mb-4">
                    Embora o Arduino seja extremamente versátil, é importante conhecer suas limitações:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Não é adequado para processamento intensivo de dados ou aplicações que exigem alta velocidade de
                      processamento
                    </li>
                    <li>Recursos limitados de memória (2KB de RAM no Arduino Uno)</li>
                    <li>Não possui sistema operacional</li>
                    <li>Capacidades gráficas limitadas sem hardware adicional</li>
                    <li>Consumo de energia pode ser um problema para aplicações que funcionam com bateria</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instalacao" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Instalando a Arduino IDE</h3>
                <p className="mb-4">
                  A Arduino IDE (Integrated Development Environment) é o software que usamos para escrever, compilar e
                  enviar programas para a placa Arduino. Vamos ver como instalá-la em diferentes sistemas operacionais.
                </p>

                <div className="flex items-center justify-center mb-6">
                  <Button variant="default" size="lg" className="gap-2">
                    <Download className="h-5 w-5" />
                    <a href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
                      Baixar Arduino IDE
                    </a>
                  </Button>
                </div>

                <Tabs defaultValue="windows">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="windows">Windows</TabsTrigger>
                    <TabsTrigger value="mac">macOS</TabsTrigger>
                    <TabsTrigger value="linux">Linux</TabsTrigger>
                  </TabsList>

                  <TabsContent value="windows" className="mt-4 space-y-4">
                    <h4 className="text-lg font-semibold">Instalação no Windows</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Acesse{" "}
                        <a
                          href="https://www.arduino.cc/en/software"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          arduino.cc/en/software
                        </a>{" "}
                        e baixe a versão para Windows.
                      </li>
                      <li>Você pode escolher entre o instalador (.exe) ou a versão ZIP (portátil).</li>
                      <li>
                        Se escolher o instalador:
                        <ul className="list-disc pl-5 mt-1">
                          <li>Execute o arquivo .exe baixado</li>
                          <li>Aceite o acordo de licença</li>
                          <li>Selecione os componentes a instalar (recomendado: manter todos)</li>
                          <li>Escolha o local de instalação</li>
                          <li>Aguarde a conclusão da instalação</li>
                        </ul>
                      </li>
                      <li>
                        Se escolher o arquivo ZIP:
                        <ul className="list-disc pl-5 mt-1">
                          <li>Extraia o conteúdo para uma pasta de sua escolha</li>
                          <li>Execute o arquivo arduino.exe dentro da pasta extraída</li>
                        </ul>
                      </li>
                      <li>
                        Na primeira execução, o Windows pode solicitar a instalação de drivers. Aceite a instalação.
                      </li>
                    </ol>
                  </TabsContent>

                  <TabsContent value="mac" className="mt-4 space-y-4">
                    <h4 className="text-lg font-semibold">Instalação no macOS</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Acesse{" "}
                        <a
                          href="https://www.arduino.cc/en/software"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          arduino.cc/en/software
                        </a>{" "}
                        e baixe a versão para macOS.
                      </li>
                      <li>Abra o arquivo .dmg baixado.</li>
                      <li>Arraste o ícone do Arduino para a pasta Aplicativos.</li>
                      <li>
                        Na primeira execução, clique com o botão direito no ícone do Arduino na pasta Aplicativos e
                        selecione "Abrir".
                      </li>
                      <li>Confirme que deseja abrir o aplicativo quando solicitado.</li>
                      <li>
                        Para usuários de macOS Catalina ou superior, pode ser necessário aprovar o aplicativo nas
                        configurações de segurança.
                      </li>
                    </ol>
                  </TabsContent>

                  <TabsContent value="linux" className="mt-4 space-y-4">
                    <h4 className="text-lg font-semibold">Instalação no Linux</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Você pode instalar via gerenciador de pacotes ou manualmente.</li>
                      <li>
                        Usando o gerenciador de pacotes (Ubuntu/Debian):
                        <div className="bg-black text-white p-3 rounded-md font-mono text-sm mt-2 mb-2">
                          sudo apt update
                          <br />
                          sudo apt install arduino
                        </div>
                      </li>
                      <li>
                        Instalação manual:
                        <ul className="list-disc pl-5 mt-1">
                          <li>Baixe o arquivo .tar.xz do site oficial</li>
                          <li>Extraia o arquivo para uma pasta de sua escolha</li>
                          <li>
                            Navegue até a pasta extraída e execute o script de instalação:
                            <div className="bg-black text-white p-3 rounded-md font-mono text-sm mt-2 mb-2">
                              cd arduino-1.x.x
                              <br />
                              ./install.sh
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Configurando permissões para a porta serial:
                        <div className="bg-black text-white p-3 rounded-md font-mono text-sm mt-2 mb-2">
                          sudo usermod -a -G dialout $USER
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Após este comando, reinicie o computador para que as alterações tenham efeito.
                        </p>
                      </li>
                    </ol>
                  </TabsContent>
                </Tabs>

                <Alert className="mt-6">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Importante</AlertTitle>
                  <AlertDescription>
                    Existem duas versões da Arduino IDE: a versão 1.x (clássica) e a versão 2.x (nova interface). Ambas
                    funcionam bem, mas neste curso usaremos principalmente exemplos baseados na versão 1.x, que é mais
                    estável e amplamente utilizada. No entanto, os códigos funcionarão em ambas as versões.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Conectando o Arduino ao Computador</h3>
                <p className="mb-4">
                  Após instalar a IDE, você precisará conectar sua placa Arduino ao computador e configurar a IDE para
                  reconhecê-la.
                </p>

                <ol className="list-decimal pl-5 space-y-4 mb-6">
                  <li>
                    <strong>Conecte o Arduino:</strong>
                    <p>
                      Use um cabo USB adequado para conectar o Arduino ao computador. Para o Arduino Uno, geralmente
                      usa-se um cabo USB tipo A para USB tipo B (semelhante ao cabo de impressora).
                    </p>
                  </li>
                  <li>
                    <strong>Verifique se o LED de energia acende:</strong>
                    <p>
                      Quando conectado, o LED de energia (PWR) na placa deve acender, indicando que está recebendo
                      energia.
                    </p>
                  </li>
                  <li>
                    <strong>Abra a Arduino IDE:</strong>
                    <p>Inicie o software Arduino IDE que você instalou anteriormente.</p>
                  </li>
                  <li>
                    <strong>Selecione o tipo de placa:</strong>
                    <p>
                      No menu, vá para <strong>Ferramentas → Placa</strong> e selecione o modelo da sua placa Arduino
                      (por exemplo, "Arduino Uno").
                    </p>
                  </li>
                  <li>
                    <strong>Selecione a porta:</strong>
                    <p>
                      No menu, vá para <strong>Ferramentas → Porta</strong> e selecione a porta COM onde o Arduino está
                      conectado.
                    </p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>No Windows, será algo como COM3, COM4, etc.</li>
                      <li>No macOS, será algo como /dev/cu.usbmodem1411</li>
                      <li>No Linux, será algo como /dev/ttyACM0 ou /dev/ttyUSB0</li>
                    </ul>
                  </li>
                </ol>

                <div className="bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded-r-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Problemas comuns de conexão</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Porta não aparece:</strong> Verifique se o cabo USB está bem conectado e se não está
                      danificado.
                    </li>
                    <li>
                      <strong>Drivers não instalados:</strong> Alguns sistemas podem precisar de drivers adicionais,
                      especialmente para placas não oficiais ou adaptadores USB-Serial.
                    </li>
                    <li>
                      <strong>Placa não reconhecida:</strong> Tente outro cabo USB ou outra porta USB do computador.
                    </li>
                    <li>
                      <strong>Erro de acesso à porta:</strong> Verifique se outro programa não está usando a porta
                      serial.
                    </li>
                  </ul>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Instalando drivers (se necessário)</h4>
                <p className="mb-4">
                  Placas Arduino originais geralmente não precisam de drivers adicionais em sistemas modernos, mas
                  clones ou placas com chips CH340 ou FTDI podem precisar:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Windows:</strong> Se a placa não for reconhecida, você pode precisar instalar drivers para o
                    chip USB-Serial.
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        Para chips CH340:{" "}
                        <a
                          href="https://sparks.gogo.co.nz/ch340.html"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Baixar driver CH340
                        </a>
                      </li>
                      <li>
                        Para chips FTDI:{" "}
                        <a
                          href="https://ftdichip.com/drivers/vcp-drivers/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Baixar driver FTDI
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>macOS:</strong> Sistemas mais recentes podem precisar de drivers para chips CH340.
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        Para chips CH340:{" "}
                        <a
                          href="https://sparks.gogo.co.nz/ch340.html"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Baixar driver CH340
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Linux:</strong> A maioria das distribuições Linux já inclui os drivers necessários, mas pode
                    ser necessário ajustar as permissões como mencionado anteriormente.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Testando a Instalação</h3>
                <p className="mb-4">
                  Vamos verificar se tudo está funcionando corretamente carregando um programa de exemplo simples no
                  Arduino.
                </p>

                <ol className="list-decimal pl-5 space-y-4 mb-6">
                  <li>
                    <strong>Abra um exemplo:</strong>
                    <p>
                      Na Arduino IDE, vá para <strong>Arquivo → Exemplos → 01.Basics → Blink</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Este é um programa simples que faz o LED embutido na placa piscar.
                    </p>
                  </li>
                  <li>
                    <strong>Verifique o código:</strong>
                    <p>
                      O código do exemplo Blink será aberto. Ele faz o LED conectado ao pino 13 (que também é o LED
                      embutido na placa) piscar em intervalos de 1 segundo.
                    </p>
                  </li>
                  <li>
                    <strong>Compile o código:</strong>
                    <p>
                      Clique no botão "Verificar" (✓) ou use o atalho Ctrl+R (Cmd+R no macOS) para compilar o código.
                    </p>
                    <p className="text-sm text-muted-foreground">Isso verifica se há erros de sintaxe no código.</p>
                  </li>
                  <li>
                    <strong>Faça o upload:</strong>
                    <p>
                      Clique no botão "Carregar" (→) ou use o atalho Ctrl+U (Cmd+U no macOS) para enviar o programa para
                      o Arduino.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Durante o upload, os LEDs TX e RX na placa piscarão rapidamente.
                    </p>
                  </li>
                  <li>
                    <strong>Observe o resultado:</strong>
                    <p>
                      Após o upload bem-sucedido, o LED na placa Arduino (marcado como "L") deve começar a piscar: 1
                      segundo aceso, 1 segundo apagado.
                    </p>
                  </li>
                </ol>

                <div className="bg-green-900/20 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Sucesso!</h4>
                  <p>
                    Se o LED estiver piscando, parabéns! Sua configuração do Arduino está funcionando corretamente. Isso
                    significa que:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>A IDE está instalada corretamente</li>
                    <li>A comunicação entre o computador e o Arduino está funcionando</li>
                    <li>O microcontrolador está executando o programa carregado</li>
                    <li>Você está pronto para começar a criar seus próprios projetos!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eletronica" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Conceitos Básicos de Eletrônica</h3>
                <p className="mb-4">
                  Para trabalhar efetivamente com Arduino, é importante entender alguns conceitos básicos de eletrônica.
                  Não é necessário ser um especialista, mas conhecer estes fundamentos ajudará você a criar circuitos
                  funcionais e seguros.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Tensão, Corrente e Resistência</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Tensão (V)</h5>
                    <p>É a "pressão" elétrica que faz a corrente fluir em um circuito. Medida em Volts (V).</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      No Arduino Uno, trabalhamos principalmente com 5V e 3.3V.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Corrente (I)</h5>
                    <p>É o fluxo de elétrons em um circuito. Medida em Amperes (A) ou miliamperes (mA).</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Os pinos do Arduino podem fornecer até 20mA cada.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Resistência (R)</h5>
                    <p>É a oposição ao fluxo de corrente. Medida em Ohms (Ω).</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Resistores são usados para limitar a corrente em LEDs e outros componentes.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Lei de Ohm</h4>
                  <p>
                    A Lei de Ohm é uma relação fundamental na eletrônica que relaciona tensão, corrente e resistência:
                  </p>
                  <div className="text-center font-bold text-xl my-2">V = I × R</div>
                  <p>
                    Onde V é a tensão em volts, I é a corrente em amperes e R é a resistência em ohms. Esta fórmula
                    permite calcular qualquer uma das três variáveis quando as outras duas são conhecidas.
                  </p>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Componentes Eletrônicos Básicos</h4>
                <div className="space-y-4 mb-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-muted rounded-lg p-3 md:w-1/4 flex-shrink-0">
                      <div className="aspect-square flex items-center justify-center">
                        <img src="/placeholder.svg?height=100&width=100" alt="Resistor" className="max-w-full h-auto" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold mb-1">Resistores</h5>
                      <p className="mb-2">
                        Limitam o fluxo de corrente em um circuito. São identificados por anéis coloridos que indicam
                        seu valor em ohms.
                      </p>
                      <p className="mb-2">
                        <strong>Usos comuns:</strong> Limitar corrente para LEDs, criar divisores de tensão,
                        pull-up/pull-down para botões.
                      </p>
                      <p>
                        <strong>Valores comuns:</strong> 220Ω, 330Ω, 1kΩ, 10kΩ.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-muted rounded-lg p-3 md:w-1/4 flex-shrink-0">
                      <div className="aspect-square flex items-center justify-center">
                        <img src="/placeholder.svg?height=100&width=100" alt="LED" className="max-w-full h-auto" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold mb-1">LEDs (Diodos Emissores de Luz)</h5>
                      <p className="mb-2">
                        Componentes que emitem luz quando uma corrente passa por eles. São polarizados, ou seja, têm um
                        sentido correto de conexão.
                      </p>
                      <p className="mb-2">
                        <strong>Polaridade:</strong> A perna mais longa é o ânodo (+) e deve ser conectada ao positivo.
                        A perna mais curta é o cátodo (-) e deve ser conectada ao negativo.
                      </p>
                      <p>
                        <strong>Importante:</strong> Sempre use um resistor em série com um LED para limitar a corrente
                        (geralmente 220Ω a 330Ω para LEDs comuns).
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-muted rounded-lg p-3 md:w-1/4 flex-shrink-0">
                      <div className="aspect-square flex items-center justify-center">
                        <img src="/placeholder.svg?height=100&width=100" alt="Botão" className="max-w-full h-auto" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold mb-1">Botões e Chaves</h5>
                      <p className="mb-2">
                        Permitem controle manual do fluxo de corrente. Botões push-button são momentâneos (só fecham o
                        circuito enquanto pressionados), enquanto chaves mantêm sua posição.
                      </p>
                      <p>
                        <strong>Uso com Arduino:</strong> Geralmente usados com resistores de pull-up ou pull-down para
                        garantir um estado definido quando não estão pressionados.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-muted rounded-lg p-3 md:w-1/4 flex-shrink-0">
                      <div className="aspect-square flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=100&width=100"
                          alt="Potenciômetro"
                          className="max-w-full h-auto"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold mb-1">Potenciômetros</h5>
                      <p className="mb-2">
                        Resistores variáveis que permitem ajustar a resistência manualmente. Têm três terminais: dois
                        para os extremos da resistência e um para o contato móvel (wiper).
                      </p>
                      <p>
                        <strong>Usos comuns:</strong> Controle de volume, ajuste de brilho, entrada analógica para o
                        Arduino.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-muted rounded-lg p-3 md:w-1/4 flex-shrink-0">
                      <div className="aspect-square flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=100&width=100"
                          alt="Capacitor"
                          className="max-w-full h-auto"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold mb-1">Capacitores</h5>
                      <p className="mb-2">
                        Armazenam carga elétrica temporariamente. Úteis para filtrar ruídos, estabilizar tensão e criar
                        temporizadores.
                      </p>
                      <p className="mb-2">
                        <strong>Tipos comuns:</strong> Cerâmicos (não polarizados) e eletrolíticos (polarizados - têm um
                        terminal positivo e um negativo).
                      </p>
                      <p>
                        <strong>Valores:</strong> Medidos em Farads (F), geralmente em microfarads (µF) ou picofarads
                        (pF).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Cuidados com Componentes Eletrônicos</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Sempre verifique a polaridade de componentes polarizados (LEDs, capacitores eletrolíticos)</li>
                    <li>
                      Nunca conecte componentes diretamente entre VCC e GND sem um resistor limitador (curto-circuito)
                    </li>
                    <li>Tenha cuidado com eletricidade estática ao manusear componentes sensíveis</li>
                    <li>
                      Verifique as especificações dos componentes (tensão máxima, corrente máxima) antes de usá-los
                    </li>
                    <li>Desligue a alimentação antes de fazer alterações no circuito</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Protoboard e Conexões</h3>
                <p className="mb-4">
                  A protoboard (ou breadboard) é uma ferramenta essencial para criar circuitos temporários sem
                  necessidade de solda. Entender como ela funciona é fundamental para seus projetos com Arduino.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/2">
                    <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                      <img src="/placeholder.svg?height=300&width=400" alt="Protoboard" className="max-w-full h-auto" />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-semibold mb-2">Como funciona uma Protoboard</h4>
                    <p className="mb-4">
                      Uma protoboard possui orifícios conectados internamente em um padrão específico:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Linhas de alimentação:</strong> As linhas horizontais nas bordas (geralmente marcadas
                        com + e -) são conectadas horizontalmente. Normalmente usadas para distribuir energia (VCC e
                        GND).
                      </li>
                      <li>
                        <strong>Linhas de componentes:</strong> As colunas verticais no meio são conectadas
                        verticalmente, mas separadas pelo canal central. Cada grupo de 5 orifícios (tipicamente
                        rotulados de a-e e f-j) forma uma conexão.
                      </li>
                      <li>
                        <strong>Canal central:</strong> Separa a protoboard em duas metades não conectadas, ideal para
                        posicionar circuitos integrados (CIs).
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Tipos de Jumpers e Conexões</h4>
                <p className="mb-4">
                  Para conectar componentes na protoboard e ao Arduino, usamos fios chamados "jumpers":
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Jumpers Macho-Macho</h5>
                    <p>
                      Têm pinos em ambas as extremidades. Usados para conexões entre pontos na protoboard ou de pinos
                      macho para a protoboard.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Jumpers Macho-Fêmea</h5>
                    <p>
                      Têm um pino em uma extremidade e um conector fêmea na outra. Usados para conectar a protoboard aos
                      pinos do Arduino.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Jumpers Fêmea-Fêmea</h5>
                    <p>
                      Têm conectores fêmea em ambas as extremidades. Usados para conectar componentes ou módulos com
                      pinos expostos.
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Dicas para Montagem de Circuitos</h4>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>
                    <strong>Organize por cores:</strong> Use cores diferentes para diferentes tipos de conexões
                    (vermelho para VCC, preto para GND, outras cores para sinais).
                  </li>
                  <li>
                    <strong>Mantenha o circuito organizado:</strong> Evite cruzamentos desnecessários de fios e mantenha
                    os componentes alinhados.
                  </li>
                  <li>
                    <strong>Verifique as conexões:</strong> Certifique-se de que os componentes e jumpers estejam bem
                    inseridos na protoboard.
                  </li>
                  <li>
                    <strong>Documente seu circuito:</strong> Faça um diagrama ou tire uma foto do circuito montado para
                    referência futura.
                  </li>
                  <li>
                    <strong>Teste por partes:</strong> Monte e teste o circuito em etapas, especialmente para projetos
                    mais complexos.
                  </li>
                </ul>

                <div className="bg-green-900/20 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Dica Prática</h4>
                  <p>
                    Ao montar circuitos na protoboard, comece conectando as linhas de alimentação (VCC e GND). Use as
                    linhas horizontais da protoboard para distribuir a energia e facilitar o acesso a esses pontos de
                    qualquer parte do circuito.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Leitura de Esquemas e Diagramas</h3>
                <p className="mb-4">
                  Saber interpretar esquemas e diagramas eletrônicos é uma habilidade importante para seguir tutoriais e
                  documentação de projetos Arduino.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Tipos de Diagramas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold mb-2">Esquema Eletrônico (Schematic)</h5>
                    <div className="bg-muted rounded-lg p-4 mb-2 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Esquema Eletrônico"
                        className="max-w-full h-auto"
                      />
                    </div>
                    <p>
                      Representação simbólica do circuito usando símbolos padronizados para componentes. Mostra as
                      conexões elétricas, mas não o layout físico.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Diagrama de Fritzing</h5>
                    <div className="bg-muted rounded-lg p-4 mb-2 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Diagrama de Fritzing"
                        className="max-w-full h-auto"
                      />
                    </div>
                    <p>
                      Representação visual mais realista que mostra como os componentes são fisicamente conectados na
                      protoboard. Muito comum em tutoriais de Arduino.
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Símbolos Comuns em Esquemas Eletrônicos</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="h-12 flex items-center justify-center">
                      <img src="/placeholder.svg?height=40&width=40" alt="Resistor" className="max-h-full" />
                    </div>
                    <p className="text-sm font-medium mt-2">Resistor</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="h-12 flex items-center justify-center">
                      <img src="/placeholder.svg?height=40&width=40" alt="LED" className="max-h-full" />
                    </div>
                    <p className="text-sm font-medium mt-2">LED</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="h-12 flex items-center justify-center">
                      <img src="/placeholder.svg?height=40&width=40" alt="Capacitor" className="max-h-full" />
                    </div>
                    <p className="text-sm font-medium mt-2">Capacitor</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="h-12 flex items-center justify-center">
                      <img src="/placeholder.svg?height=40&width=40" alt="Botão" className="max-h-full" />
                    </div>
                    <p className="text-sm font-medium mt-2">Botão/Chave</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="h-12 flex items-center justify-center">
                      <img src="/placeholder.svg?height=40&width=40" alt="Potenciômetro" className="max-h-full" />
                    </div>
                    <p className="text-sm font-medium mt-2">Potenciômetro</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="h-12 flex items-center justify-center">
                      <img src="/placeholder.svg?height=40&width=40" alt="Transistor" className="max-h-full" />
                    </div>
                    <p className="text-sm font-medium mt-2">Transistor</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="h-12 flex items-center justify-center">
                      <img src="/placeholder.svg?height=40&width=40" alt="Terra" className="max-h-full" />
                    </div>
                    <p className="text-sm font-medium mt-2">Terra (GND)</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="h-12 flex items-center justify-center">
                      <img src="/placeholder.svg?height=40&width=40" alt="Fonte" className="max-h-full" />
                    </div>
                    <p className="text-sm font-medium mt-2">Fonte (VCC)</p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Dicas para Leitura de Diagramas</h4>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>
                    <strong>Identifique a alimentação:</strong> Localize os pontos de VCC (positivo) e GND
                    (terra/negativo).
                  </li>
                  <li>
                    <strong>Siga as conexões:</strong> Linhas no diagrama representam conexões elétricas. Pontos onde as
                    linhas se encontram indicam uma conexão.
                  </li>
                  <li>
                    <strong>Observe os valores:</strong> Resistores, capacitores e outros componentes geralmente têm
                    seus valores indicados (ex: 220Ω, 10kΩ, 10µF).
                  </li>
                  <li>
                    <strong>Identifique os pinos do Arduino:</strong> Verifique quais pinos do Arduino estão sendo
                    usados e para qual função (digital, analógico, PWM).
                  </li>
                  <li>
                    <strong>Verifique a polaridade:</strong> Componentes polarizados como LEDs e capacitores
                    eletrolíticos têm uma orientação específica que deve ser respeitada.
                  </li>
                </ul>

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Ferramentas Úteis</h4>
                  <p className="mb-2">
                    Existem várias ferramentas que podem ajudar você a criar e interpretar diagramas eletrônicos:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <a
                        href="https://fritzing.org/"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Fritzing
                      </a>{" "}
                      - Ótimo para criar diagramas de protoboard, esquemas e até layouts de PCB
                    </li>
                    <li>
                      <a
                        href="https://www.tinkercad.com/circuits"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tinkercad Circuits
                      </a>{" "}
                      - Permite criar e simular circuitos Arduino online
                    </li>
                    <li>
                      <a
                        href="https://easyeda.com/"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        EasyEDA
                      </a>{" "}
                      - Ferramenta online para design de esquemas e PCBs
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programacao" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Estrutura Básica de um Programa Arduino</h3>
                <p className="mb-4">
                  Todo programa Arduino (também chamado de "sketch") segue uma estrutura básica com duas funções
                  principais: <code>setup()</code> e <code>loop()</code>. Vamos entender como elas funcionam e como
                  estruturar seu código.
                </p>

                <CodeBlock
                  code={`// Declarações globais e inclusão de bibliotecas
// (esta parte fica no início do código)

void setup() {
  // Código de configuração - executa uma vez no início
  // Aqui configuramos pinos, iniciamos comunicações, etc.
}

void loop() {
  // Código principal - executa repetidamente
  // Aqui fica a lógica principal do programa
}
`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Explicação da Estrutura</h4>
                <ol className="list-decimal pl-5 space-y-4 mb-6">
                  <li>
                    <strong>Declarações Globais:</strong>
                    <p>
                      No início do programa, antes de qualquer função, declaramos variáveis globais, constantes e
                      incluímos bibliotecas. Estas declarações estarão disponíveis em todo o programa.
                    </p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm mt-2">
                      <pre>{`#include <Servo.h>  // Inclui a biblioteca Servo

const int pinoLED = 13;  // Define uma constante para o pino do LED
int valorSensor = 0;     // Variável global para armazenar leitura do sensor
Servo meuServo;          // Cria um objeto Servo`}</pre>
                    </div>
                  </li>
                  <li>
                    <strong>Função setup():</strong>
                    <p>
                      Esta função é executada <em>uma única vez</em> quando o Arduino é ligado ou resetado. É usada para
                      inicializar configurações:
                    </p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Configurar pinos como entrada ou saída</li>
                      <li>Iniciar comunicação serial</li>
                      <li>Inicializar bibliotecas e dispositivos</li>
                      <li>Configurar estados iniciais</li>
                    </ul>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm mt-2">
                      <pre>{`void setup() {
  pinMode(pinoLED, OUTPUT);  // Configura o pino do LED como saída
  Serial.begin(9600);        // Inicia comunicação serial a 9600 bps
  meuServo.attach(9);        // Conecta o servo ao pino 9
  Serial.println("Inicialização concluída");  // Mensagem de debug
}`}</pre>
                    </div>
                  </li>
                  <li>
                    <strong>Função loop():</strong>
                    <p>
                      Esta função é executada <em>repetidamente</em> após o setup(), enquanto o Arduino estiver ligado.
                      É o coração do programa, onde a lógica principal acontece:
                    </p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Leitura de sensores</li>
                      <li>Processamento de dados</li>
                      <li>Controle de atuadores</li>
                      <li>Comunicação</li>
                      <li>Tomada de decisões</li>
                    </ul>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm mt-2">
                      <pre>{`void loop() {
  valorSensor = analogRead(A0);  // Lê o valor do sensor
  Serial.println(valorSensor);   // Exibe o valor no monitor serial
  
  if (valorSensor > 500) {       // Toma uma decisão baseada no valor
    digitalWrite(pinoLED, HIGH); // Liga o LED
    meuServo.write(90);          // Move o servo para 90 graus
  } else {
    digitalWrite(pinoLED, LOW);  // Desliga o LED
    meuServo.write(0);           // Move o servo para 0 graus
  }
  
  delay(100);  // Pequena pausa para estabilidade
}`}</pre>
                    </div>
                  </li>
                </ol>

                <h4 className="text-lg font-semibold mt-6 mb-2">Funções Personalizadas</h4>
                <p className="mb-4">
                  Além das funções obrigatórias <code>setup()</code> e <code>loop()</code>, você pode criar suas
                  próprias funções para organizar melhor o código e reutilizar blocos de lógica:
                </p>

                <CodeBlock
                  code={`// Declarações globais
const int pinoLED = 13;
const int pinoBotao = 2;

void setup() {
  pinMode(pinoLED, OUTPUT);
  pinMode(pinoBotao, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  if (botaoPressionado()) {
    piscarLED(5, 100);  // Pisca o LED 5 vezes com intervalo de 100ms
  }
  delay(100);
}

// Função personalizada para verificar se o botão foi pressionado
bool botaoPressionado() {
  return digitalRead(pinoBotao) == LOW;  // LOW com pull-up significa pressionado
}

// Função personalizada para piscar o LED um número específico de vezes
void piscarLED(int vezes, int intervalo) {
  for (int i = 0; i < vezes; i++) {
    digitalWrite(pinoLED, HIGH);
    delay(intervalo);
    digitalWrite(pinoLED, LOW);
    delay(intervalo);
  }
}`}
                  language="cpp"
                />

                <div className="bg-green-900/20 border-l-4 border-green-600 p-4 rounded-r-lg mt-6">
                  <h4 className="text-lg font-semibold mb-2">Boas Práticas</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use nomes descritivos para variáveis e funções</li>
                    <li>Adicione comentários para explicar partes complexas do código</li>
                    <li>Divida o código em funções menores e específicas</li>
                    <li>Use constantes em vez de números mágicos no código</li>
                    <li>Mantenha o código indentado e formatado para melhor legibilidade</li>
                    <li>
                      Evite usar <code>delay()</code> para tarefas que exigem multitarefa
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Tipos de Dados e Variáveis</h3>
                <p className="mb-4">
                  O Arduino usa a linguagem C/C++, que é fortemente tipada. Isso significa que cada variável deve ter um
                  tipo de dado específico. Vamos conhecer os principais tipos de dados e como usar variáveis.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Tipos de Dados Básicos</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-2 text-left">Tipo</th>
                        <th className="border border-border p-2 text-left">Tamanho</th>
                        <th className="border border-border p-2 text-left">Faixa de Valores</th>
                        <th className="border border-border p-2 text-left">Uso Comum</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2">
                          <code>boolean</code>
                        </td>
                        <td className="border border-border p-2">1 byte</td>
                        <td className="border border-border p-2">
                          <code>true</code> ou <code>false</code>
                        </td>
                        <td className="border border-border p-2">Estados lógicos, flags</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">
                          <code>byte</code>
                        </td>
                        <td className="border border-border p-2">1 byte</td>
                        <td className="border border-border p-2">0 a 255</td>
                        <td className="border border-border p-2">Valores pequenos sem sinal</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">
                          <code>char</code>
                        </td>
                        <td className="border border-border p-2">1 byte</td>
                        <td className="border border-border p-2">-128 a 127</td>
                        <td className="border border-border p-2">Caracteres ASCII</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">
                          <code>int</code>
                        </td>
                        <td className="border border-border p-2">2 bytes</td>
                        <td className="border border-border p-2">-32,768 a 32,767</td>
                        <td className="border border-border p-2">Números inteiros gerais</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">
                          <code>unsigned int</code>
                        </td>
                        <td className="border border-border p-2">2 bytes</td>
                        <td className="border border-border p-2">0 a 65,535</td>
                        <td className="border border-border p-2">Contadores, valores positivos</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">
                          <code>long</code>
                        </td>
                        <td className="border border-border p-2">4 bytes</td>
                        <td className="border border-border p-2">-2,147,483,648 a 2,147,483,647</td>
                        <td className="border border-border p-2">Números grandes, timestamps</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">
                          <code>float</code>
                        </td>
                        <td className="border border-border p-2">4 bytes</td>
                        <td className="border border-border p-2">-3.4028235E+38 a 3.4028235E+38</td>
                        <td className="border border-border p-2">Números decimais, cálculos precisos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Declaração de Variáveis</h4>
                <p className="mb-4">
                  Para declarar uma variável, especifique o tipo seguido pelo nome e, opcionalmente, um valor inicial:
                </p>

                <CodeBlock
                  code={`// Declarações simples
int contador;            // Declara um inteiro sem valor inicial
int sensor = 0;          // Declara um inteiro com valor inicial 0
float temperatura = 25.5; // Declara um float com valor inicial 25.5
boolean ligado = false;  // Declara um booleano com valor inicial false

// Constantes (valores que não mudam)
const int pinoLED = 13;  // Constante para o número do pino
#define TEMPO_ESPERA 1000 // Outra forma de definir constante (sem tipo)`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Escopo de Variáveis</h4>
                <p className="mb-4">O escopo de uma variável define onde ela pode ser acessada no código:</p>

                <CodeBlock
                  code={`// Variável global - acessível em todo o programa
int contadorGlobal = 0;

void setup() {
  // Variável local ao setup - só existe dentro do setup
  int configInicial = 42;
  
  Serial.begin(9600);
  Serial.println(contadorGlobal); // OK - variável global
  Serial.println(configInicial);  // OK - variável local ao setup
  // Serial.println(valorLoop);   // ERRO - variável não existe aqui
}

void loop() {
  // Variável local ao loop - só existe dentro do loop
  // É recriada a cada execução do loop
  int valorLoop = analogRead(A0);
  
  Serial.println(contadorGlobal); // OK - variável global
  // Serial.println(configInicial); // ERRO - variável não existe aqui
  Serial.println(valorLoop);      // OK - variável local ao loop
  
  contadorGlobal++; // Incrementa a variável global
  delay(1000);
}`}
                  language="cpp"
                />

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mt-6">
                  <h4 className="text-lg font-semibold mb-2">Dicas sobre Variáveis</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use o tipo de dado mais apropriado para economizar memória</li>
                    <li>Prefira variáveis locais quando possível para evitar efeitos colaterais</li>
                    <li>Use nomes descritivos que indiquem o propósito da variável</li>
                    <li>
                      Use <code>const</code> para valores que não mudam (como números de pinos)
                    </li>
                    <li>Inicialize suas variáveis para evitar comportamentos inesperados</li>
                    <li>Lembre-se que variáveis locais perdem seu valor quando a função termina</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Funções Básicas do Arduino</h3>
                <p className="mb-4">
                  O Arduino possui várias funções embutidas que facilitam a interação com os pinos e outros recursos da
                  placa. Vamos conhecer as principais funções que você usará em quase todos os projetos.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Funções de Entrada/Saída Digital</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold">pinMode(pino, modo)</h5>
                    <p className="mb-2">Configura um pino digital como entrada ou saída.</p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`pinMode(13, OUTPUT);     // Configura o pino 13 como saída
pinMode(7, INPUT);       // Configura o pino 7 como entrada
pinMode(2, INPUT_PULLUP); // Configura o pino 2 como entrada com resistor pull-up interno`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold">digitalWrite(pino, valor)</h5>
                    <p className="mb-2">Define o estado de um pino digital configurado como saída.</p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`digitalWrite(13, HIGH); // Define o pino 13 como ALTO (5V)
digitalWrite(13, LOW);  // Define o pino 13 como BAIXO (0V)

// Também pode usar valores booleanos
digitalWrite(13, true);  // Equivalente a HIGH
digitalWrite(13, false); // Equivalente a LOW`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold">digitalRead(pino)</h5>
                    <p className="mb-2">Lê o estado de um pino digital configurado como entrada.</p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`int estadoBotao = digitalRead(7); // Lê o estado do pino 7 (HIGH ou LOW)

if (digitalRead(2) == LOW) {  // Com INPUT_PULLUP, LOW significa botão pressionado
  // Código a executar quando o botão é pressionado
}`}</pre>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Funções de Entrada/Saída Analógica</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold">analogRead(pino)</h5>
                    <p className="mb-2">Lê o valor de um pino analógico (A0-A5). Retorna um valor entre 0 e 1023.</p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`int valorSensor = analogRead(A0); // Lê o valor do sensor conectado ao pino A0

// Convertendo para tensão (com Arduino operando em 5V)
float tensao = valorSensor * (5.0 / 1023.0);`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold">analogWrite(pino, valor)</h5>
                    <p className="mb-2">
                      Gera um sinal PWM em um pino digital que suporta PWM (~). O valor varia de 0 a 255.
                    </p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`analogWrite(9, 127);  // Define o pino 9 com 50% de duty cycle (127/255)
analogWrite(9, 255);  // 100% (totalmente ligado)
analogWrite(9, 0);    // 0% (totalmente desligado)

// Controle de brilho de LED
analogWrite(9, brilho); // Onde 'brilho' é uma variável entre 0 e 255`}</pre>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Funções de Tempo</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold">delay(milissegundos)</h5>
                    <p className="mb-2">Pausa a execução do programa pelo número especificado de milissegundos.</p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`delay(1000);  // Pausa por 1 segundo
delay(50);    // Pausa por 50 milissegundos`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold">delayMicroseconds(microssegundos)</h5>
                    <p className="mb-2">Pausa a execução do programa pelo número especificado de microssegundos.</p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`delayMicroseconds(10);  // Pausa por 10 microssegundos`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold">millis()</h5>
                    <p className="mb-2">
                      Retorna o número de milissegundos desde que o Arduino foi ligado. Útil para temporização
                      não-bloqueante.
                    </p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`unsigned long tempoAtual = millis();  // Obtém o tempo atual

// Exemplo de temporização sem bloquear o programa
unsigned long tempoAnterior = 0;
const long intervalo = 1000;  // intervalo de 1 segundo

void loop() {
  unsigned long tempoAtual = millis();
  
  if (tempoAtual - tempoAnterior >= intervalo) {
    tempoAnterior = tempoAtual;
    // Executa algo a cada segundo sem bloquear o programa
    digitalWrite(13, !digitalRead(13));  // Inverte o estado do LED
  }
  
  // Outras tarefas podem ser executadas aqui sem interrupção
}`}</pre>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Funções de Comunicação Serial</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold">Serial.begin(baudrate)</h5>
                    <p className="mb-2">Inicia a comunicação serial com a taxa de transmissão especificada.</p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`void setup() {
  Serial.begin(9600);  // Inicia comunicação serial a 9600 bps
}`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold">Serial.print() e Serial.println()</h5>
                    <p className="mb-2">
                      Envia dados para o Monitor Serial. println() adiciona uma quebra de linha no final.
                    </p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`Serial.print("Valor do sensor: ");  // Imprime texto sem quebra de linha
Serial.println(valorSensor);      // Imprime valor e adiciona quebra de linha

// Formatando valores
Serial.print(valorSensor, DEC);  // Formato decimal (padrão)
Serial.print(valorSensor, HEX);  // Formato hexadecimal
Serial.print(valorSensor, BIN);  // Formato binário
Serial.println(tensao, 2);       // Float com 2 casas decimais`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold">Serial.available() e Serial.read()</h5>
                    <p className="mb-2">Verifica se há dados disponíveis e lê um byte da porta serial.</p>
                    <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                      <pre>{`void loop() {
  if (Serial.available() > 0) {  // Verifica se há dados disponíveis
    char dadoRecebido = Serial.read();  // Lê um byte
    
    // Faz algo com o dado recebido
    if (dadoRecebido == 'A') {
      digitalWrite(13, HIGH);  // Liga o LED se receber 'A'
    } else if (dadoRecebido == 'B') {
      digitalWrite(13, LOW);   // Desliga o LED se receber 'B'
    }
  }
}`}</pre>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Limitações do delay()</h4>
                  <p className="mb-4">
                    Embora <code>delay()</code> seja simples de usar, ele tem uma limitação importante: bloqueia a
                    execução do programa. Durante o delay, o Arduino não pode fazer mais nada.
                  </p>
                  <p>
                    Para projetos que precisam fazer várias coisas ao mesmo tempo (como ler um sensor enquanto pisca um
                    LED), é melhor usar técnicas de temporização não-bloqueante com <code>millis()</code>, como mostrado
                    no exemplo acima.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projetos" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Projeto 1: Pisca-Pisca com LED</h3>
                <p className="mb-4">
                  Vamos começar com o projeto mais básico: fazer um LED piscar. Este é o "Olá, Mundo!" da programação
                  Arduino e ajudará você a entender os conceitos fundamentais.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-semibold mb-2">Materiais Necessários</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>1 Arduino Uno</li>
                      <li>1 LED (qualquer cor)</li>
                      <li>1 Resistor de 220Ω ou 330Ω</li>
                      <li>Jumpers</li>
                      <li>Protoboard (opcional)</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-semibold mb-2">Conceitos Abordados</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Configuração de pinos digitais</li>
                      <li>Saídas digitais (HIGH/LOW)</li>
                      <li>Função delay()</li>
                      <li>Estrutura básica de um sketch</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Montagem do Circuito</h4>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/2">
                    <div className="bg-muted rounded-lg p-4 flex items-center justify-center h-64">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Circuito LED Pisca-Pisca"
                        className="max-w-full max-h-full"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Conecte o resistor ao pino digital 13 do Arduino</li>
                      <li>Conecte a outra extremidade do resistor ao ânodo (perna mais longa) do LED</li>
                      <li>Conecte o cátodo (perna mais curta) do LED ao GND do Arduino</li>
                      <li>
                        Alternativamente, você pode usar o LED embutido na placa Arduino, que já está conectado ao pino
                        13
                      </li>
                    </ol>
                    <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mt-4">
                      <p className="text-sm">
                        <strong>Nota:</strong> O pino 13 do Arduino Uno tem um LED embutido na placa, então você pode
                        testar este programa sem montar o circuito externo.
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Código</h4>
                <CodeBlock
                  code={`// Projeto 1: Pisca-Pisca com LED
// Este programa faz um LED piscar em intervalos regulares

// Define o pino onde o LED está conectado
const int pinoLED = 13;

void setup() {
  // Configura o pino do LED como saída
  pinMode(pinoLED, OUTPUT);
}

void loop() {
  // Liga o LED
  digitalWrite(pinoLED, HIGH);
  
  // Aguarda 1 segundo
  delay(1000);
  
  // Desliga o LED
  digitalWrite(pinoLED, LOW);
  
  // Aguarda 1 segundo
  delay(1000);
  
  // O loop continuará repetindo este padrão
}`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Explicação do Código</h4>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>
                    <strong>Definição de constante:</strong> <code>const int pinoLED = 13;</code> define uma constante
                    para o número do pino, facilitando alterações futuras.
                  </li>
                  <li>
                    <strong>setup():</strong> Configura o pino como saída usando <code>pinMode()</code>.
                  </li>
                  <li>
                    <strong>loop():</strong> Contém a sequência de ações que será repetida indefinidamente:
                    <ol className="list-decimal pl-5 mt-2">
                      <li>
                        Liga o LED com <code>digitalWrite(pinoLED, HIGH);</code>
                      </li>
                      <li>
                        Espera 1 segundo com <code>delay(1000);</code> (1000 milissegundos)
                      </li>
                      <li>
                        Desliga o LED com <code>digitalWrite(pinoLED, LOW);</code>
                      </li>
                      <li>Espera mais 1 segundo</li>
                    </ol>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Desafios</h4>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h5 className="font-semibold mb-2">Desafio 1: Alterar a Velocidade</h5>
                    <p>
                      Modifique o código para fazer o LED piscar mais rápido (por exemplo, a cada 200ms) ou mais devagar
                      (a cada 2 segundos).
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h5 className="font-semibold mb-2">Desafio 2: Padrão SOS</h5>
                    <p>
                      Modifique o código para fazer o LED piscar no padrão SOS do código Morse: três piscadas curtas,
                      três piscadas longas, três piscadas curtas.
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h5 className="font-semibold mb-2">Desafio 3: Múltiplos LEDs</h5>
                    <p>
                      Adicione mais LEDs ao circuito e faça-os piscar em sequência, criando um efeito de "luz corrida".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Projeto 2: Leitura de Botão</h3>
                <p className="mb-4">
                  Neste projeto, vamos aprender a ler o estado de um botão e usar essa informação para controlar um LED.
                  Este é um exemplo básico de entrada digital.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-semibold mb-2">Materiais Necessários</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>1 Arduino Uno</li>
                      <li>1 LED (qualquer cor)</li>
                      <li>1 Resistor de 220Ω ou 330Ω (para o LED)</li>
                      <li>1 Botão push-button</li>
                      <li>1 Resistor de 10kΩ (para pull-up)</li>
                      <li>Jumpers</li>
                      <li>Protoboard</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-semibold mb-2">Conceitos Abordados</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Entradas digitais</li>
                      <li>Pull-up e pull-down</li>
                      <li>Leitura do estado de um botão</li>
                      <li>Estruturas condicionais (if/else)</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Montagem do Circuito</h4>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/2">
                    <div className="bg-muted rounded-lg p-4 flex items-center justify-center h-64">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Circuito Botão e LED"
                        className="max-w-full max-h-full"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Conecte o LED com o resistor de 220Ω ao pino 13, como no projeto anterior</li>
                      <li>Coloque o botão na protoboard</li>
                      <li>Conecte um lado do botão ao pino digital 2 do Arduino</li>
                      <li>Conecte o mesmo lado do botão a um terminal do resistor de 10kΩ</li>
                      <li>Conecte o outro terminal do resistor de 10kΩ ao 5V do Arduino</li>
                      <li>Conecte o outro lado do botão ao GND do Arduino</li>
                    </ol>
                    <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mt-4">
                      <p className="text-sm">
                        <strong>Nota:</strong> Este circuito usa um resistor de pull-up externo. Alternativamente, você
                        pode usar o pull-up interno do Arduino e simplificar o circuito.
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Código</h4>
                <CodeBlock
                  code={`// Projeto 2: Leitura de Botão
// Este programa lê o estado de um botão e controla um LED

// Define os pinos
const int pinoBotao = 2;  // Pino onde o botão está conectado
const int pinoLED = 13;   // Pino onde o LED está conectado

// Variável para armazenar o estado do botão
int estadoBotao = 0;

void setup() {
  // Configura o pino do botão como entrada
  pinMode(pinoBotao, INPUT);
  
  // Configura o pino do LED como saída
  pinMode(pinoLED, OUTPUT);
  
  // Inicia a comunicação serial para debug
  Serial.begin(9600);
}

void loop() {
  // Lê o estado do botão
  estadoBotao = digitalRead(pinoBotao);
  
  // Imprime o estado no monitor serial
  Serial.print("Estado do botão: ");
  Serial.println(estadoBotao);
  
  // Verifica se o botão está pressionado
  if (estadoBotao == HIGH) {
    // Se o botão está pressionado, acende o LED
    digitalWrite(pinoLED, HIGH);
  } else {
    // Se o botão não está pressionado, apaga o LED
    digitalWrite(pinoLED, LOW);
  }
  
  // Pequena pausa para estabilidade
  delay(50);
}`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Versão Alternativa com Pull-up Interno</h4>
                <CodeBlock
                  code={`// Projeto 2: Leitura de Botão (com pull-up interno)
// Este programa lê o estado de um botão usando o pull-up interno do Arduino

// Define os pinos
const int pinoBotao = 2;  // Pino onde o botão está conectado
const int pinoLED = 13;   // Pino onde o LED está conectado

// Variável para armazenar o estado do botão
int estadoBotao = 0;

void setup() {
  // Configura o pino do botão como entrada com pull-up interno
  pinMode(pinoBotao, INPUT_PULLUP);
  
  // Configura o pino do LED como saída
  pinMode(pinoLED, OUTPUT);
  
  // Inicia a comunicação serial para debug
  Serial.begin(9600);
}

void loop() {
  // Lê o estado do botão
  estadoBotao = digitalRead(pinoBotao);
  
  // Imprime o estado no monitor serial
  Serial.print("Estado do botão: ");
  Serial.println(estadoBotao);
  
  // Verifica se o botão está pressionado (lógica invertida com pull-up)
  if (estadoBotao == LOW) {
    // Se o botão está pressionado, acende o LED
    digitalWrite(pinoLED, HIGH);
  } else {
    // Se o botão não está pressionado, apaga o LED
    digitalWrite(pinoLED, LOW);
  }
  
  // Pequena pausa para estabilidade
  delay(50);
}`}
                  language="cpp"
                />

                <div className="bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded-r-lg mt-6 mb-6">
                  <h4 className="text-lg font-semibold mb-2">Importante: Pull-up vs. Pull-down</h4>
                  <p className="mb-2">Note a diferença na lógica entre os dois exemplos:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Com resistor de pull-up externo:</strong> O botão lê HIGH quando pressionado e LOW quando
                      não pressionado.
                    </li>
                    <li>
                      <strong>Com pull-up interno (INPUT_PULLUP):</strong> A lógica é invertida - o botão lê LOW quando
                      pressionado e HIGH quando não pressionado.
                    </li>
                  </ul>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Desafios</h4>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h5 className="font-semibold mb-2">Desafio 1: Alternar o Estado do LED</h5>
                    <p>
                      Modifique o código para que cada pressionamento do botão alterne o estado do LED (se estiver
                      ligado, desliga; se estiver desligado, liga).
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h5 className="font-semibold mb-2">Desafio 2: Contador de Pressionamentos</h5>
                    <p>
                      Adicione um contador que registre quantas vezes o botão foi pressionado e exiba o valor no Monitor
                      Serial.
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h5 className="font-semibold mb-2">Desafio 3: Dois Botões</h5>
                    <p>
                      Adicione um segundo botão que, quando pressionado, faz o LED piscar rapidamente por alguns
                      segundos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Projeto 3: Controle de Servo Motor</h3>
                <p className="mb-4">
                  Neste projeto, vamos aprender a controlar um servo motor, que é um tipo de motor que pode ser
                  posicionado em ângulos específicos. Servos são muito usados em robótica e automação.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-semibold mb-2">Materiais Necessários</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>1 Arduino Uno</li>
                      <li>1 Servo motor (pequeno, como o SG90)</li>
                      <li>1 Potenciômetro de 10kΩ (opcional, para controle manual)</li>
                      <li>Jumpers</li>
                      <li>Protoboard</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-semibold mb-2">Conceitos Abordados</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Uso de bibliotecas</li>
                      <li>Controle de servo motores</li>
                      <li>Entradas analógicas (com potenciômetro)</li>
                      <li>Mapeamento de valores</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Montagem do Circuito</h4>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/2">
                    <div className="bg-muted rounded-lg p-4 flex items-center justify-center h-64">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Circuito Servo Motor"
                        className="max-w-full max-h-full"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Conecte o fio vermelho (ou laranja) do servo ao 5V do Arduino</li>
                      <li>Conecte o fio marrom (ou preto) do servo ao GND do Arduino</li>
                      <li>Conecte o fio amarelo (ou branco/laranja) do servo ao pino digital 9 do Arduino</li>
                      <li>
                        <strong>Para controle com potenciômetro (opcional):</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Conecte um terminal do potenciômetro ao 5V</li>
                          <li>Conecte o terminal do meio (wiper) ao pino analógico A0</li>
                          <li>Conecte o outro terminal ao GND</li>
                        </ul>
                      </li>
                    </ol>
                    <div className="bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded-r-lg mt-4">
                      <p className="text-sm">
                        <strong>Atenção:</strong> Servos podem consumir mais corrente do que o Arduino pode fornecer
                        diretamente pela porta USB. Para projetos com múltiplos servos ou servos maiores, use uma fonte
                        de alimentação externa.
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Código: Movimento Automático</h4>
                <CodeBlock
                  code={`// Projeto 3: Controle de Servo Motor
// Este programa move um servo motor de 0 a 180 graus e volta

// Inclui a biblioteca Servo
#include <Servo.h>

// Cria um objeto Servo
Servo meuServo;

// Define o pino onde o servo está conectado
const int pinoServo = 9;

// Variável para armazenar a posição do servo
int posicao = 0;

void setup() {
  // Conecta o objeto Servo ao pino
  meuServo.attach(pinoServo);
  
  // Inicia a comunicação serial
  Serial.begin(9600);
  Serial.println("Controle de Servo Motor - Iniciado");
}

void loop() {
  // Move o servo de 0 a 180 graus
  for (posicao = 0; posicao <= 180; posicao += 1) {
    // Define a nova posição
    meuServo.write(posicao);
    
    // Exibe a posição atual
    Serial.print("Posição: ");
    Serial.println(posicao);
    
    // Aguarda 15ms para o servo atingir a posição
    delay(15);
  }
  
  // Aguarda um pouco na posição final
  delay(1000);
  
  // Move o servo de 180 a 0 graus
  for (posicao = 180; posicao >= 0; posicao -= 1) {
    // Define a nova posição
    meuServo.write(posicao);
    
    // Exibe a posição atual
    Serial.print("Posição: ");
    Serial.println(posicao);
    
    // Aguarda 15ms para o servo atingir a posição
    delay(15);
  }
  
  // Aguarda um pouco na posição inicial
  delay(1000);
}`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Código: Controle com Potenciômetro</h4>
                <CodeBlock
                  code={`// Projeto 3: Controle de Servo Motor com Potenciômetro
// Este programa controla a posição do servo com um potenciômetro

// Inclui a biblioteca Servo
#include <Servo.h>

// Cria um objeto Servo
Servo meuServo;

// Define os pinos
const int pinoServo = 9;
const int pinoPotenciometro = A0;

// Variáveis para armazenar valores
int valorPot = 0;    // Valor lido do potenciômetro (0-1023)
int angulo = 0;      // Ângulo para o servo (0-180)

void setup() {
  // Conecta o objeto Servo ao pino
  meuServo.attach(pinoServo);
  
  // Inicia a comunicação serial
  Serial.begin(9600);
  Serial.println("Controle de Servo Motor com Potenciômetro - Iniciado");
}

void loop() {
  // Lê o valor do potenciômetro (0-1023)
  valorPot = analogRead(pinoPotenciometro);
  
  // Mapeia o valor para um ângulo entre 0 e 180
  angulo = map(valorPot, 0, 1023, 0, 180);
  
  // Define a posição do servo
  meuServo.write(angulo);
  
  // Exibe os valores no monitor serial
  Serial.print("Potenciômetro: ");
  Serial.print(valorPot);
  Serial.print(" | Ângulo: ");
  Serial.println(angulo);
  
  // Pequena pausa para estabilidade
  delay(15);
}`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Explicação do Código</h4>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>
                    <strong>Biblioteca Servo:</strong> <code>#include &lt;Servo.h&gt;</code> inclui a biblioteca que
                    facilita o controle de servos.
                  </li>
                  <li>
                    <strong>Objeto Servo:</strong> <code>Servo meuServo;</code> cria um objeto para controlar o servo.
                  </li>
                  <li>
                    <strong>attach():</strong> <code>meuServo.attach(pinoServo);</code> associa o objeto ao pino físico.
                  </li>
                  <li>
                    <strong>write():</strong> <code>meuServo.write(angulo);</code> posiciona o servo no ângulo
                    especificado (0-180).
                  </li>
                  <li>
                    <strong>map():</strong> <code>map(valorPot, 0, 1023, 0, 180);</code> converte o valor do
                    potenciômetro (0-1023) para um ângulo (0-180).
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Desafios</h4>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h5 className="font-semibold mb-2">Desafio 1: Controle por Botões</h5>
                    <p>
                      Adicione dois botões: um para mover o servo para a esquerda e outro para a direita, em incrementos
                      de 10 graus.
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h5 className="font-semibold mb-2">Desafio 2: Movimento Suave</h5>
                    <p>
                      Modifique o código para que o servo se mova suavemente entre posições, mesmo com mudanças bruscas
                      no potenciômetro.
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h5 className="font-semibold mb-2">Desafio 3: Controle Serial</h5>
                    <p>
                      Implemente um sistema onde você pode enviar comandos pelo Monitor Serial para controlar o servo
                      (ex: "90" para mover para 90 graus).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Recursos Adicionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Solução de Problemas Comuns</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Arduino não é reconhecido pelo computador</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Verifique se o cabo USB está bem conectado</li>
                      <li>Tente outro cabo USB ou outra porta USB</li>
                      <li>Verifique se os drivers estão instalados corretamente</li>
                      <li>Reinicie o computador e a IDE Arduino</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Erro ao fazer upload do código</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Verifique se a placa e porta corretas estão selecionadas em Ferramentas</li>
                      <li>Certifique-se de que nenhum outro programa está usando a porta serial</li>
                      <li>Pressione o botão de reset no Arduino logo antes de iniciar o upload</li>
                      <li>Verifique se há erros de sintaxe no código (use o botão Verificar)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Componentes não funcionam como esperado</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Verifique todas as conexões físicas</li>
                      <li>Confirme se os componentes estão conectados aos pinos corretos</li>
                      <li>Verifique a polaridade de componentes como LEDs e capacitores</li>
                      <li>Use o Monitor Serial para depurar o código e ver valores intermediários</li>
                      <li>Teste componentes individualmente para identificar falhas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Links Úteis</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Documentação Oficial</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        <a
                          href="https://www.arduino.cc/reference/pt/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Referência da Linguagem Arduino (Português)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.arduino.cc/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Documentação Arduino (Inglês)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tutoriais e Projetos</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        <a
                          href="https://www.arduino.cc/en/Tutorial/BuiltInExamples"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Exemplos Embutidos na IDE Arduino
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.tinkercad.com/learn/circuits"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Tinkercad Circuits - Simulador Online
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instructables.com/circuits/arduino/projects/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Projetos Arduino no Instructables
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Comunidades</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        <a
                          href="https://forum.arduino.cc/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Fórum Oficial Arduino
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.reddit.com/r/arduino/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comunidade Arduino no Reddit
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://br-arduino.org/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comunidade Arduino Brasil
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-6 border-t">
          <div></div>
          <Button variant="default" asChild>
            <Link href="/programacao/arduino/leds">
              Próxima Lição: Controlando LEDs
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
