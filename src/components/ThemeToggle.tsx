import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useTheme } from '../theme/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="glass-card p-2 flex items-center justify-center text-primary hover:scale-105 transition-transform">
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;