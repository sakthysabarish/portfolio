// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={`theme-toggle-icon ${theme === 'dark' ? 'dark' : 'light'}`}>
        {theme === 'dark' ? (
          <Sun className="icon sun-icon" size={20} />
        ) : (
          <Moon className="icon moon-icon" size={20} />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
