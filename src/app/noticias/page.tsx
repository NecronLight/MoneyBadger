"use client";

import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Selic: Copom eleva taxa básica de juros para 12,25% ao ano",
    category: "Economia",
    date: "2025-12-15",
    summary:
      "O Comitê de Política Monetária (Copom) do Banco Central aumentou a taxa Selic em 1 ponto percentual, elevando-a para 12,25% ao ano.",
    image: "💹",
  },
  {
    id: 2,
    title: "Ibovespa fecha em alta com expectativa de corte de juros nos EUA",
    category: "Bolsa de Valores",
    date: "2025-12-14",
    summary:
      "O principal índice da bolsa brasileira subiu 1,2% nesta quinta-feira, impulsionado por expectativas positivas sobre a economia americana.",
    image: "📈",
  },
  {
    id: 3,
    title: "Fundos Imobiliários: setor residencial se destaca em 2025",
    category: "FIIs",
    date: "2025-12-13",
    summary:
      "Fundos imobiliários com foco em imóveis residenciais apresentaram rentabilidade média de 15% no ano, superando outros segmentos.",
    image: "🏢",
  },
  {
    id: 4,
    title: "Tesouro Direto: veja as melhores opções para investir em dezembro",
    category: "Renda Fixa",
    date: "2025-12-12",
    summary:
      "Com a Selic em alta, títulos pós-fixados do Tesouro Direto se tornam mais atrativos. Especialistas recomendam diversificação.",
    image: "💰",
  },
  {
    id: 5,
    title: "Bitcoin atinge nova máxima histórica acima de US$ 100 mil",
    category: "Criptomoedas",
    date: "2025-12-11",
    summary:
      "A principal criptomoeda do mundo ultrapassou a marca de US$ 100 mil, impulsionada por maior adoção institucional e regulamentação favorável.",
    image: "₿",
  },
  {
    id: 6,
    title: "Dividendos: empresas brasileiras distribuíram R$ 300 bi em 2025",
    category: "Ações",
    date: "2025-12-10",
    summary:
      "Levantamento mostra que companhias listadas na B3 pagaram volume recorde de dividendos aos acionistas neste ano.",
    image: "💵",
  },
];

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ash_grey-900 via-gray-100 to-gray-200">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-6">
            <Link href="/" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 text-xs transition-all duration-300 hover:translate-x-[-4px]">
              ← Voltar
            </Link>
            <h1 className="text-xl font-semibold text-white">Notícias do Mercado Financeiro</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <span className="text-5xl mr-4">{article.image}</span>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{backgroundColor: '#ff950033', color: '#ff9500'}}>
                        {article.category}
                      </span>
                      <span className="text-sm text-charcoal_blue-400 ml-3">
                        {new Date(article.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal_blue-500 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-charcoal_blue-400">{article.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-ash_grey-900 border-l-4 p-6 rounded-lg shadow-md" style={{borderLeftColor: '#ffb700'}}>
            <h3 className="text-lg font-bold mb-2 text-[#ffb700]">
              📢 Aviso Importante
            </h3>
            <p className="text-charcoal_blue-400">
              As notícias apresentadas são exemplos ilustrativos para demonstração da plataforma. 
              Em uma versão de produção, as notícias seriam obtidas através de APIs de notícias 
              financeiras ou feeds RSS de fontes confiáveis como InfoMoney, Valor Econômico, 
              e Bloomberg.
            </p>
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

