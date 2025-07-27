import React from 'react';
import { ActiveInvestment } from '../types';
import { format, differenceInDays } from 'date-fns';

interface Props {
  investment: ActiveInvestment;
}

const ActiveInvestmentCard: React.FC<Props> = ({ investment }) => {
  const daysLeft = differenceInDays(new Date(investment.nextPayout), new Date());
  const progressPercent = Math.min(100, (30 - daysLeft) * (100 / 30));

  return (
    <div className="glass-card p-6 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-lg">{investment.plan.name} Plan</h4>
        <span className="text-sm opacity-70">{investment.plan.apy}% APY</span>
      </div>
      <p className="text-2xl font-bold">${investment.amount.toLocaleString()}</p>
      <p className="text-sm opacity-80">Earnings to date: ${investment.earningsToDate.toLocaleString()}</p>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="bg-emerald-500 h-full transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="text-xs opacity-70">Next payout in {daysLeft} days ({format(new Date(investment.nextPayout), 'MMM dd')})</p>
    </div>
  );
};

export default ActiveInvestmentCard;