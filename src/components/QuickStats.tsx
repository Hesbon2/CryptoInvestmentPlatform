import React from 'react';
import { QuickStats } from '../types';

interface Props {
  stats: QuickStats;
}

const StatBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="glass-card p-4 text-center flex-1">
    <p className="text-sm opacity-70 mb-1">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

const QuickStatsPanel: React.FC<Props> = ({ stats }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <StatBox label="Active Investments" value={stats.totalActive.toString()} />
      <StatBox label="Average APY" value={`${stats.avgApy}%`} />
      <StatBox label="Monthly Returns" value={`$${stats.monthlyReturns.toLocaleString()}`} />
    </div>
  );
};

export default QuickStatsPanel;