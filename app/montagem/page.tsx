import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Cpu, AlertTriangle, CheckCircle, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MontagemPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center hover:text-primary transition-colors">
                  <Home className="h-4 w-4 mr-2" />
                  Início
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/montagem" className="flex items-center hover:text-primary transition-colors">
                  <Cpu className="h-4 w-4 mr-2" />
                  Montagem
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Montagem do Robô</h1>
          <p className="text-muted-foreground max-w-3xl">
            Guia completo para montar seu robô autônomo, desde a estrutura mecânica até as conexões eletrônicas.
          </p>
        </header>

        <div className="bg-primary/10 rounded-lg p-6 mb-8 border border-primary/20">
          <h2 className="text-2xl font-semibold mb-4">Guia de Montagem Passo a Passo</h2>
          <p className="text-muted-foreground mb-4">
            Siga cuidadosamente cada etapa para garantir o funcionamento correto do seu robô. Recomendamos ler todas as
            instruções antes de começar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center text-yellow-500">
              <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="font-medium">Importante: Desligue a alimentação durante as conexões.</span>
            </div>
            <div className="flex items-center text-green-500">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="font-medium">Tempo estimado: 2-3 horas</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="componentes" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger value="componentes" className="py-2">
              Componentes
            </TabsTrigger>
            <TabsTrigger value="chassi" className="py-2">
              Chassi
            </TabsTrigger>
            <TabsTrigger value="motores" className="py-2">
              Motores
            </TabsTrigger>
            <TabsTrigger value="eletronica" className="py-2">
              Eletrônica
            </TabsTrigger>
          </TabsList>

          <TabsContent value="componentes" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Componentes</CardTitle>
                <CardDescription>Verifique se você tem todos os itens necessários antes de começar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-blue-500" />
                      Componentes Estruturais
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>1 × Chassi de acrílico ou MDF (base do robô)</li>
                      <li>2 × Motores DC com redução (6V, 100-200 RPM)</li>
                      <li>2 × Rodas para os motores (diâmetro 65mm recomendado)</li>
                      <li>1 × Roda universal (rodízio) ou esfera</li>
                      <li>Conjunto de parafusos M3, porcas e espaçadores</li>
                      <li>Abraçadeiras de nylon (zip ties) - mínimo 10 unidades</li>
                      <li>Suportes para fixação dos motores</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-blue-500" />
                      Componentes Eletrônicos
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>1 × Arduino Uno R3 ou equivalente</li>
                      <li>1 × Driver de motor L298N ou L293D</li>
                      <li>1 × Sensor ultrassônico HC-SR04</li>
                      <li>1 × Módulo Bluetooth HC-05 (opcional para controle remoto)</li>
                      <li>1 × Suporte para 4 pilhas AA ou bateria LiPo 7.4V</li>
                      <li>Jumpers (macho-macho, macho-fêmea, fêmea-fêmea)</li>
                      <li>1 × Mini protoboard (400 pontos recomendado)</li>
                      <li>1 × Chave liga/desliga</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-blue-500" />
                      Ferramentas Necessárias
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Chave de fenda Phillips #0 e #1</li>
                      <li>Alicate de corte e alicate de bico</li>
                      <li>Fita dupla-face e fita isolante</li>
                      <li>Multímetro digital (para verificação de tensão)</li>
                      <li>Ferro de solda 30-40W e solda estanho/chumbo</li>
                      <li>Estilete ou cortador para acabamento</li>
                      <li>Régua ou paquímetro para medições</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-4 rounded-r-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                      Observações Técnicas
                    </h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Motores: Verifique a tensão nominal (3-6V) e corrente (100-300mA)</li>
                      <li>Bateria: 6V (4 pilhas AA) ou 7.4V (LiPo) com capacidade mínima de 2000mAh</li>
                      <li>Use jumpers de 22AWG para conexões de potência</li>
                      <li>Para projetos permanentes, considere soldar as conexões</li>
                      <li>Mantenha os fios organizados para facilitar manutenção</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chassi" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Montagem do Chassi</CardTitle>
                <CardDescription>Preparando a estrutura base do robô</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-2">Visão Geral</h3>
                    <p>
                      O chassi é o esqueleto do robô. A montagem correta garante estabilidade e facilita a instalação dos
                      demais componentes. Siga esta sequência para evitar retrabalho.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Passo a Passo</h3>

                    <div className="space-y-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 1: Identificação das Peças</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-3">
                              Separe as peças principais:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Base inferior (onde ficarão os motores)</li>
                              <li>Base superior (para eletrônica)</li>
                              <li>Suportes verticais (4 unidades)</li>
                              <li>Plataforma para sensores (opcional)</li>
                            </ul>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded flex items-center justify-center text-muted-foreground italic">
                                [Imagem: Peças do chassi separadas]
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Figura 1: Componentes do chassi</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 2: Montagem da Estrutura</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-3">
                              Sequência recomendada:
                            </p>
                            <ol className="list-decimal pl-5 space-y-1">
                              <li>Conecte os suportes verticais à base inferior</li>
                              <li>Use espaçadores para manter distância uniforme</li>
                              <li>Verifique o alinhamento com um esquadro</li>
                              <li>Aperte os parafusos firmemente, sem exagerar</li>
                            </ol>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded flex items-center justify-center text-muted-foreground italic">
                                [Imagem: Montagem da estrutura]
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Figura 2: Estrutura montada</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 3: Instalação do Rodízio</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-3">
                              A roda universal deve ser instalada no centro da parte frontal ou traseira:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Posicione o suporte do rodízio</li>
                              <li>Use pelo menos 2 parafusos para fixação</li>
                              <li>Verifique a altura em relação às rodas motorizadas</li>
                              <li>Teste o movimento livre da roda</li>
                            </ul>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded flex items-center justify-center text-muted-foreground italic">
                                [Imagem: Rodízio instalado]
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Figura 3: Roda universal montada</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-4 rounded-r-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Dicas de Montagem
                    </h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Para chassis de acrílico, faça furos pilotos antes de parafusar</li>
                      <li>Use arruelas para distribuir a pressão nos parafusos</li>
                      <li>Deixe espaço para passagem de fios entre as camadas</li>
                      <li>Mantenha o centro de gravidade baixo para maior estabilidade</li>
                      <li>Considere adicionar furos extras para futuras expansões</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="motores" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Instalação dos Motores</CardTitle>
                <CardDescription>Montando o sistema de propulsão do robô</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-2">Visão Geral</h3>
                    <p>
                      O sistema de propulsão é crítico para o movimento do robô. Uma instalação adequada garante
                      desempenho uniforme e evita desalinhamentos que podem prejudicar a navegação.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Passo a Passo</h3>

                    <div className="space-y-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 1: Preparação dos Motores</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-3">
                              Antes de instalar:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Verifique a rotação livre dos eixos</li>
                              <li>Identifique os terminais positivo e negativo</li>
                              <li>Se necessário, solde fios de 15-20cm nos terminais</li>
                              <li>Proteja as soldas com termorretrátil ou fita isolante</li>
                            </ul>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded flex items-center justify-center text-muted-foreground italic">
                                [Imagem: Motores preparados]
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Figura 4: Motores com fios soldados</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 2: Posicionamento no Chassi</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-3">
                              Orientações de instalação:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Posicione os motores simetricamente</li>
                              <li>Deixe espaço para as rodas não tocarem no chassi</li>
                              <li>O eixo deve ficar paralelo à borda do chassi</li>
                              <li>Use suportes metálicos para maior rigidez</li>
                            </ul>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded flex items-center justify-center text-muted-foreground italic">
                                [Imagem: Posicionamento dos motores]
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Figura 5: Motores alinhados</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 3: Fixação e Instalação das Rodas</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-3">
                              Procedimento:
                            </p>
                            <ol className="list-decimal pl-5 space-y-1">
                              <li>Fixe os motores com pelo menos 2 parafusos cada</li>
                              <li>Verifique o alinhamento com uma régua</li>
                              <li>Encaixe as rodas nos eixos</li>
                              <li>Aperte o parafuso de fixação da roda (se houver)</li>
                              <li>Teste o movimento manual das rodas</li>
                            </ol>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded flex items-center justify-center text-muted-foreground italic">
                                [Imagem: Rodas instaladas]
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Figura 6: Rodas fixadas</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-4 rounded-r-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                      Cuidados Importantes
                    </h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Marque os fios (M1+, M1-, M2+, M2-) para identificar os motores</li>
                      <li>Use abraçadeiras para organizar os fios ao longo do chassi</li>
                      <li>Verifique se as rodas giram livremente sem folgas excessivas</li>
                      <li>Motores com redução podem ter folga no eixo - isso é normal</li>
                      <li>Considere adicionar borracha ou espuma para reduzir vibrações</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eletronica" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Conexões Eletrônicas</CardTitle>
                <CardDescription>Instalando e conectando os componentes eletrônicos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-2">Visão Geral</h3>
                    <p>
                      Esta é a etapa mais delicada. Conexões incorretas podem danificar componentes. Siga atentamente o
                      diagrama e verifique cada conexão antes de energizar o circuito.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Passo a Passo</h3>

                    <div className="space-y-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 1: Instalação do Arduino</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-3">
                              Posicionamento ideal:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Centralizado no chassi superior</li>
                              <li>Com acesso fácil à porta USB</li>
                              <li>Use espaçadores de nylon para evitar curtos</li>
                              <li>Deixe espaço para conexão dos jumpers</li>
                            </ul>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded flex items-center justify-center text-muted-foreground italic">
                                [Imagem: Arduino instalado]
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Figura 7: Arduino fixado</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 2: Configuração do Driver L298N</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-3">
                              Preparação do módulo:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Conecte os jumpers de habilitação (ENA e ENB)</li>
                              <li>Verifique a posição da chave de tensão (5V/VS)</li>
                              <li>Instale dissipadores de calor se necessário</li>
                              <li>Posicione próximo aos motores para reduzir fiação</li>
                            </ul>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded flex items-center justify-center text-muted-foreground italic">
                                [Imagem: Driver L298N configurado]
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Figura 8: Driver preparado</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 3: Conexão do Sistema de Alimentação</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-3">
                              Diagrama de energia:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Conecte o positivo da bateria ao terminal 12V do L298N</li>
                              <li>Ligue o negativo da bateria ao GND do L298N</li>
                              <li>Conecte o 5V do L298N ao Vin do Arduino (se usar fonte única)</li>
                              <li>Instale a chave liga/desliga no positivo da bateria</li>
                            </ul>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded flex items-center justify-center text-muted-foreground italic">
                                [Imagem: Diagrama de alimentação]
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Figura 9: Conexões de energia</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Passo 4: Diagrama Completo de Conexões</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <thead>
                              <tr className="bg-gray-100 dark:bg-gray-700">
                                <th className="py-2 px-4 border-b text-left">Arduino</th>
                                <th className="py-2 px-4 border-b text-left">L298N</th>
                                <th className="py-2 px-4 border-b text-left">HC-SR04</th>
                                <th className="py-2 px-4 border-b text-left">Motores</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2 px-4 border-b">5V</td>
                                <td className="py-2 px-4 border-b">+5V</td>
                                <td className="py-2 px-4 border-b">VCC</td>
                                <td className="py-2 px-4 border-b">-</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">GND</td>
                                <td className="py-2 px-4 border-b">GND</td>
                                <td className="py-2 px-4 border-b">GND</td>
                                <td className="py-2 px-4 border-b">-</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">D5 (PWM)</td>
                                <td className="py-2 px-4 border-b">ENA</td>
                                <td className="py-2 px-4 border-b">-</td>
                                <td className="py-2 px-4 border-b">-</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">D6 (PWM)</td>
                                <td className="py-2 px-4 border-b">ENB</td>
                                <td className="py-2 px-4 border-b">-</td>
                                <td className="py-2 px-4 border-b">-</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">D7</td>
                                <td className="py-2 px-4 border-b">IN1</td>
                                <td className="py-2 px-4 border-b">-</td>
                                <td className="py-2 px-4 border-b">Motor A (+)</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">D8</td>
                                <td className="py-2 px-4 border-b">IN2</td>
                                <td className="py-2 px-4 border-b">-</td>
                                <td className="py-2 px-4 border-b">Motor A (-)</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">D9</td>
                                <td className="py-2 px-4 border-b">IN3</td>
                                <td className="py-2 px-4 border-b">-</td>
                                <td className="py-2 px-4 border-b">Motor B (+)</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">D10</td>
                                <td className="py-2 px-4 border-b">IN4</td>
                                <td className="py-2 px-4 border-b">-</td>
                                <td className="py-2 px-4 border-b">Motor B (-)</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">D11</td>
                                <td className="py-2 px-4 border-b">-</td>
                                <td className="py-2 px-4 border-b">Echo</td>
                                <td className="py-2 px-4 border-b">-</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">D12</td>
                                <td className="py-2 px-4 border-b">-</td>
                                <td className="py-2 px-4 border-b">Trig</td>
                                <td className="py-2 px-4 border-b">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <div className="text-center p-4 w-full">
                            <div className="bg-gray-200 dark:bg-gray-700 h-64 w-full rounded flex items-center justify-center text-muted-foreground italic">
                              [Imagem: Diagrama completo de conexões]
                            </div>
                            <p className="text-sm mt-2 text-muted-foreground">Figura 10: Esquema elétrico completo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-600 p-4 rounded-r-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                      Precauções de Segurança
                    </h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Nunca faça conexões com o circuito energizado</li>
                      <li>Verifique a polaridade da bateria com multímetro</li>
                      <li>Use fusível ou proteção contra curto na alimentação</li>
                      <li>Evite deixar fios soltos que possam encostar em outros componentes</li>
                      <li>Desligue imediatamente se notar aquecimento excessivo</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-4 rounded-r-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Procedimento de Teste
                    </h4>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Verifique visualmente todas as conexões</li>
                      <li>Confira a tensão da bateria (deve ser ≥6V)</li>
                      <li>Ligue a chave de alimentação</li>
                      <li>Verifique o LED de power no L298N</li>
                      <li>Conecte o Arduino ao computador</li>
                      <li>Carregue um sketch de teste simples</li>
                      <li>Teste cada motor individualmente</li>
                      <li>Verifique a resposta do sensor ultrassônico</li>
                    </ol>
                    <p className="mt-3 text-sm italic">
                      Dica: Comece com velocidade baixa nos motores (PWM 100-150) para testes iniciais.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-8 border border-blue-200 dark:border-blue-900/30">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Info className="h-6 w-6 mr-2 text-blue-500" />
            Próximos Passos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Programação Básica</h3>
              <p className="text-muted-foreground">
                Após a montagem, você pode programar seu robô para seguir linhas, evitar obstáculos ou ser controlado
                remotamente.
              </p>
              <Link
                href="/programacao"
                className="inline-flex items-center mt-3 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Acessar guia de programação →
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Solução de Problemas</h3>
              <p className="text-muted-foreground">
                Encontrou problemas na montagem? Consulte nosso guia de troubleshooting para resolver questões comuns.
              </p>
              <Link
                href="/suporte"
                className="inline-flex items-center mt-3 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ver soluções para problemas →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
