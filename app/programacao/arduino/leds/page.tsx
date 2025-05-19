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
import { Home, Code, ChevronRight, ChevronLeft, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CodeBlock } from "@/components/CodeBlock"

export default function ControlandoLEDsPage() {
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
              <BreadcrumbLink asChild>
                <Link href="/programacao/arduino">Arduino</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Controlando LEDs</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold">Controlando LEDs</h1>
            <p className="text-muted-foreground mt-2">Aprenda a controlar LEDs com saídas digitais</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/programacao/arduino/primeiros-passos">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Anterior
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/programacao/arduino/botoes">
                Próximo
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-grow">
            <Progress value={30} className="h-2" />
          </div>
          <div className="text-sm text-muted-foreground whitespace-nowrap">30% concluído</div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 mb-8 border border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Objetivos de Aprendizado</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Entender o funcionamento de LEDs e suas conexões</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Aprender a controlar saídas digitais no Arduino</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Criar padrões de pisca-pisca e sequências de LEDs</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="LEDs conectados ao Arduino"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="teoria" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="teoria">Teoria</TabsTrigger>
            <TabsTrigger value="montagem">Montagem</TabsTrigger>
            <TabsTrigger value="codigo">Código</TabsTrigger>
            <TabsTrigger value="desafios">Desafios</TabsTrigger>
          </TabsList>

          <TabsContent value="teoria" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">O que são LEDs?</h3>
                <p className="mb-4">
                  LED (Light Emitting Diode ou Diodo Emissor de Luz) é um componente eletrônico que emite luz quando uma
                  corrente elétrica passa por ele. Os LEDs são muito utilizados em projetos de eletrônica por serem:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Eficientes energeticamente (consomem pouca energia)</li>
                  <li>Duráveis (vida útil longa)</li>
                  <li>Compactos (pequenos e leves)</li>
                  <li>Disponíveis em várias cores</li>
                  <li>Rápidos para ligar e desligar (sem tempo de aquecimento)</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Polaridade dos LEDs</h4>
                <p className="mb-4">
                  LEDs são componentes polarizados, o que significa que eles têm um sentido correto para serem
                  conectados:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Ânodo (+):</strong> Terminal positivo, geralmente é a perna mais longa do LED
                  </li>
                  <li>
                    <strong>Cátodo (-):</strong> Terminal negativo, geralmente é a perna mais curta e/ou está do lado
                    achatado do LED
                  </li>
                </ul>
                <div className="bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded-r-lg mb-4">
                  <h4 className="text-lg font-semibold mb-2">Atenção</h4>
                  <p>
                    Conectar um LED na polaridade inversa não o danificará imediatamente, mas ele não acenderá. No
                    entanto, aplicar tensão excessiva pode danificar o LED permanentemente.
                  </p>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Resistor Limitador de Corrente</h4>
                <p className="mb-4">
                  LEDs precisam sempre ser conectados com um resistor em série para limitar a corrente que passa por
                  eles. Sem o resistor, o LED pode queimar rapidamente.
                </p>
                <p className="mb-4">
                  O valor do resistor depende da tensão de operação, da queda de tensão do LED (varia conforme a cor) e
                  da corrente desejada (geralmente entre 10mA e 20mA).
                </p>
                <p className="mb-4">
                  Para um LED comum conectado a 5V (saída do Arduino), um resistor de 220Ω a 330Ω é geralmente adequado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Saídas Digitais no Arduino</h3>
                <p className="mb-4">
                  O Arduino possui pinos digitais que podem ser configurados como saídas para controlar componentes como
                  LEDs. Quando configurados como saída, esses pinos podem estar em dois estados:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>HIGH (ALTO):</strong> Fornece 5V (ou 3.3V, dependendo da placa)
                  </li>
                  <li>
                    <strong>LOW (BAIXO):</strong> Fornece 0V (terra/GND)
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Funções Básicas para Controle de Saídas Digitais</h4>
                <div className="bg-black text-white p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                  <pre>
                    {`// Configura o pino como saída
pinMode(pinoLED, OUTPUT);

// Define o estado do pino como ALTO (5V)
digitalWrite(pinoLED, HIGH);

// Define o estado do pino como BAIXO (0V)
digitalWrite(pinoLED, LOW);

// Aguarda um tempo em milissegundos
delay(1000);  // Aguarda 1 segundo`}
                  </pre>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Limitações das Saídas Digitais</h4>
                <p className="mb-4">
                  As saídas digitais do Arduino têm algumas limitações importantes a serem consideradas:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Corrente máxima:</strong> Cada pino pode fornecer no máximo 20mA (recomendado) a 40mA
                    (absoluto)
                  </li>
                  <li>
                    <strong>Corrente total:</strong> A soma da corrente de todos os pinos não deve exceder 200mA
                  </li>
                  <li>
                    <strong>Apenas dois estados:</strong> Saídas digitais só podem estar ligadas (HIGH) ou desligadas
                    (LOW), sem estados intermediários (para isso, usamos PWM)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="montagem" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Montagem do Circuito</h3>
                <p className="mb-4">
                  Vamos montar um circuito simples com um LED conectado ao Arduino. Para isso, você precisará:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>1 Arduino Uno (ou compatível)</li>
                  <li>1 LED (qualquer cor)</li>
                  <li>1 Resistor de 220Ω (vermelho-vermelho-marrom) ou 330Ω (laranja-laranja-marrom)</li>
                  <li>Jumpers/fios para conexão</li>
                  <li>Protoboard (opcional, mas recomendado)</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Passo a Passo</h4>
                <ol className="list-decimal pl-5 space-y-4 mb-4">
                  <li>
                    <strong>Conecte o resistor:</strong>
                    <p>
                      Insira uma ponta do resistor no pino digital 13 do Arduino (ou outro pino de sua escolha) e a
                      outra ponta em um ponto livre da protoboard.
                    </p>
                  </li>
                  <li>
                    <strong>Conecte o LED:</strong>
                    <p>
                      Insira o ânodo (perna mais longa) do LED no mesmo ponto da protoboard onde está conectado o
                      resistor. Insira o cátodo (perna mais curta) em outro ponto da protoboard.
                    </p>
                  </li>
                  <li>
                    <strong>Conecte o GND:</strong>
                    <p>Conecte um jumper do pino GND do Arduino até o ponto da protoboard onde está o cátodo do LED.</p>
                  </li>
                </ol>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Diagrama de Conexão</h4>
                  <div className="bg-black text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>
                      {`Arduino          Componentes
---------------------------------
Pino 13    ----→ Resistor 220Ω ----→ LED (ânodo/+)
GND        ----→ LED (cátodo/-)`}
                    </pre>
                  </div>
                </div>

                <div className="bg-green-900/20 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Dica</h4>
                  <p>
                    O pino 13 do Arduino Uno já possui um LED embutido na placa, conectado através de um resistor. Isso
                    significa que você pode testar o código sem montar o circuito externo, apenas observando o LED na
                    placa.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Montagem com Múltiplos LEDs</h3>
                <p className="mb-4">
                  Para criar sequências de LEDs, podemos conectar vários LEDs a diferentes pinos digitais do Arduino.
                  Cada LED precisará de seu próprio resistor.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Materiais Necessários</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>1 Arduino Uno (ou compatível)</li>
                  <li>3-5 LEDs (podem ser de cores diferentes)</li>
                  <li>3-5 Resistores de 220Ω ou 330Ω (um para cada LED)</li>
                  <li>Jumpers/fios para conexão</li>
                  <li>Protoboard</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Passo a Passo</h4>
                <ol className="list-decimal pl-5 space-y-4 mb-4">
                  <li>
                    <strong>Conecte cada LED:</strong>
                    <p>
                      Para cada LED, repita o processo anterior, conectando um resistor entre o pino digital do Arduino
                      e o ânodo do LED. Conecte o cátodo de cada LED ao GND.
                    </p>
                  </li>
                  <li>
                    <strong>Use pinos diferentes:</strong>
                    <p>
                      Conecte cada LED a um pino digital diferente (por exemplo, pinos 8, 9, 10, 11 e 12) para poder
                      controlá-los independentemente.
                    </p>
                  </li>
                </ol>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Diagrama de Conexão</h4>
                  <div className="bg-black text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>
                      {`Arduino          Componentes
---------------------------------
Pino 8     ----→ Resistor ----→ LED1 (ânodo/+)
Pino 9     ----→ Resistor ----→ LED2 (ânodo/+)
Pino 10    ----→ Resistor ----→ LED3 (ânodo/+)
Pino 11    ----→ Resistor ----→ LED4 (ânodo/+)
Pino 12    ----→ Resistor ----→ LED5 (ânodo/+)
GND        ----→ Todos os LEDs (cátodo/-)`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="codigo" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Código Básico: Pisca-Pisca</h3>
                <p className="mb-4">
                  Vamos começar com o exemplo clássico de piscar um LED. Este é o equivalente ao "Hello World" da
                  programação Arduino.
                </p>

                <CodeBlock
                  code={`// Define o pino onde o LED está conectado
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
                <ul className="list-disc pl-5 space-y-2 mb-4">
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

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Nota</h4>
                  <p>
                    A função <code>delay()</code> pausa a execução do programa pelo número especificado de
                    milissegundos. Durante esse tempo, o Arduino não pode fazer nenhuma outra tarefa. Para aplicações
                    mais complexas, existem técnicas de temporização não-bloqueantes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Código Avançado: Sequência de LEDs</h3>
                <p className="mb-4">
                  Agora vamos criar uma sequência de LEDs que acendem em ordem, como uma "luz corrida". Este exemplo usa
                  múltiplos LEDs conectados a diferentes pinos.
                </p>

                <CodeBlock
                  code={`// Define os pinos onde os LEDs estão conectados
const int numLEDs = 5;
const int pinosLED[numLEDs] = {8, 9, 10, 11, 12};

void setup() {
  // Configura todos os pinos dos LEDs como saída
  for (int i = 0; i < numLEDs; i++) {
    pinMode(pinosLED[i], OUTPUT);
  }
}

void loop() {
  // Acende os LEDs em sequência
  for (int i = 0; i < numLEDs; i++) {
    digitalWrite(pinosLED[i], HIGH);  // Liga o LED atual
    delay(200);                       // Aguarda 200ms
    digitalWrite(pinosLED[i], LOW);   // Desliga o LED atual
  }
  
  // Acende os LEDs em sequência reversa
  for (int i = numLEDs - 2; i >= 0; i--) {
    digitalWrite(pinosLED[i], HIGH);  // Liga o LED atual
    delay(200);                       // Aguarda 200ms
    digitalWrite(pinosLED[i], LOW);   // Desliga o LED atual
  }
}`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Explicação do Código</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Array de pinos:</strong> <code>const int pinosLED[numLEDs] = {"{8, 9, 10, 11, 12}"}</code>{" "}
                    cria um array com os números dos pinos onde os LEDs estão conectados.
                  </li>
                  <li>
                    <strong>Loop de configuração:</strong> Usamos um loop <code>for</code> para configurar todos os
                    pinos como saída de uma vez.
                  </li>
                  <li>
                    <strong>Sequência de acendimento:</strong> O primeiro loop <code>for</code> acende cada LED em
                    ordem, do primeiro ao último.
                  </li>
                  <li>
                    <strong>Sequência reversa:</strong> O segundo loop <code>for</code> acende os LEDs na ordem inversa,
                    do penúltimo ao primeiro (note que começamos em <code>numLEDs - 2</code> para não repetir o último
                    LED).
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Variações</h4>
                <p className="mb-4">Experimente estas variações para criar efeitos diferentes:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Efeito "Knight Rider":</strong> Mantenha o LED anterior aceso enquanto acende o próximo,
                    criando um efeito de "preenchimento" e depois "esvaziamento".
                  </li>
                  <li>
                    <strong>Velocidade variável:</strong> Altere o valor do <code>delay()</code> para acelerar ou
                    desacelerar a sequência.
                  </li>
                  <li>
                    <strong>Padrões aleatórios:</strong> Use a função <code>random()</code> para acender LEDs
                    aleatoriamente.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Código Avançado: Efeito de Respiração</h3>
                <p className="mb-4">
                  Este exemplo cria um efeito de "respiração" onde o LED aumenta e diminui gradualmente de brilho. Para
                  isso, usaremos um pino PWM (marcado com ~ na placa Arduino).
                </p>

                <Alert className="mb-4">
                  <AlertTitle>Nota sobre PWM</AlertTitle>
                  <AlertDescription>
                    Este exemplo usa PWM (Pulse Width Modulation), que será explicado em detalhes em uma lição futura.
                    Por enquanto, basta saber que a função <code>analogWrite()</code> permite controlar a intensidade do
                    LED.
                  </AlertDescription>
                </Alert>

                <CodeBlock
                  code={`// Define o pino PWM onde o LED está conectado
const int pinoLED = 9;  // Deve ser um pino PWM (~)

void setup() {
  // Não é necessário configurar o pinMode para analogWrite,
  // mas é uma boa prática para clareza do código
  pinMode(pinoLED, OUTPUT);
}

void loop() {
  // Aumenta gradualmente o brilho
  for (int brilho = 0; brilho <= 255; brilho++) {
    analogWrite(pinoLED, brilho);
    delay(5);  // Pequena pausa para tornar a transição visível
  }
  
  // Diminui gradualmente o brilho
  for (int brilho = 255; brilho >= 0; brilho--) {
    analogWrite(pinoLED, brilho);
    delay(5);
  }
  
  // Pequena pausa antes de recomeçar
  delay(500);
}`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Explicação do Código</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Pino PWM:</strong> Usamos o pino 9, que é um pino PWM no Arduino Uno (marcado com ~).
                  </li>
                  <li>
                    <strong>analogWrite():</strong> Esta função aceita valores de 0 (desligado) a 255 (totalmente
                    ligado), permitindo controlar a intensidade do LED.
                  </li>
                  <li>
                    <strong>Loops graduais:</strong> Usamos dois loops <code>for</code> para aumentar e diminuir
                    gradualmente o valor enviado ao LED.
                  </li>
                  <li>
                    <strong>Delays curtos:</strong> Os delays de 5ms criam uma transição suave entre os níveis de
                    brilho.
                  </li>
                </ul>

                <div className="bg-green-900/20 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Dica</h4>
                  <p>
                    Para um efeito de respiração mais natural, você pode usar funções matemáticas como seno ou
                    exponencial para calcular os valores de brilho, em vez de incrementos lineares.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="desafios" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Desafios para Praticar</h3>
                <p className="mb-4">
                  Tente resolver estes desafios para aprimorar suas habilidades de programação com Arduino e LEDs:
                </p>

                <div className="space-y-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2">Desafio 1: Código Morse</h4>
                    <p className="mb-4">
                      Crie um programa que pisque um LED para exibir uma mensagem em código Morse. Por exemplo, a
                      palavra "SOS" (... --- ...).
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>Ponto (.) = LED aceso por 200ms</li>
                      <li>Traço (-) = LED aceso por 600ms</li>
                      <li>Espaço entre símbolos = LED apagado por 200ms</li>
                      <li>Espaço entre letras = LED apagado por 600ms</li>
                    </ul>
                    <Button variant="outline" size="sm">
                      Ver Dica
                    </Button>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2">Desafio 2: Semáforo</h4>
                    <p className="mb-4">
                      Crie um semáforo usando LEDs vermelho, amarelo e verde. O semáforo deve seguir a sequência:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 mb-4">
                      <li>Verde aceso por 5 segundos</li>
                      <li>Verde apagado, Amarelo aceso por 2 segundos</li>
                      <li>Amarelo apagado, Vermelho aceso por 5 segundos</li>
                      <li>Repetir a sequência</li>
                    </ol>
                    <Button variant="outline" size="sm">
                      Ver Dica
                    </Button>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2">Desafio 3: Efeito de Perseguição</h4>
                    <p className="mb-4">
                      Usando 6 ou mais LEDs, crie um efeito de "perseguição" onde múltiplos LEDs estão acesos
                      simultaneamente e parecem se mover em uma direção.
                    </p>
                    <p className="mb-4">
                      Por exemplo, com 6 LEDs, mantenha 3 acesos consecutivamente e faça esse "bloco" de LEDs acesos se
                      mover da esquerda para a direita e depois voltar.
                    </p>
                    <Button variant="outline" size="sm">
                      Ver Dica
                    </Button>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2">Desafio 4: Efeito de Fade Múltiplo</h4>
                    <p className="mb-4">
                      Usando 3 LEDs conectados a pinos PWM, crie um efeito onde cada LED aumenta e diminui seu brilho em
                      momentos diferentes, criando um padrão de "ondas" de luz.
                    </p>
                    <Button variant="outline" size="sm">
                      Ver Dica
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Projeto Prático: Medidor de Nível com LEDs</h3>
                <p className="mb-4">
                  Neste projeto, você criará um medidor de nível visual usando vários LEDs. Este é um projeto integrador
                  que combina o que você aprendeu sobre LEDs com conceitos de entrada analógica que serão abordados em
                  lições futuras.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Materiais Necessários</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>1 Arduino Uno</li>
                  <li>5 LEDs (idealmente em cores diferentes ou em sequência: verde, amarelo, vermelho)</li>
                  <li>5 resistores de 220Ω</li>
                  <li>1 potenciômetro de 10kΩ</li>
                  <li>Jumpers e protoboard</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Funcionamento</h4>
                <p className="mb-4">
                  O potenciômetro será usado como entrada analógica. Conforme você gira o potenciômetro, mais LEDs
                  acendem, criando um efeito de "barra de progresso" ou medidor de nível.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Código Base</h4>
                <CodeBlock
                  code={`// Define os pinos onde os LEDs estão conectados
const int numLEDs = 5;
const int pinosLED[numLEDs] = {2, 3, 4, 5, 6};
const int pinoPotenciometro = A0;  // Pino analógico para o potenciômetro

void setup() {
  // Configura todos os pinos dos LEDs como saída
  for (int i = 0; i < numLEDs; i++) {
    pinMode(pinosLED[i], OUTPUT);
  }
}

void loop() {
  // Lê o valor do potenciômetro (0-1023)
  int valorPot = analogRead(pinoPotenciometro);
  
  // Calcula quantos LEDs devem estar acesos
  // O valor 1023 dividido por numLEDs dá o "tamanho" de cada segmento
  int numLEDsAcesos = map(valorPot, 0, 1023, 0, numLEDs);
  
  // Acende os LEDs conforme o valor lido
  for (int i = 0; i < numLEDs; i++) {
    if (i < numLEDsAcesos) {
      digitalWrite(pinosLED[i], HIGH);  // Acende o LED
    } else {
      digitalWrite(pinosLED[i], LOW);   // Apaga o LED
    }
  }
  
  // Pequena pausa para estabilidade
  delay(50);
}`}
                  language="cpp"
                />

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mt-6">
                  <h4 className="text-lg font-semibold mb-2">Extensões do Projeto</h4>
                  <p className="mb-4">Depois de implementar o projeto básico, tente estas extensões:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Adicione um efeito de "respiração" ao último LED aceso para indicar valores intermediários</li>
                    <li>
                      Substitua o potenciômetro por um sensor de luz (LDR) para criar um medidor de intensidade luminosa
                    </li>
                    <li>Adicione um buzzer que emite sons diferentes conforme o nível aumenta</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center mt-12 pt-6 border-t">
          <Button variant="outline" asChild>
            <Link href="/programacao/arduino/primeiros-passos">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Lição Anterior: Primeiros Passos
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/programacao/arduino/botoes">
              Próxima Lição: Leitura de Botões
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
