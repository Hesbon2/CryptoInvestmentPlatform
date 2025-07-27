import React from 'react';
import { InvestmentPlan } from '../types';
import classNames from 'classnames';

interface Props {
  plan: InvestmentPlan;
  onSelect: (plan: InvestmentPlan) => void;
}

const InvestmentPlanCard: React.FC<Props> = ({ plan, onSelect }) => {
  return (
    <div
      className={classNames(
        'glass-card p-6 cursor-pointer transform transition duration-300 hover:scale-105',
        {
          'bg-gradient-to-br from-emerald-500/20 to-emerald-700/30': plan.name === 'Gold',
          'bg-gradient-to-br from-primary/20 to-primary-dark/30': plan.name === 'Silver',
          'bg-gradient-to-br from-gray-500/20 to-gray-700/30': plan.name === 'Bronze'
        }
      )}
      onClick={() => onSelect(plan)}
    >
      <h3 className="text-2xl font-semibold mb-2">{plan.name} Plan</h3>
      <p className="text-3xl font-bold mb-4">{plan.apy}% APY</p>
      <p className="mb-2 text-sm opacity-80">Minimum Deposit: ${plan.minDeposit.toLocaleString()}</p>
      <p className="text-sm opacity-80">{plan.description}</p>
    </div>
  );
};

export default InvestmentPlanCard;