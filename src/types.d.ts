export interface InvestmentPlan {
  id: string;
  name: 'Bronze' | 'Silver' | 'Gold';
  apy: number; // in percentage
  minDeposit: number;
  description: string;
  terms: string;
}

export interface ActiveInvestment {
  id: string;
  plan: InvestmentPlan;
  amount: number;
  startDate: string; // ISO
  nextPayout: string; // ISO
  earningsToDate: number;
}

export interface QuickStats {
  totalActive: number;
  avgApy: number;
  monthlyReturns: number;
}