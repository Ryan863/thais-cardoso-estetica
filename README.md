# Thaís Cardoso | Estética Facial Personalizada
> Landing Page Editorial de Alta Conversão desenvolvida com React, TypeScript, Tailwind CSS, GSAP e Lenis.

## 🌟 Visão Geral do Projeto
A landing page foi desenvolvida sob o conceito visual **editorial de luxo e beleza limpa**, combinando:
1. **Primeira Dobra (Hero Section)**: Inspirada na estética de alta joalheria/beleza editorial (Imagem 2), adaptada para uma paleta quente em tons de **bege, areia, champanhe e café**, com **menu transparente com desfoque**, fotografia de pele com glow radiante e gradientes suaves, além de divisores finos para os 3 pilares de atendimento.
2. **Corpo Editorial (Procedimentos, Experiência, Resultados e Equipe)**: Inspirado no layout da Imagem 1, com numerações editoriais (`01`, `02`, `03`), cartões brancos com bordas bege acetinadas, tipografia combinando sans-serif contemporânea e serifa itálica refinada (*Cormorant Garamond*), e botões contextuais de alta conversão.
3. **Parallax Editorial**: Integração do componente `ParallaxComponent` (`src/components/ui/parallax-scrolling.tsx`) com GSAP ScrollTrigger e Lenis Smooth Scroll.

---

## 📍 Informações do Negócio Integradas
- **Profissional**: Thaís Cardoso (Thais Machado) · Terapeuta em Cuidados com a Pele & Estética Facial Personalizada
- **Posicionamento**: "Resultados reais + cuidado exclusivo"
- **Especialidades**:
  - Melasma e controle de manchas
  - Tratamento avançado de Acne
  - Rejuvenescimento Facial e Saúde da Pele
  - Limpeza de Pele Profunda e Protocolos Personalizados
  - Terapia Capilar
- **WhatsApp Oficial**: `+55 (41) 9215-6721` (links diretos `wa.me` com mensagens personalizadas para cada serviço)
- **Instagram**: `@thais_cardosoestetica`
- **Unidade Curitiba**: `Rua Emiliano Perneta, 325 - Centro, Curitiba - PR, 80010-050` (com rota direta no Google Maps)
- **Unidade Piraquara**: Região de Piraquara (com indicação para consultar endereço no agendamento)
- **Regime**: Segunda a Sábado exclusivamente com hora marcada.

---

## 🛠️ Tecnologias Utilizadas
- **React 19** + **TypeScript**
- **Vite 6** (Bundle ultrarrápido)
- **Tailwind CSS v4** (Design System com paleta personalizada bege e areia)
- **GSAP 3** + **ScrollTrigger** (Animações de camadas e timeline)
- **Lenis Smooth Scroll** (Rolagem inercial cinematográfica)
- **Lucide React** + Ícones SVG customizados

---

## 📁 Estrutura de Pastas (Padrão shadcn / Clean Architecture)
```
thais-cardoso-estetica/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── parallax-scrolling.tsx   # Componente Parallax integrado
│   │   ├── icons/
│   │   │   └── InstagramIcon.tsx        # Ícone oficial do Instagram
│   │   ├── Navbar.tsx                   # Menu transparente com blur e monograma TC
│   │   ├── HeroSection.tsx              # Hero 100vh editorial em bege/areia
│   │   ├── SpecialtiesSection.tsx       # Grid de procedimentos (01 a 05)
│   │   ├── ClinicExperienceSection.tsx  # Layout split com arquitetura e diferenciais
│   │   ├── ResultsGallerySection.tsx    # Galeria de transformações e Instagram
│   │   ├── AboutSpecialistSection.tsx   # Apresentação de Thaís Cardoso
│   │   ├── LocationsSection.tsx         # Unidades Curitiba & Piraquara + GPS
│   │   ├── FaqSection.tsx               # Perguntas frequentes interativas
│   │   ├── FloatingWhatsAppCTA.tsx      # Botão WhatsApp flutuante com indicador pulsante
│   │   └── Footer.tsx                   # Rodapé editorial com horários e contatos
│   ├── data/
│   │   └── content.ts                   # Centralizador de textos, links, fotos e dados
│   ├── demos/
│   │   └── default.tsx                  # Demonstração padrão do ParallaxComponent
│   ├── lib/
│   │   └── utils.ts                     # Utilitário `cn` (clsx + tailwind-merge)
│   ├── App.tsx                          # Montagem da página completa
│   ├── index.css                        # Tokens de cores bege, fontes e Tailwind
│   └── main.tsx                         # Entrada React
```

---

## 🖼️ Como Substituir as Imagens Pelas Fotos Locais
Todas as imagens da página estão centralizadas de forma modular no arquivo [`src/data/content.ts`](file:///C:/Users/nru62/.gemini/antigravity-ide/scratch/thais-cardoso-estetica/src/data/content.ts).

Para usar as fotos reais da cliente:
1. Coloque seus arquivos de imagem na pasta `src/assets/` (ex: `src/assets/foto-thais.jpg`, `src/assets/antes-depois-1.jpg`).
2. No topo de `src/data/content.ts`, faça o import:
   ```ts
   import fotoThais from '@/assets/foto-thais.jpg';
   import melasmaImg from '@/assets/melasma.jpg';
   ```
3. Substitua as URLs correspondentes em `PROCEDURES`, `GALLERY_ITEMS` ou `HeroSection.tsx`.

---

## 🚀 Como Executar Localmente
```bash
# 1. Entrar na pasta do projeto
cd thais-cardoso-estetica

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Gerar a versão de produção
npm run build
```
O servidor estará rodando em: `http://localhost:5173/`
