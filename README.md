---

````markdown
# Robotics Educational App

Uma aplicação educacional interativa para ensinar conceitos de robótica e programação, com foco especial em Arduino. Criado com Next.js, React e Tailwind CSS, o projeto visa facilitar o aprendizado prático por meio de conteúdo teórico, tutoriais e projetos aplicados.

Acesse a aplicação online: (https://educacional-robotica.vercel.app)

## Funcionalidades

- Seção **Teoria** com explicações sobre conceitos fundamentais de robótica
- Seção **Programação** com tutoriais práticos:
  - Introdução à lógica
  - Programação com Arduino
  - Manipulação de LEDs, botões e sensores
- Seção **Projetos** com ideias práticas para fixação do conteúdo
- Suporte a tema claro e escuro
- Interface moderna com componentes reutilizáveis

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)

## Instalação e Execução

Pré-requisitos: [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada)

```bash
# Instale as dependências com pnpm
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
````

Abra `http://localhost:3000` no navegador para visualizar a aplicação.

> Observação: Também é possível utilizar `npm` ou `yarn`, mas este projeto está configurado com `pnpm`.

## Estrutura do Projeto

```
app/
├── layout.tsx               # Layout principal
├── globals.css              # Estilos globais
├── page.tsx                 # Página inicial
├── teoria/                  # Conteúdo teórico
├── programacao/             # Tutoriais de programação
│   ├── arduino/
│   │   ├── leds/
│   │   ├── botoes/
│   │   └── sensor-ultrassonico/
├── projetos/                # Projetos práticos
```
