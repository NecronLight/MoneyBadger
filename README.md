Plataforma completa para aprender sobre investimentos, simular rendimentos e acompanhar notícias do mercado financeiro.

## 🚀 Recursos

- **Tipos de Investimentos**: Explicações detalhadas sobre diferentes modalidades de investimento
  - Renda Fixa (Tesouro Direto, CDB, LCI/LCA)
  - Ações
  - Fundos Imobiliários (FIIs)
  - Fundos de Investimento
  - Criptomoedas
  - Previdência Privada

- **Simulador de Investimentos**: Calcule seus rendimentos e imposto de renda
  - Cálculo de juros compostos
  - Tabela regressiva de IR para renda fixa
  - Diferentes regras de tributação por tipo de investimento
  - Visualização clara de rendimento bruto vs. líquido

- **Notícias**: Acompanhe as últimas novidades do mercado financeiro
  - Economia
  - Bolsa de Valores
  - Fundos Imobiliários
  - Criptomoedas

## 🛠️ Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização responsiva
- **React 19** - Biblioteca para interfaces

## 📱 Design Responsivo

O site foi desenvolvido com design mobile-first, garantindo uma excelente experiência em:
- Smartphones
- Tablets
- Desktops

A arquitetura facilita a futura conversão para aplicativo móvel usando React Native ou PWA.

## 🏃‍♂️ Como Executar

1. **Instalar dependências**:
```bash
npm install
```

2. **Executar em modo de desenvolvimento**:
```bash
npm run dev
```

3. **Acessar o site**:
Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📂 Estrutura do Projeto

```
moneybadger/
├── src/
│   └── app/
│       ├── investimentos/    # Página de tipos de investimentos
│       ├── simulador/        # Simulador de investimentos
│       ├── noticias/         # Página de notícias
│       ├── layout.tsx        # Layout principal
│       ├── page.tsx          # Página inicial
│       └── globals.css       # Estilos globais
├── public/                   # Arquivos estáticos
├── .github/                  # Configurações do GitHub
├── next.config.ts            # Configuração do Next.js
├── tailwind.config.ts        # Configuração do Tailwind
└── tsconfig.json            # Configuração do TypeScript
```

## 🎯 Próximos Passos

Para expandir a plataforma, considere:

1. **Integração com APIs**:
   - API de cotações em tempo real
   - RSS feeds de notícias financeiras
   - Dados históricos de investimentos

2. **Recursos Adicionais**:
   - Carteira de investimentos virtual
   - Comparador de investimentos
   - Calculadora de aposentadoria
   - Gráficos interativos

3. **Autenticação**:
   - Sistema de login
   - Perfis de usuário
   - Salvamento de simulações

4. **Conversão para App**:
   - PWA (Progressive Web App)
   - React Native para iOS/Android
   - Notificações push

## ⚠️ Aviso Legal

Este projeto é para fins educacionais. As informações sobre investimentos e tributação são simplificadas e podem não refletir todas as nuances da legislação brasileira. Sempre consulte um profissional certificado antes de tomar decisões de investimento.

## 📄 Licença

Este projeto é de código aberto para fins educacionais.

---

Desenvolvido com 💚 para educação financeira
