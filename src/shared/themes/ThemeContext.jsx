import React, { createContext, useState } from 'react';
import { darkTheme, lightTheme } from './darkTheme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme || 'light');
  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
    const { theme, themeStyles,toggleTheme } = useContext(ThemeContext)
    return { theme, themeStyles,toggleTheme }
  }