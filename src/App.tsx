import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import QuickStatsPanel from './components/QuickStats';
import InvestmentPlanCard from './components/InvestmentPlanCard';
import ActiveInvestmentCard from './components/ActiveInvestmentCard';
import { ActiveInvestment, InvestmentPlan, QuickStats } from './types';
import { format } from 'date-fns';
import CountUp from 'react-countup';

const dummyPlans: InvestmentPlan[] = [
  {
    id: 'plan-bronze',
    name: 'Bronze',
    apy: 8.5,
    minDeposit: 100,
    description: 'A starter plan with modest returns and low risk.',
    terms: 'Payout every 30 days.'
  },
  {
    id: 'plan-silver',
    name: 'Silver',
    apy: 12,
    minDeposit: 1000,
    description: 'Balanced plan for growing investors.',
    terms: 'Payout every 30 days.'
  },
  {
    id: 'plan-gold',
    name: 'Gold',
    apy: 18,
    minDeposit: 10000,
    description: 'Premium plan with highest returns.',
    terms: 'Payout every 30 days.'
  }
];

const dummyStats: QuickStats = {
  totalActive: 3,
  avgApy: 12.8,
  monthlyReturns: 1260
};

const dummyInvestments: ActiveInvestment[] = [
  {
    id: 'inv-1',
    plan: dummyPlans[2],
    amount: 15000,
    startDate: '2024-05-01T00:00:00Z',
    nextPayout: '2024-08-01T00:00:00Z',
    earningsToDate: 500
  },
  {
    id: 'inv-2',
    plan: dummyPlans[1],
    amount: 5000,
    startDate: '2024-06-15T00:00:00Z',
    nextPayout: '2024-07-15T00:00:00Z',
    earningsToDate: 120
  },
  {
    id: 'inv-3',
    plan: dummyPlans[0],
    amount: 800,
    startDate: '2024-06-20T00:00:00Z',
    nextPayout: '2024-07-20T00:00:00Z',
    earningsToDate: 10
  }
];

const App: React.FC = () => {
  const [portfolioValue] = useState(20800);
  const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-xs bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">
            Crypto<span className="text-primary">Invest</span>
          </h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        {/* Portfolio value */}
        <section className="text-center">
          <p className="uppercase text-sm opacity-75 mb-2">Portfolio Value</p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            $
            <CountUp
              end={portfolioValue}
              duration={1.5}
              separator=","/>
          </h2>
          <p className="text-xs opacity-60 mt-1">
            Last updated {format(new Date(), 'PPpp')}
          </p>
        </section>

        {/* Quick stats */}
        <QuickStatsPanel stats={dummyStats} />

        {/* Active investments */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Active Investments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dummyInvestments.map(inv => (
              <ActiveInvestmentCard key={inv.id} investment={inv} />
            ))}
          </div>
        </section>

        {/* Investment Options */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Choose Your Plan</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {dummyPlans.map(plan => (
              <InvestmentPlanCard key={plan.id} plan={plan} onSelect={setSelectedPlan} />
            ))}
          </div>
          {selectedPlan && (
            <div className="mt-6 text-center">
              <p>
                You selected the <span className="font-semibold">{selectedPlan.name}</span> plan with{' '}
                <span className="font-semibold">{selectedPlan.apy}%</span> APY. Minimum deposit is ${' '}
                {selectedPlan.minDeposit.toLocaleString()}.
              </p>
              {/* Deposit flow button - placeholder */}
              <button className="mt-4 glass-card px-6 py-3 font-semibold hover:scale-105 transition-transform">
                Proceed to Deposit
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs py-6 opacity-50">
        © {new Date().getFullYear()} CryptoInvest. All rights reserved.
      </footer>
    </div>
  );
};

export default App;