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
import { CodeBlock } from "@/components/CodeBlock"

export default function BotoesPage() {
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
              <BreadcrumbLink>Leitura de Botões</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold">Leitura de Botões</h1>
            <p className="text-muted-foreground mt-2">Utilizando entradas digitais para ler o estado de botões</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/programacao/arduino/leds">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Anterior
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/programacao/arduino/analogicos">
                Próximo
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-grow">
            <Progress value={45} className="h-2" />
          </div>
          <div className="text-sm text-muted-foreground whitespace-nowrap">45% concluído</div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 mb-8 border border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Objetivos de Aprendizado</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Entender o funcionamento de botões e chaves</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Aprender a configurar e ler entradas digitais no Arduino</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Implementar detecção de pressionamento de botão e debouncing</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Criar projetos interativos combinando botões e LEDs</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Botão conectado ao Arduino"
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
                <h3 className="text-xl font-semibold mb-4">Entradas Digitais no Arduino</h3>
                <p className="mb-4">
                  Enquanto as saídas digitais permitem que o Arduino controle componentes externos, as entradas digitais
                  permitem que ele "leia" o mundo exterior. Com entradas digitais, podemos detectar se um botão foi
                  pressionado, se uma chave está ligada ou desligada, ou se um sensor digital foi ativado.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Estados de Entrada Digital</h4>
                <p className="mb-4">
                  Assim como as saídas digitais, as entradas digitais têm apenas dois estados possíveis:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>HIGH (ALTO):</strong> Quando a tensão no pino é próxima de 5V (ou 3.3V, dependendo da placa)
                  </li>
                  <li>
                    <strong>LOW (BAIXO):</strong> Quando a tensão no pino é próxima de 0V (terra/GND)
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Funções Básicas para Leitura de Entradas Digitais</h4>
                <div className="bg-black text-white p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                  <pre>
                    {`// Configura o pino como entrada
pinMode(pinoButton, INPUT);

// Configura o pino como entrada com resistor de pull-up interno
pinMode(pinoButton, INPUT_PULLUP);

// Lê o estado atual do pino (retorna HIGH ou LOW)
int estadoButton = digitalRead(pinoButton);`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Botões e Pull-up/Pull-down</h3>
                <p className="mb-4">
                  Quando conectamos um botão ao Arduino, precisamos garantir que o pino de entrada tenha um estado
                  definido mesmo quando o botão não está pressionado. Isso é feito usando resistores de pull-up ou
                  pull-down.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Resistor de Pull-up</h4>
                <p className="mb-4">
                  Um resistor de pull-up conecta o pino de entrada ao VCC (5V), garantindo que o pino leia HIGH quando o
                  botão não está pressionado. Quando o botão é pressionado, ele conecta o pino ao GND, fazendo-o ler
                  LOW.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Botão não pressionado: Pino lê HIGH (5V)</li>
                  <li>Botão pressionado: Pino lê LOW (0V)</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Resistor de Pull-down</h4>
                <p className="mb-4">
                  Um resistor de pull-down conecta o pino de entrada ao GND, garantindo que o pino leia LOW quando o
                  botão não está pressionado. Quando o botão é pressionado, ele conecta o pino ao VCC, fazendo-o ler
                  HIGH.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Botão não pressionado: Pino lê LOW (0V)</li>
                  <li>Botão pressionado: Pino lê HIGH (5V)</li>
                </ul>

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mb-4">
                  <h4 className="text-lg font-semibold mb-2">Pull-up Interno</h4>
                  <p>
                    O Arduino possui resistores de pull-up internos que podem ser ativados por software, eliminando a
                    necessidade de um resistor externo. Isso é feito usando <code>pinMode(pino, INPUT_PULLUP)</code>.
                    Com o pull-up interno, a lógica é invertida: o botão lê HIGH quando não está pressionado e LOW
                    quando está pressionado.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">O Problema do Debounce</h3>
                <p className="mb-4">
                  Quando um botão mecânico é pressionado ou liberado, os contatos metálicos podem "quicar" (bounce)
                  várias vezes antes de se estabilizarem. Isso pode fazer com que o Arduino detecte múltiplos
                  pressionamentos quando na verdade houve apenas um.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">O que é Debounce?</h4>
                <p className="mb-4">
                  Debounce é a técnica usada para eliminar esses "quiques" e garantir que o Arduino detecte apenas um
                  pressionamento quando o botão é pressionado uma vez.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Métodos de Debounce</h4>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Debounce por Hardware:</strong> Usando capacitores e resistores para filtrar os quiques
                    eletricamente.
                  </li>
                  <li>
                    <strong>Debounce por Software:</strong> Usando código para ignorar mudanças rápidas no estado do
                    botão. Existem várias técnicas:
                    <ul className="list-disc pl-5 mt-2">
                      <li>
                        <strong>Delay:</strong> Esperar um curto período após detectar uma mudança (simples, mas
                        bloqueia o programa)
                      </li>
                      <li>
                        <strong>Timestamp:</strong> Registrar o momento da última mudança e só aceitar uma nova após um
                        tempo mínimo (não bloqueia o programa)
                      </li>
                      <li>
                        <strong>Leituras múltiplas:</strong> Só aceitar uma mudança se várias leituras consecutivas
                        mostrarem o mesmo estado
                      </li>
                    </ul>
                  </li>
                </ol>

                <div className="bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Atenção</h4>
                  <p>
                    Sem debounce, um único pressionamento de botão pode ser interpretado como dezenas de
                    pressionamentos, causando comportamentos inesperados em seu programa. Sempre implemente alguma forma
                    de debounce ao trabalhar com botões.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="montagem" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Montagem do Circuito com Botão</h3>
                <p className="mb-4">
                  Vamos montar um circuito simples com um botão conectado ao Arduino. Para isso, você precisará:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>1 Arduino Uno (ou compatível)</li>
                  <li>1 Botão push-button (ou chave táctil)</li>
                  <li>1 Resistor de 10kΩ (para configuração externa de pull-up/down)</li>
                  <li>1 LED (opcional, para visualizar a resposta)</li>
                  <li>1 Resistor de 220Ω (se usar o LED)</li>
                  <li>Jumpers/fios para conexão</li>
                  <li>Protoboard</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Montagem com Pull-up Externo</h4>
                <ol className="list-decimal pl-5 space-y-4 mb-4">
                  <li>
                    <strong>Posicione o botão na protoboard:</strong>
                    <p>
                      Coloque o botão push-button na protoboard, garantindo que os pinos estejam em linhas diferentes.
                    </p>
                  </li>
                  <li>
                    <strong>Conecte o resistor de pull-up:</strong>
                    <p>
                      Conecte um lado do resistor de 10kΩ ao 5V do Arduino. Conecte o outro lado a um dos terminais do
                      botão.
                    </p>
                  </li>
                  <li>
                    <strong>Conecte o pino de entrada:</strong>
                    <p>
                      Conecte um jumper do mesmo terminal do botão onde está o resistor ao pino digital 2 do Arduino.
                    </p>
                  </li>
                  <li>
                    <strong>Conecte o GND:</strong>
                    <p>Conecte o outro terminal do botão ao GND do Arduino.</p>
                  </li>
                  <li>
                    <strong>(Opcional) Conecte o LED:</strong>
                    <p>
                      Se quiser visualizar a resposta, conecte um LED com um resistor de 220Ω ao pino digital 13 do
                      Arduino.
                    </p>
                  </li>
                </ol>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Diagrama de Conexão (Pull-up Externo)</h4>
                  <div className="bg-black text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>
                      {`Arduino          Componentes
---------------------------------
5V         ----→ Resistor 10kΩ ----→ Botão Terminal 1 ----→ Pino 2
GND        ----→ Botão Terminal 2
Pino 13    ----→ Resistor 220Ω ----→ LED (ânodo) ----→ LED (cátodo) ----→ GND`}
                    </pre>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-2">Montagem com Pull-up Interno</h4>
                <p className="mb-4">
                  Alternativamente, podemos usar o resistor de pull-up interno do Arduino, simplificando o circuito:
                </p>
                <ol className="list-decimal pl-5 space-y-4 mb-4">
                  <li>
                    <strong>Posicione o botão na protoboard:</strong>
                    <p>
                      Coloque o botão push-button na protoboard, garantindo que os pinos estejam em linhas diferentes.
                    </p>
                  </li>
                  <li>
                    <strong>Conecte o pino de entrada:</strong>
                    <p>Conecte um jumper de um dos terminais do botão ao pino digital 2 do Arduino.</p>
                  </li>
                  <li>
                    <strong>Conecte o GND:</strong>
                    <p>Conecte o outro terminal do botão ao GND do Arduino.</p>
                  </li>
                </ol>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Diagrama de Conexão (Pull-up Interno)</h4>
                  <div className="bg-black text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>
                      {`Arduino          Componentes
---------------------------------
Pino 2     ----→ Botão Terminal 1
GND        ----→ Botão Terminal 2
Pino 13    ----→ Resistor 220Ω ----→ LED (ânodo) ----→ LED (cátodo) ----→ GND`}
                    </pre>
                  </div>
                </div>

                <div className="bg-green-900/20 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Dica</h4>
                  <p>
                    Usar o resistor de pull-up interno é mais simples e economiza componentes. No entanto, lembre-se que
                    a lógica é invertida: o botão lê LOW quando pressionado e HIGH quando não pressionado.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="codigo" className="mt-6 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Código Básico: Leitura de Botão</h3>
                <p className="mb-4">
                  Vamos começar com um exemplo simples que lê o estado de um botão e acende um LED quando o botão é
                  pressionado.
                </p>

                <h4 className="text-lg font-semibold mb-2">Usando Pull-up Externo</h4>
                <CodeBlock
                  code={`// Define os pinos
const int pinoButton = 2;  // Pino onde o botão está conectado
const int pinoLED = 13;    // Pino onde o LED está conectado

// Variável para armazenar o estado do botão
int estadoButton = 0;

void setup() {
  // Configura o pino do botão como entrada
  pinMode(pinoButton, INPUT);
  
  // Configura o pino do LED como saída
  pinMode(pinoLED, OUTPUT);
  
  // Inicia a comunicação serial para debug
  Serial.begin(9600);
}

void loop() {
  // Lê o estado do botão
  estadoButton = digitalRead(pinoButton);
  
  // Imprime o estado no monitor serial
  Serial.print("Estado do botão: ");
  Serial.println(estadoButton);
  
  // Verifica se o botão está pressionado
  if (estadoButton == HIGH) {
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

                <h4 className="text-lg font-semibold mt-6 mb-2">Usando Pull-up Interno</h4>
                <CodeBlock
                  code={`// Define os pinos
const int pinoButton = 2;  // Pino onde o botão está conectado
const int pinoLED = 13;    // Pino onde o LED está conectado

// Variável para armazenar o estado do botão
int estadoButton = 0;

void setup() {
  // Configura o pino do botão como entrada com pull-up interno
  pinMode(pinoButton, INPUT_PULLUP);
  
  // Configura o pino do LED como saída
  pinMode(pinoLED, OUTPUT);
  
  // Inicia a comunicação serial para debug
  Serial.begin(9600);
}

void loop() {
  // Lê o estado do botão
  estadoButton = digitalRead(pinoButton);
  
  // Imprime o estado no monitor serial
  Serial.print("Estado do botão: ");
  Serial.println(estadoButton);
  
  // Verifica se o botão está pressionado (lógica invertida com pull-up)
  if (estadoButton == LOW) {
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

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mt-6">
                  <h4 className="text-lg font-semibold mb-2">Nota sobre a Lógica</h4>
                  <p>
                    Observe a diferença na condição <code>if</code> entre os dois exemplos:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      <strong>Pull-up Externo:</strong> <code>if (estadoButton == HIGH)</code> - O botão lê HIGH quando
                      pressionado
                    </li>
                    <li>
                      <strong>Pull-up Interno:</strong> <code>if (estadoButton == LOW)</code> - O botão lê LOW quando
                      pressionado (lógica invertida)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Código Avançado: Detecção de Pressionamento com Debounce</h3>
                <p className="mb-4">
                  Agora vamos implementar um código que detecta apenas quando o botão é pressionado (não quando é
                  mantido pressionado) e inclui debounce para evitar leituras falsas.
                </p>

                <CodeBlock
                  code={`// Define os pinos
const int pinoButton = 2;  // Pino onde o botão está conectado
const int pinoLED = 13;    // Pino onde o LED está conectado

// Variáveis para controle do botão
int estadoButton = HIGH;         // Estado atual do botão (começa HIGH com pull-up)
int estadoAnteriorButton = HIGH; // Estado anterior do botão
bool estadoLED = false;          // Estado atual do LED

// Variáveis para debounce
unsigned long ultimoDebounceTime = 0;  // Último momento em que o botão mudou de estado
unsigned long debounceDelay = 50;      // Tempo de debounce em milissegundos

void setup() {
  // Configura o pino do botão como entrada com pull-up interno
  pinMode(pinoButton, INPUT_PULLUP);
  
  // Configura o pino do LED como saída
  pinMode(pinoLED, OUTPUT);
  
  // Inicia a comunicação serial para debug
  Serial.begin(9600);
}

void loop() {
  // Lê o estado atual do botão
  int leitura = digitalRead(pinoButton);
  
  // Verifica se o estado mudou
  if (leitura != estadoAnteriorButton) {
    // Reseta o timer de debounce
    ultimoDebounceTime = millis();
  }
  
  // Verifica se passou tempo suficiente desde a última mudança
  if ((millis() - ultimoDebounceTime) > debounceDelay) {
    // Se o estado estabilizou e é diferente do estado atual
    if (leitura != estadoButton) {
      estadoButton = leitura;
      
      // Verifica se o botão foi pressionado (LOW com pull-up)
      if (estadoButton == LOW) {
        // Inverte o estado do LED
        estadoLED = !estadoLED;
        digitalWrite(pinoLED, estadoLED);
        
        Serial.println("Botão pressionado - LED alterado");
      }
    }
  }
  
  // Salva o estado atual como anterior para a próxima iteração
  estadoAnteriorButton = leitura;
}`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Explicação do Código</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Variáveis de Estado:</strong> Mantemos o estado atual e anterior do botão, além do estado do
                    LED.
                  </li>
                  <li>
                    <strong>Variáveis de Debounce:</strong> <code>ultimoDebounceTime</code> registra quando o botão
                    mudou pela última vez, e <code>debounceDelay</code> define quanto tempo esperar para considerar a
                    mudança estável.
                  </li>
                  <li>
                    <strong>Detecção de Mudança:</strong> Comparamos a leitura atual com o estado anterior para detectar
                    mudanças.
                  </li>
                  <li>
                    <strong>Debounce por Timestamp:</strong> Usamos <code>millis()</code> para verificar se passou tempo
                    suficiente desde a última mudança, sem bloquear o programa.
                  </li>
                  <li>
                    <strong>Detecção de Pressionamento:</strong> Só alteramos o LED quando o botão é pressionado (não
                    quando é liberado), e invertemos seu estado a cada pressionamento.
                  </li>
                </ul>

                <div className="bg-green-900/20 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Vantagens deste Método</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Não usa <code>delay()</code>, então não bloqueia a execução do programa
                    </li>
                    <li>Detecta apenas o momento do pressionamento, não o estado contínuo</li>
                    <li>Elimina efetivamente o problema de debounce</li>
                    <li>Pode ser facilmente adaptado para outros tipos de interação com botões</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Código Avançado: Múltiplos Botões</h3>
                <p className="mb-4">
                  Este exemplo mostra como trabalhar com múltiplos botões, cada um controlando um LED diferente.
                </p>

                <CodeBlock
                  code={`// Define os pinos dos botões
const int numBotoes = 3;
const int pinoBotoes[numBotoes] = {2, 3, 4};  // Pinos onde os botões estão conectados

// Define os pinos dos LEDs
const int pinosLED[numBotoes] = {9, 10, 11};  // Pinos onde os LEDs estão conectados

// Variáveis para controle dos botões
int estadoBotoes[numBotoes] = {HIGH, HIGH, HIGH};         // Estados atuais dos botões
int estadosAnterioresBotoes[numBotoes] = {HIGH, HIGH, HIGH}; // Estados anteriores
bool estadosLED[numBotoes] = {false, false, false};       // Estados dos LEDs

// Variáveis para debounce
unsigned long ultimosDebounceTime[numBotoes] = {0, 0, 0};  // Últimos momentos de mudança
const unsigned long debounceDelay = 50;                    // Tempo de debounce

void setup() {
  // Configura os pinos dos botões como entradas com pull-up interno
  for (int i = 0; i < numBotoes; i++) {
    pinMode(pinoBotoes[i], INPUT_PULLUP);
    pinMode(pinosLED[i], OUTPUT);
  }
  
  Serial.begin(9600);
  Serial.println("Sistema com múltiplos botões iniciado");
}

void loop() {
  // Verifica cada botão
  for (int i = 0; i < numBotoes; i++) {
    // Lê o estado atual do botão
    int leitura = digitalRead(pinoBotoes[i]);
    
    // Verifica se o estado mudou
    if (leitura != estadosAnterioresBotoes[i]) {
      // Reseta o timer de debounce para este botão
      ultimosDebounceTime[i] = millis();
    }
    
    // Verifica se passou tempo suficiente desde a última mudança
    if ((millis() - ultimosDebounceTime[i]) > debounceDelay) {
      // Se o estado estabilizou e é diferente do estado atual
      if (leitura != estadoBotoes[i]) {
        estadoBotoes[i] = leitura;
        
        // Verifica se o botão foi pressionado (LOW com pull-up)
        if (estadoBotoes[i] == LOW) {
          // Inverte o estado do LED correspondente
          estadosLED[i] = !estadosLED[i];
          digitalWrite(pinosLED[i], estadosLED[i]);
          
          Serial.print("Botão ");
          Serial.print(i);
          Serial.println(" pressionado");
        }
      }
    }
    
    // Salva o estado atual como anterior para a próxima iteração
    estadosAnterioresBotoes[i] = leitura;
  }
}`}
                  language="cpp"
                />

                <h4 className="text-lg font-semibold mt-6 mb-2">Explicação do Código</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Arrays para Múltiplos Componentes:</strong> Usamos arrays para armazenar os pinos e estados
                    de múltiplos botões e LEDs.
                  </li>
                  <li>
                    <strong>Configuração em Loop:</strong> Configuramos todos os pinos em um único loop no
                    <code>setup()</code>.
                  </li>
                  <li>
                    <strong>Verificação Individual:</strong> No <code>loop()</code>, verificamos cada botão
                    individualmente, aplicando a mesma lógica de debounce.
                  </li>
                  <li>
                    <strong>Ação Independente:</strong> Cada botão controla apenas seu LED correspondente.
                  </li>
                </ul>

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mt-6">
                  <h4 className="text-lg font-semibold mb-2">Escalabilidade</h4>
                  <p>
                    Este código é facilmente escalável: para adicionar mais botões, basta aumentar o valor de
                    <code>numBotoes</code> e adicionar os pinos correspondentes nos arrays. A lógica funciona para
                    qualquer número de botões sem alterações adicionais.
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
                  Tente resolver estes desafios para aprimorar suas habilidades com botões e entradas digitais:
                </p>

                <div className="space-y-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2">Desafio 1: Contador de Pressionamentos</h4>
                    <p className="mb-4">
                      Crie um programa que conte quantas vezes um botão foi pressionado e exiba o resultado no Monitor
                      Serial. Adicione um segundo botão que, quando pressionado, reseta o contador para zero.
                    </p>
                    <Button variant="outline" size="sm">
                      Ver Dica
                    </Button>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2">Desafio 2: Controle de Brilho</h4>
                    <p className="mb-4">
                      Use dois botões para aumentar e diminuir o brilho de um LED conectado a um pino PWM. Um botão
                      aumenta o brilho em incrementos de 25, e o outro diminui em incrementos de 25 (em uma escala de 0
                      a 255).
                    </p>
                    <Button variant="outline" size="sm">
                      Ver Dica
                    </Button>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2">Desafio 3: Sequência de Memória</h4>
                    <p className="mb-4">
                      Crie um jogo simples de memória onde o Arduino acende LEDs em uma sequência aleatória, e o jogador
                      deve repetir a sequência pressionando botões correspondentes. A cada rodada bem-sucedida, a
                      sequência aumenta em um passo.
                    </p>
                    <Button variant="outline" size="sm">
                      Ver Dica
                    </Button>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2">Desafio 4: Detecção de Pressionamento Longo</h4>
                    <p className="mb-4">
                      Modifique o código para detectar pressionamentos longos (mais de 1 segundo) e curtos do botão,
                      executando ações diferentes para cada tipo de pressionamento.
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
                <h3 className="text-xl font-semibold mb-4">Projeto Prático: Controle de Semáforo</h3>
                <p className="mb-4">
                  Neste projeto, você criará um semáforo controlado por botão, simulando um cruzamento de pedestres.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Materiais Necessários</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>1 Arduino Uno</li>
                  <li>3 LEDs (vermelho, amarelo e verde) para o semáforo de carros</li>
                  <li>2 LEDs (vermelho e verde) para o semáforo de pedestres</li>
                  <li>5 resistores de 220Ω (um para cada LED)</li>
                  <li>1 botão push-button (para o pedestre solicitar travessia)</li>
                  <li>1 resistor de 10kΩ (para o botão)</li>
                  <li>Jumpers e protoboard</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-2">Funcionamento</h4>
                <p className="mb-4">
                  O semáforo normalmente fica verde para os carros e vermelho para os pedestres. Quando um pedestre
                  pressiona o botão, após um curto período, o semáforo muda para vermelho para os carros e verde para os
                  pedestres, permitindo a travessia. Depois de um tempo, o semáforo volta ao estado normal.
                </p>

                <h4 className="text-lg font-semibold mt-6 mb-2">Código Base</h4>
                <CodeBlock
                  code={`// Define os pinos dos LEDs do semáforo de carros
const int pinoVermelhoCarro = 10;
const int pinoAmareloCarro = 9;
const int pinoVerdeCarro = 8;

// Define os pinos dos LEDs do semáforo de pedestres
const int pinoVermelhoPedestre = 7;
const int pinoVerdePedestre = 6;

// Define o pino do botão
const int pinoBotao = 2;

// Variáveis para controle do botão
int estadoBotao = HIGH;         // Estado atual do botão (começa HIGH com pull-up)
int estadoAnteriorBotao = HIGH; // Estado anterior do botão
bool solicitacaoTravessia = false;  // Indica se há uma solicitação de travessia

// Variáveis para debounce
unsigned long ultimoDebounceTime = 0;
const unsigned long debounceDelay = 50;

// Tempos de cada fase do semáforo (em milissegundos)
const unsigned long tempoVerdeCarro = 5000;    // 5 segundos
const unsigned long tempoAmareloCarro = 2000;  // 2 segundos
const unsigned long tempoVermelhoCarro = 5000; // 5 segundos

void setup() {
  // Configura os pinos dos LEDs como saídas
  pinMode(pinoVermelhoCarro, OUTPUT);
  pinMode(pinoAmareloCarro, OUTPUT);
  pinMode(pinoVerdeCarro, OUTPUT);
  pinMode(pinoVermelhoPedestre, OUTPUT);
  pinMode(pinoVerdePedestre, OUTPUT);
  
  // Configura o pino do botão como entrada com pull-up
  pinMode(pinoBotao, INPUT_PULLUP);
  
  // Inicia com semáforo verde para carros e vermelho para pedestres
  digitalWrite(pinoVermelhoCarro, LOW);
  digitalWrite(pinoAmareloCarro, LOW);
  digitalWrite(pinoVerdeCarro, HIGH);
  digitalWrite(pinoVermelhoPedestre, HIGH);
  digitalWrite(pinoVerdePedestre, LOW);
  
  Serial.begin(9600);
  Serial.println("Sistema de semáforo iniciado");
}

void loop() {
  // Verifica o botão com debounce
  int leitura = digitalRead(pinoBotao);
  
  if (leitura != estadoAnteriorBotao) {
    ultimoDebounceTime = millis();
  }
  
  if ((millis() - ultimoDebounceTime) > debounceDelay) {
    if (leitura != estadoBotao) {
      estadoBotao = leitura;
      
      // Se o botão foi pressionado
      if (estadoBotao == LOW) {
        solicitacaoTravessia = true;
        Serial.println("Travessia solicitada!");
      }
    }
  }
  
  estadoAnteriorBotao = leitura;
  
  // Se houver solicitação de travessia e o semáforo estiver verde para carros
  if (solicitacaoTravessia && digitalRead(pinoVerdeCarro) == HIGH) {
    // Aguarda um pouco antes de mudar (simulando tempo de reação)
    delay(1000);
    
    // Muda para amarelo
    digitalWrite(pinoVerdeCarro, LOW);
    digitalWrite(pinoAmareloCarro, HIGH);
    Serial.println("Semáforo: Amarelo para carros");
    delay(tempoAmareloCarro);
    
    // Muda para vermelho para carros e verde para pedestres
    digitalWrite(pinoAmareloCarro, LOW);
    digitalWrite(pinoVermelhoCarro, HIGH);
    digitalWrite(pinoVermelhoPedestre, LOW);
    digitalWrite(pinoVerdePedestre, HIGH);
    Serial.println("Semáforo: Vermelho para carros, Verde para pedestres");
    delay(tempoVermelhoCarro);
    
    // Pisca o verde dos pedestres antes de fechar
    for (int i = 0; i < 5; i++) {
      digitalWrite(pinoVerdePedestre, LOW);
      delay(250);
      digitalWrite(pinoVerdePedestre, HIGH);
      delay(250);
    }
    
    // Volta para vermelho para pedestres e verde para carros
    digitalWrite(pinoVermelhoCarro, LOW);
    digitalWrite(pinoVerdeCarro, HIGH);
    digitalWrite(pinoVerdePedestre, LOW);
    digitalWrite(pinoVermelhoPedestre, HIGH);
    Serial.println("Semáforo: Verde para carros, Vermelho para pedestres");
    
    // Reseta a solicitação
    solicitacaoTravessia = false;
  }
}`}
                  language="cpp"
                />

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg mt-6">
                  <h4 className="text-lg font-semibold mb-2">Extensões do Projeto</h4>
                  <p className="mb-4">Depois de implementar o projeto básico, tente estas extensões:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Adicione um buzzer que emite um som quando o semáforo está verde para pedestres (simulando o aviso
                      sonoro para deficientes visuais)
                    </li>
                    <li>
                      Implemente um display de 7 segmentos ou LCD para mostrar uma contagem regressiva do tempo restante
                      para cada fase
                    </li>
                    <li>
                      Adicione um sensor de luz (LDR) para ajustar automaticamente o brilho dos LEDs conforme a
                      luminosidade ambiente
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center mt-12 pt-6 border-t">
          <Button variant="outline" asChild>
            <Link href="/programacao/arduino/leds">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Lição Anterior: Controlando LEDs
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/programacao/arduino/analogicos">
              Próxima Lição: Sensores Analógicos
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
