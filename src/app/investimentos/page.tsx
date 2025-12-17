"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const glossaryCategories = [
  {
    id: "basicos",
    name: "Conceitos Básicos",
    icon: "📚",
    terms: [
      { term: "Patrimônio Líquido", definition: "Total de ativos (bens) de uma pessoa ou empresa menos seus passivos (dívidas). Indica a riqueza real disponível." },
      { term: "Rentabilidade", definition: "O retorno financeiro de um investimento, geralmente expresso em percentual. Pode ser fixa (previsível) ou variável (depende do mercado)." },
      { term: "Risco", definition: "Possibilidade de perda financeira em um investimento. Investimentos com maior potencial de retorno geralmente têm maior risco associado." },
      { term: "Diversificação", definition: "Estratégia de investir em diferentes ativos e setores para reduzir riscos. O princípio é: não coloque todos os ovos na mesma cesta." },
    ]
  },
  {
    id: "renda-fixa",
    name: "Renda Fixa",
    icon: "💰",
    terms: [
      { term: "Taxa Selic", definition: "Taxa básica de juros da economia brasileira, definida pelo Banco Central. Influencia diretamente a rentabilidade de investimentos em renda fixa e afeta a economia geral." },
      { term: "Imposto de Renda (IR)", definition: "Imposto cobrado sobre os ganhos de investimentos. A alíquota varia conforme o tipo de investimento e tempo de aplicação. FIIs e LCI/LCA têm regimes especiais." },
      { term: "Aporte", definition: "Contribuição de dinheiro para um investimento. Um investidor pode fazer aportes mensais ou únicos em seus investimentos." },
      { term: "Resgate", definition: "Ato de retirar o dinheiro investido. Alguns investimentos permitem resgate imediato (liquidez alta), enquanto outros têm prazos mínimos estabelecidos." },
    ]
  },
  {
    id: "acoes",
    name: "Ações e Bolsa",
    icon: "📈",
    terms: [
      { term: "Dividendo", definition: "Parte do lucro de uma empresa distribuída aos acionistas. É uma forma de retorno para quem investe em ações. As empresas geralmente distribuem dividendos trimestralmente." },
      { term: "Liquidez", definition: "Facilidade de converter um investimento em dinheiro. Investimentos com alta liquidez podem ser vendidos rapidamente, enquanto outros podem levar tempo." },
      { term: "Volatilidade", definition: "Medida da variação de preço de um ativo. Quanto maior a volatilidade, maior a oscilação de preço e, consequentemente, maior o risco e potencial de retorno." },
      { term: "Bull/Bear Market", definition: "Bull Market é quando o mercado está em alta com tendência de valorização. Bear Market é quando o mercado está em queda. Termos usados para descrever o sentimento do mercado." },
    ]
  },
  {
    id: "cripto",
    name: "Criptomoedas",
    icon: "₿",
    terms: [
      { term: "Blockchain", definition: "Tecnologia descentralizada que registra transações de forma segura e imutável. Base para criptomoedas como Bitcoin e Ethereum." },
      { term: "Wallet (Carteira)", definition: "Aplicativo ou dispositivo que armazena criptomoedas. Funciona como uma conta bancária digital onde você controla suas chaves privadas e públicas." },
      { term: "Mining (Mineração)", definition: "Processo de validação de transações na rede blockchain usando poder computacional. Mineradores recebem criptomoedas como recompensa." },
      { term: "Staking", definition: "Processo de manter criptomoedas em uma carteira para ganhar recompensas. Similar a juros em investimentos tradicionais." },
    ]
  },
  {
    id: "fundos",
    name: "Fundos & FIIs",
    icon: "📊",
    terms: [
      { term: "Cotas", definition: "Unidades de participação em um fundo de investimento. Ao comprar cotas, você se torna cotista e participa dos ganhos proporcionalmente." },
      { term: "Taxa de Administração", definition: "Percentual cobrado anualmente pelo gestor do fundo pelo trabalho de gerenciar o investimento. Reduz a rentabilidade final do investidor." },
      { term: "Yield (Rendimento)", definition: "Taxa de retorno periódica de um investimento. Em FIIs, é comum falar em yield mensal, que representa a distribuição de aluguéis." },
      { term: "Distribuição", definition: "Quando um fundo ou empresa repassa ganhos aos investidores. Pode ser em forma de dividendos, juros ou rendimentos periódicos." },
    ]
  }
];

const investmentTypes = [
  {
    id: "renda-fixa",
    name: "Renda Fixa",
    icon: "💰",
    description: "Investimentos com rentabilidade previsível e menor risco",
    details: [
      "Tesouro Direto",
      "CDB (Certificado de Depósito Bancário)",
      "LCI/LCA (Letras de Crédito)",
      "Debêntures",
    ],
    fullDescription: "A Renda Fixa é um tipo de investimento onde você empresta dinheiro a uma instituição e recebe juros predeterminados. É ideal para investidores conservadores que buscam previsibilidade nos retornos. Os principais títulos incluem Tesouro Direto (títulos do governo), CDBs (títulos bancários), LCIs/LCAs (letras de crédito isentas de IR para pessoas físicas) e Debêntures (títulos de empresas). A rentabilidade depende da taxa de juros (Selic) e do prazo do investimento.",
  },
  {
    id: "acoes",
    name: "Ações",
    icon: "📈",
    description: "Participação no capital de empresas listadas na bolsa",
    details: [
      "Ganho com valorização",
      "Recebimento de dividendos",
      "Maior potencial de retorno",
      "Maior volatilidade",
    ],
    fullDescription: "Ações representam uma fração do capital de uma empresa. Ao comprar ações, você se torna sócio da companhia. Os ganhos vêm de duas fontes: valorização do preço da ação e dividendos (lucros distribuídos aos acionistas). Ações oferecem maior potencial de retorno a longo prazo, mas também apresentam maior volatilidade e risco. Ideal para investidores com perfil arrojado e horizonte de investimento mais longo.",
  },
  {
    id: "fundos-imobiliarios",
    name: "Fundos Imobiliários (FIIs)",
    icon: "🏢",
    description: "Investimento em imóveis de forma coletiva",
    details: [
      "Renda mensal de aluguéis",
      "Isenção de IR nos rendimentos",
      "Liquidez na bolsa",
      "Diversificação imobiliária",
    ],
    fullDescription: "FIIs são fundos que investem em imóveis e distribuem os rendimentos aos cotistas. Os ganhos vêm principalmente dos aluguéis cobrados pelos imóveis. Uma grande vantagem é que os rendimentos mensais são isentos de Imposto de Renda para pessoas físicas. Os FIIs oferecem liquidez (podem ser vendidos na bolsa), diversificação imobiliária sem precisar comprar propriedades físicas, e são ideais para quem busca renda passiva mensal.",
  },
  {
    id: "fundos-investimento",
    name: "Fundos de Investimento",
    icon: "📊",
    description: "Carteiras geridas por profissionais especializados",
    details: [
      "Fundos multimercado",
      "Fundos de renda fixa",
      "Fundos de ações",
      "Fundos cambiais",
    ],
    fullDescription: "Fundos de Investimento são carteiras diversificadas geridas por profissionais (gestores). Você investe uma quantia que é combinada com a de outros investidores. Os fundos podem ter diferentes estratégias: multimercado (múltiplos ativos), renda fixa, ações, ou câmbio. A vantagem é a diversificação automática e gestão profissional. A desvantagem é o pagamento de taxas de administração e performance. Ideal para quem prefere delegar a decisão de investimento.",
  },
  {
    id: "criptomoedas",
    name: "Criptomoedas",
    icon: "₿",
    description: "Ativos digitais descentralizados",
    details: [
      "Bitcoin (BTC)",
      "Ethereum (ETH)",
      "Alta volatilidade",
      "Potencial de valorização",
    ],
    fullDescription: "Criptomoedas são ativos digitais descentralizados baseados em tecnologia blockchain. Bitcoin (BTC) é a mais conhecida e funciona como um sistema de pagamento peer-to-peer. Ethereum (ETH) oferece mais funcionalidades (smart contracts). Criptomoedas apresentam altíssima volatilidade, podendo subir ou descer drasticamente em curto prazo. São altamente especulativas e recomendadas apenas para investidores experientes com tolerância ao risco e que estejam dispostos a perder o investimento.",
  },
  {
    id: "previdencia-privada",
    name: "Previdência Privada",
    icon: "🏦",
    description: "Investimento de longo prazo para aposentadoria",
    details: [
      "PGBL (Plano Gerador de Benefício Livre)",
      "VGBL (Vida Gerador de Benefício Livre)",
      "Benefícios fiscais",
      "Planejamento sucessório",
    ],
    fullDescription: "Previdência Privada é um investimento de longo prazo voltado para aposentadoria complementar. Existem dois tipos: PGBL (permite dedução de até 12% da renda bruta do IR) e VGBL (sem benefício fiscal, mas melhor para quem não desconta imposto). Ambos oferecem benefícios fiscais quando resgata-se a aposentadoria. É ideal para planejamento de longo prazo e sucessório. As contribuições são flexíveis e o dinheiro só pode ser resgatado em casos específicos ou na aposentadoria.",
  },
];

export default function InvestimentosPage() {
  const [selectedInvestmentId, setSelectedInvestmentId] = useState<string | null>(investmentTypes[0]?.id || null);
  const selected = investmentTypes.find(inv => inv.id === selectedInvestmentId);
  
  const [selectedGlossaryCategoryId, setSelectedGlossaryCategoryId] = useState<string | null>(glossaryCategories[0]?.id || null);
  const selectedGlossaryCategory = glossaryCategories.find(cat => cat.id === selectedGlossaryCategoryId);
  return (
    <div className="min-h-screen bg-gradient-to-br from-ash_grey-900 via-gray-100 to-gray-200">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-6">
            <Link href="/" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 text-xs transition-all duration-300 hover:translate-x-[-4px]">
              ← Voltar
            </Link>
            <h1 className="text-xl font-semibold text-white">Tipos de Investimentos</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Lista Esquerda */}
            <div className="bg-white rounded-lg shadow-lg p-4 h-fit sticky top-24">
              <h3 className="font-bold text-charcoal_blue-500 mb-4">Investimentos</h3>
              <div className="space-y-2">
                {investmentTypes.map((investment) => (
                  <button
                    key={investment.id}
                    onClick={() => setSelectedInvestmentId(investment.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      selectedInvestmentId === investment.id
                        ? 'bg-[#ff9500] text-white shadow-lg'
                        : 'bg-gray-100 text-charcoal_blue-500 hover:bg-[#ffa500] hover:text-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    <span className="text-xl">{investment.icon}</span>
                    <span className="font-medium text-sm">{investment.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Detalhes Direita */}
            <div className="md:col-span-2">
              {selected && (
                <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 h-fit" style={{borderLeftColor: '#ff9500'}}>
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-5xl">{selected.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal_blue-500 mb-1">{selected.name}</h3>
                      <p className="text-charcoal_blue-400 text-sm">{selected.description}</p>
                    </div>
                  </div>

                  <div className="bg-ash_grey-900 p-5 rounded-lg mb-5">
                    <p className="text-charcoal_blue-500 leading-relaxed text-sm">{selected.fullDescription}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-charcoal_blue-500 mb-3 text-sm">Características:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selected.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs">
                          <span className="text-[#ffb700] mt-0.5">✓</span>
                          <span className="text-charcoal_blue-400">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Glossário */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-charcoal_blue-500 mb-8">
            Glossário Financeiro
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Menu Esquerda */}
            <div className="bg-white rounded-lg shadow-lg p-4 h-fit">
              <h3 className="font-bold text-charcoal_blue-500 mb-4">Categorias</h3>
              <div className="space-y-2">
                {glossaryCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedGlossaryCategoryId(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      selectedGlossaryCategoryId === category.id
                        ? "bg-[#ff9500] text-white"
                        : "bg-gray-100 text-charcoal_blue-500 hover:bg-[#ffa500] hover:text-white hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Conteúdo Direita */}
            <div className="md:col-span-3">
              {selectedGlossaryCategory && (
                <div className="space-y-4">
                  {selectedGlossaryCategory.terms.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-5 border-l-4" style={{borderLeftColor: '#ff9500'}}>
                      <h4 className="font-bold text-charcoal_blue-500 mb-2">{item.term}</h4>
                      <p className="text-charcoal_blue-400 text-sm leading-relaxed">{item.definition}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 mt-16 py-3 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-xs">
          <p>&copy; 2025 MoneyBadger</p>
        </div>
      </footer>
    </div>
  );
}

