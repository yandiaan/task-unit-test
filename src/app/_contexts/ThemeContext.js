"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    window.localStorage.setItem('theme', window.localStorage.getItem('theme') ?? theme);
    setTheme(window.localStorage.getItem('theme'));
    document.body.classList.toggle('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
