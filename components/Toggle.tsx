import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Toggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className={`px-4 py-2 rounded ${
        isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default Toggle;