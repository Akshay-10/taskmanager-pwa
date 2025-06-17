import React, { createContext, useState,useContext } from 'react';
import { darkTheme } from './darkTheme';
import {lightTheme} from './lightTheme'
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};


ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialTheme: PropTypes.oneOf(['light', 'dark'])
};

export const ThemeProvider = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || initialTheme || THEMES.LIGHT;
  });

  const themeStyles = useMemo(() => 
    theme === THEMES.LIGHT ? lightTheme : darkTheme,
    [theme]
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
