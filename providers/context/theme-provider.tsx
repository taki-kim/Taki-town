"use client";

import { createContext, useState, ReactNode } from "react";
import { ThemeContextProps } from "@/type";
import { getThemeCookie, setThemeCookie } from "@/utils/cookies";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(getThemeCookie("theme"));

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
