import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Code, BookOpen } from "lucide-react"
import Link from "next/link"

export default function SensorUltrassonicoPage() {
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
              <BreadcrumbLink>Sensor Ultrassônico</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-6">Sensor Ultrassônico HC-SR04</h1>

        <div className="bg-primary/10 rounded-lg p-6 mb-8 border border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Dando "visão" ao seu robô</h2>
              <p className="text-muted-foreground mb-4">
                O sensor ultrassônico HC-SR04 permite que seu robô "enxergue" o ambiente ao seu redor, medindo
                distâncias e detectando obstáculos. Com ele, você pode criar comportamentos autônomos como desvio de
                obstáculos.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>Tempo estimado: 60 minutos</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-muted rounded-lg overflow-hidden">
              {/* Changed from img to div with background to avoid loading external resources */}
              <div
                className="w-full h-[200px] bg-muted flex items-center justify-center text-muted-foreground"
                aria-label="Sensor HC-SR04"
              >
                Sensor HC-SR04
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="funcionamento" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="funcionamento">Funcionamento</TabsTrigger>
            <TabsTrigger value="conexao">Conexão</TabsTrigger>
            <TabsTrigger value="codigo">Código</TabsTrigger>
            <TabsTrigger value="aplicacoes">Aplicações</TabsTrigger>
          </TabsList>

          <TabsContent value="funcionamento" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Princípio de Funcionamento</h3>
                <p className="mb-4">
                  O sensor HC-SR04 funciona de maneira similar a um sonar. Ele possui dois componentes principais:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Transmissor (Trigger):</strong> Emite um pulso sonoro de alta frequência (ultrassom),
                    inaudível para humanos.
                  </li>
                  <li>
                    <strong>Receptor (Echo):</strong> Detecta o eco desse pulso sonoro quando ele ricocheteia em um
                    objeto e retorna ao sensor.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2">Como ele mede a distância?</h4>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>
                    O Arduino envia um breve pulso para o pino <strong>Trig</strong> do sensor
                  </li>
                  <li>O sensor emite uma rajada de 8 pulsos ultrassônicos</li>
                  <li>
                    O pino <strong>Echo</strong> fica em HIGH até o som retornar
                  </li>
                  <li>O Arduino mede o tempo que Echo ficou em HIGH</li>
                  <li>
                    Calcula a distância usando:{" "}
                    <code className="bg-muted p-1 rounded">Distância = (Tempo × Velocidade do Som) ÷ 2</code>
                  </li>
                </ol>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Especificações Técnicas</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Tensão de operação:</strong> 5V DC
                    </li>
                    <li>
                      <strong>Corrente de operação:</strong> 15mA
                    </li>
                    <li>
                      <strong>Frequência de operação:</strong> 40kHz
                    </li>
                    <li>
                      <strong>Alcance máximo:</strong> 4m
                    </li>
                    <li>
                      <strong>Alcance mínimo:</strong> 2cm
                    </li>
                    <li>
                      <strong>Ângulo de medição:</strong> 15 graus
                    </li>
                    <li>
                      <strong>Precisão:</strong> 3mm
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conexao" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Conexão do Sensor ao Arduino</h3>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Pinos do HC-SR04</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>VCC:</strong> Alimentação positiva (5V)
                    </li>
                    <li>
                      <strong>Trig:</strong> Pino de disparo (Trigger)
                    </li>
                    <li>
                      <strong>Echo:</strong> Pino de eco (Echo)
                    </li>
                    <li>
                      <strong>GND:</strong> Terra (Ground)
                    </li>
                  </ul>
                </div>

                <h4 className="text-lg font-semibold mb-2">Diagrama de Conexão</h4>
                <div className="bg-black text-white p-4 rounded-lg font-mono text-sm mb-6">
                  <pre>
                    {`Arduino          HC-SR04
--------------------------
5V       ------> VCC
GND      ------> GND
Pino 12  ------> Trig
Pino 11  ------> Echo`}
                  </pre>
                </div>

                <div className="bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded-r-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Atenção</h4>
                  <p>
                    O pino Echo do HC-SR04 opera em 5V. Se estiver usando um microcontrolador que opera em 3.3V (como
                    ESP8266 ou ESP32), você precisará usar um divisor de tensão para proteger o pino de entrada.
                  </p>
                </div>

                <h4 className="text-lg font-semibold mb-2">Posicionamento no Robô</h4>
                <p className="mb-4">Para melhor detecção de obstáculos, o sensor deve ser montado:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Na parte frontal do robô</li>
                  <li>Paralelo ao solo</li>
                  <li>Com altura suficiente para detectar obstáculos relevantes</li>
                  <li>Sem obstruções em seu campo de visão</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="codigo" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Programação do Sensor</h3>

                <h4 className="text-lg font-semibold mb-2">Código Básico para Leitura</h4>
                <div className="bg-black text-white p-4 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
                  <pre>
                    {`// Definição dos pinos do Sensor Ultrassônico
const int pinoTrig = 12; // Pino Trigger
const int pinoEcho = 11; // Pino Echo

// Variáveis para armazenar a duração do pulso e a distância
long duracaoPulso;
float distanciaCm;

void setup() {
  Serial.begin(9600);
  pinMode(pinoTrig, OUTPUT);
  pinMode(pinoEcho, INPUT);
  Serial.println("Sensor HC-SR04 - Teste de Distancia");
}

void loop() {
  // PASSO 1: Gerar um pulso limpo no pino Trigger
  digitalWrite(pinoTrig, LOW);
  delayMicroseconds(2);
  
  // PASSO 2: Enviar o pulso de disparo
  digitalWrite(pinoTrig, HIGH);
  delayMicroseconds(10);
  digitalWrite(pinoTrig, LOW);
  
  // PASSO 3: Ler a duração do pulso de retorno
  duracaoPulso = pulseIn(pinoEcho, HIGH);
  
  // PASSO 4: Calcular a distância em centímetros
  distanciaCm = (duracaoPulso * 0.0343) / 2;
  
  // Exibir a distância no Monitor Serial
  Serial.print("Distancia: ");
  Serial.print(distanciaCm);
  Serial.println(" cm");
  
  delay(500); // Espera meio segundo
}`}
                  </pre>
                </div>

                <h4 className="text-lg font-semibold mb-2">Explicação do Código</h4>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>
                    <strong>Definição dos pinos:</strong> Configuramos os pinos 12 e 11 para Trigger e Echo,
                    respectivamente.
                  </li>
                  <li>
                    <strong>Setup:</strong> Inicializamos a comunicação serial e configuramos o pino Trigger como saída
                    e o Echo como entrada.
                  </li>
                  <li>
                    <strong>Loop:</strong> Realizamos a sequência de medição:
                    <ol className="list-decimal pl-5 mt-2">
                      <li>Limpamos o pino Trigger (LOW)</li>
                      <li>Enviamos um pulso de 10µs no Trigger</li>
                      <li>Medimos o tempo que o Echo fica em HIGH</li>
                      <li>Calculamos a distância usando a velocidade do som (343m/s ou 0.0343cm/µs)</li>
                      <li>Dividimos por 2 porque o som vai até o objeto e volta</li>
                    </ol>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2">Função Reutilizável para Medir Distância</h4>
                <div className="bg-black text-white p-4 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
                  <pre>
                    {`float medirDistancia() {
  // Limpa o pino Trigger
  digitalWrite(pinoTrig, LOW);
  delayMicroseconds(2);
  
  // Envia pulso de 10µs
  digitalWrite(pinoTrig, HIGH);
  delayMicroseconds(10);
  digitalWrite(pinoTrig, LOW);
  
  // Lê a duração do pulso Echo
  long duracao = pulseIn(pinoEcho, HIGH);
  
  // Calcula e retorna a distância
  return (duracao * 0.0343) / 2;
}`}
                  </pre>
                </div>

                <div className="bg-green-900/20 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Dica</h4>
                  <p>
                    Para leituras mais estáveis, considere fazer a média de múltiplas medições. Isso ajuda a reduzir
                    erros de leitura causados por interferências ou reflexões irregulares.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aplicacoes" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Aplicações Práticas</h3>

                <h4 className="text-lg font-semibold mb-2">1. Desvio de Obstáculos</h4>
                <p className="mb-4">
                  A aplicação mais comum do sensor ultrassônico em robótica é a detecção e desvio de obstáculos. Veja um
                  exemplo simplificado:
                </p>
                <div className="bg-black text-white p-4 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
                  <pre>
                    {`// Distância mínima segura (em cm)
const float DISTANCIA_MINIMA = 20.0;

void loop() {
  float distancia = medirDistancia();
  
  if (distancia < DISTANCIA_MINIMA && distancia > 0) {
    // Obstáculo detectado!
    pararRobo();
    delay(300);
    
    // Recuar um pouco
    moverTras(150);
    delay(700);
    pararRobo();
    delay(300);
    
    // Virar para a direita
    virarDireita(180);
    delay(600);
    pararRobo();
    delay(300);
  } else {
    // Caminho livre, seguir em frente
    moverFrente(180);
  }
  
  delay(100); // Pequena pausa
}`}
                  </pre>
                </div>

                <h4 className="text-lg font-semibold mb-2">2. Mapeamento de Ambiente</h4>
                <p className="mb-4">
                  Combinando o sensor ultrassônico com movimentos de rotação, é possível criar um mapa simples do
                  ambiente ao redor do robô.
                </p>

                <h4 className="text-lg font-semibold mb-2">3. Seguidor de Parede</h4>
                <p className="mb-4">
                  O robô pode ser programado para manter uma distância constante de uma parede, permitindo que ele
                  navegue ao longo de corredores ou contorne objetos.
                </p>

                <h4 className="text-lg font-semibold mb-2">4. Medidor de Nível</h4>
                <p className="mb-4">
                  O sensor pode ser usado para medir o nível de líquidos ou materiais em um recipiente, apontando-o para
                  a superfície.
                </p>

                <h4 className="text-lg font-semibold mb-2">5. Sistema de Estacionamento</h4>
                <p className="mb-4">
                  Similar aos sensores de ré em automóveis, o HC-SR04 pode alertar quando o robô está se aproximando de
                  um obstáculo durante manobras.
                </p>

                <div className="bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold mb-2">Limitações</h4>
                  <p className="mb-4">É importante entender as limitações do sensor HC-SR04:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Não detecta bem objetos que absorvem som (tecidos, espuma)</li>
                    <li>Pode ter leituras imprecisas com superfícies em ângulo</li>
                    <li>Alcance limitado (2cm-400cm)</li>
                    <li>Ângulo de detecção estreito (aproximadamente 15°)</li>
                    <li>Interferência potencial entre múltiplos sensores ultrassônicos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
