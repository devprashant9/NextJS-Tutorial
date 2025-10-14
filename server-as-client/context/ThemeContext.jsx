"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);

  function handleTheme() {
    setToggleTheme((prev) => !prev);
  }

  useEffect(() => {
    if (!toggleTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
