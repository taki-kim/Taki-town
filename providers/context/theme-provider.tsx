"use client";

import { useEffect } from "react";

import { createContext, useState, ReactNode } from "react";
import { ThemeContextProps } from "@/type";
import { getThemeCookie, setThemeCookie } from "@/utils/cookies";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = getThemeCookie("theme");
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const oppositeTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", oppositeTheme);
    setThemeCookie(oppositeTheme);
    setTheme(oppositeTheme);
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
