"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ash_grey-900 via-gray-100 to-gray-200">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-white">MoneyBadger</h1>
            <nav className="flex gap-3">
              <Link href="/investimentos" className="px-5 py-2 rounded-full bg-white/10 hover:bg-[#ffaa00] hover:text-charcoal_blue-500 text-white font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/20 hover:border-[#ffaa00] backdrop-blur-sm">
                Investimentos
              </Link>
              <Link href="/simulador" className="px-5 py-2 rounded-full bg-white/10 hover:bg-[#ffaa00] hover:text-charcoal_blue-500 text-white font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/20 hover:border-[#ffaa00] backdrop-blur-sm">
                Simulador
              </Link>
              <Link href="/noticias" className="px-5 py-2 rounded-full bg-white/10 hover:bg-[#ffaa00] hover:text-charcoal_blue-500 text-white font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/20 hover:border-[#ffaa00] backdrop-blur-sm">
                Notícias
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-charcoal_blue-500">
            Bem-vindo ao MoneyBadger
          </h2>
          <p className="text-xl text-charcoal_blue-400 max-w-2xl mx-auto">
            Sua plataforma completa para aprender sobre investimentos, 
            simular rendimentos e acompanhar o mercado financeiro.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/investimentos" className="group block h-full">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-t-4 hover:border-[#ffaa00] hover:-translate-y-2 h-full" style={{borderTopColor: '#ff9500'}}>
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-2 text-charcoal_blue-500 group-hover:text-charcoal_blue-500 transition-colors" style={{color: '#2f3e46'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ff9500'} onMouseLeave={(e) => e.currentTarget.style.color = '#2f3e46'}>
                Tipos de Investimentos
              </h3>
              <p className="text-charcoal_blue-400">
                Aprenda sobre diferentes tipos de investimentos: ações, renda fixa, 
                fundos imobiliários e muito mais.
              </p>
            </div>
          </Link>

          <Link href="/simulador" className="group block h-full">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-t-4 hover:border-[#ffaa00] hover:-translate-y-2 h-full" style={{borderTopColor: '#ffb700'}}>
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-2xl font-bold mb-2 text-charcoal_blue-500 group-hover:text-charcoal_blue-500 transition-colors" style={{color: '#2f3e46'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffb700'} onMouseLeave={(e) => e.currentTarget.style.color = '#2f3e46'}>
                Simulador de Investimentos
              </h3>
              <p className="text-charcoal_blue-400">
                Calcule seus rendimentos e descubra quanto pagará de imposto de renda 
                em diferentes tipos de investimento.
              </p>
            </div>
          </Link>

          <Link href="/noticias" className="group block h-full">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-t-4 hover:border-[#ffaa00] hover:-translate-y-2 h-full" style={{borderTopColor: '#ffd000'}}>
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-2xl font-bold mb-2 text-charcoal_blue-500 group-hover:text-charcoal_blue-500 transition-colors" style={{color: '#2f3e46'}} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd000'} onMouseLeave={(e) => e.currentTarget.style.color = '#2f3e46'}>
                Notícias
              </h3>
              <p className="text-charcoal_blue-400">
                Fique atualizado com as últimas notícias do mercado financeiro 
                e economia brasileira.
              </p>
            </div>
          </Link>
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
