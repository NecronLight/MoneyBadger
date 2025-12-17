"use client";

import Link from "next/link";
import { useRef, useState } from "react";

interface SimulationResult {
  initialAmount: number;
  monthlyContribution: number;
  months: number;
  annualRate: number;
  totalInvested: number;
  totalEarnings: number;
  finalAmount: number;
  incomeTax: number;
  netAmount: number;
}

export default function SimuladorPage() {
  const [initialAmount, setInitialAmount] = useState<string>("10000");
  const [monthlyContribution, setMonthlyContribution] = useState<string>("500");
  const [months, setMonths] = useState<string>("12");
  const [annualRate, setAnnualRate] = useState<string>("10");
  const [investmentType, setInvestmentType] = useState<string>("renda-fixa");
  const [result, setResult] = useState<SimulationResult | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const calculateIncomeTax = (earnings: number, investmentMonths: number, type: string): number => {
    // FIIs e LCI/LCA são isentos
    if (type === "fii" || type === "lci-lca") {
      return 0;
    }

    // Ações: 15% sobre o ganho (se venda > R$ 20.000/mês)
    if (type === "acoes") {
      return earnings * 0.15;
    }

    // Renda fixa: tabela regressiva
    if (type === "renda-fixa") {
      if (investmentMonths <= 6) return earnings * 0.225; // 22,5%
      if (investmentMonths <= 12) return earnings * 0.20; // 20%
      if (investmentMonths <= 24) return earnings * 0.175; // 17,5%
      return earnings * 0.15; // 15%
    }

    return 0;
  };

  const simulate = () => {
    const initial = parseFloat(initialAmount) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const period = parseInt(months) || 1;
    const rate = parseFloat(annualRate) || 0;

    const monthlyRate = rate / 100 / 12;
    let balance = initial;

    for (let i = 0; i < period; i++) {
      balance = balance * (1 + monthlyRate) + monthly;
    }

    const totalInvested = initial + monthly * period;
    const totalEarnings = balance - totalInvested;
    const incomeTax = calculateIncomeTax(totalEarnings, period, investmentType);
    const netAmount = balance - incomeTax;

    setResult({
      initialAmount: initial,
      monthlyContribution: monthly,
      months: period,
      annualRate: rate,
      totalInvested,
      totalEarnings,
      finalAmount: balance,
      incomeTax,
      netAmount,
    });

    // Leva o usuário até o resultado após calcular
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ash_grey-900 via-gray-100 to-gray-200">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-6">
            <Link href="/" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 text-xs transition-all duration-300 hover:translate-x-[-4px]">
              ← Voltar
            </Link>
            <h1 className="text-xl font-semibold text-white">Simulador de Investimentos</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal_blue-400 mb-2">
                  Tipo de Investimento
                </label>
                <select
                  value={investmentType}
                  onChange={(e) => setInvestmentType(e.target.value)}
                  className="w-full px-4 py-2 border border-ash_grey-800 bg-white text-charcoal_blue-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="renda-fixa">Renda Fixa (CDB, Tesouro Direto)</option>
                  <option value="acoes">Ações</option>
                  <option value="fii">Fundos Imobiliários (FII)</option>
                  <option value="lci-lca">LCI/LCA (Isento de IR)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal_blue-400 mb-2">
                  Valor Inicial (R$)
                </label>
                <input
                  type="number"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(e.target.value)}
                  className="w-full px-4 py-2 border border-ash_grey-800 bg-white text-charcoal_blue-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="10000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal_blue-400 mb-2">
                  Aporte Mensal (R$)
                </label>
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                  className="w-full px-4 py-2 border border-ash_grey-800 bg-white text-charcoal_blue-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal_blue-400 mb-2">
                  Prazo (meses)
                </label>
                <input
                  type="number"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                  className="w-full px-4 py-2 border border-ash_grey-800 bg-white text-charcoal_blue-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal_blue-400 mb-2">
                  Taxa de Retorno Anual (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(e.target.value)}
                  className="w-full px-4 py-2 border border-ash_grey-800 bg-white text-charcoal_blue-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="10"
                />
              </div>

              <button
                onClick={simulate}
                className="w-full text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                style={{background: 'linear-gradient(to right, #ff9500, #ffb700)'}}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #ffaa00, #ffd000)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #ff9500, #ffb700)'}
              >
                Simular Investimento
              </button>
            </div>
          </div>

          {result && (
            <div ref={resultRef} className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-charcoal_blue-500">
                Resultado da Simulação
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-ash_grey-900 p-4 rounded-lg border-l-4 shadow-md" style={{borderLeftColor: '#ff9500'}}>
                  <p className="text-sm text-charcoal_blue-400">Total Investido</p>
                  <p className="text-2xl font-bold text-[#ff9500]">
                    R$ {result.totalInvested.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="bg-ash_grey-900 p-4 rounded-lg border-l-4 shadow-md" style={{borderLeftColor: '#ffb700'}}>
                  <p className="text-sm text-charcoal_blue-400">Rendimento Bruto</p>
                  <p className="text-2xl font-bold text-[#ffb700]">
                    R$ {result.totalEarnings.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="bg-ash_grey-900 p-4 rounded-lg border-l-4 shadow-md" style={{borderLeftColor: '#ff8800'}}>
                  <p className="text-sm text-charcoal_blue-400">Imposto de Renda</p>
                  <p className="text-2xl font-bold text-[#ff8800]">
                    R$ {result.incomeTax.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="bg-ash_grey-900 p-4 rounded-lg border-l-4 shadow-md" style={{borderLeftColor: '#ffd000'}}>
                  <p className="text-sm text-charcoal_blue-400">Valor Líquido Final</p>
                  <p className="text-2xl font-bold text-[#ffd000]">
                    R$ {result.netAmount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-ash_grey-900 rounded-lg shadow-sm">
                <h3 className="font-bold text-charcoal_blue-500 mb-2">Detalhes:</h3>
                <ul className="space-y-1 text-sm text-charcoal_blue-400">
                  <li>• Período: {result.months} meses ({(result.months / 12).toFixed(1)} anos)</li>
                  <li>• Taxa anual: {result.annualRate}% a.a.</li>
                  <li>
                    • Rentabilidade total: {" "}
                    {((result.totalEarnings / result.totalInvested) * 100).toFixed(2)}%
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="mt-8 bg-ash_grey-900 border-l-4 p-6 rounded-lg shadow-md" style={{borderLeftColor: '#ffb700'}}>
            <h3 className="text-lg font-bold mb-2 text-[#ffb700]">
              ℹ️ Sobre o Imposto de Renda
            </h3>
            <ul className="space-y-2 text-sm text-charcoal_blue-400">
              <li>
                <strong>Renda Fixa:</strong> Tabela regressiva - de 22,5% (até 180 dias) a 15% (acima de 720 dias)
              </li>
              <li>
                <strong>Ações:</strong> 15% sobre o ganho de capital (vendas acima de R$ 20.000/mês)
              </li>
              <li>
                <strong>FIIs:</strong> Isento de IR nos rendimentos mensais
              </li>
              <li>
                <strong>LCI/LCA:</strong> Totalmente isento de IR
              </li>
            </ul>
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

