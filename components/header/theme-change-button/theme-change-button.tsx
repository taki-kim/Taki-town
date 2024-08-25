"use client";

import { useState, useEffect } from "react";
import { getThemeCookie, setThemeCookie } from "@/utils/cookies";

import DarkModeIcon from "./dark-mode-icon";
import LightModeIcon from "./light-mode-icon";

export type IConProps = {
  onClick: () => void;
};

export default function ThemeChangeButton() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = getThemeCookie("theme");
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const handleTheme = () => {
    const oppositeTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", oppositeTheme);
    setThemeCookie(oppositeTheme);
    setTheme(oppositeTheme);
  };

  if (theme === "dark") {
    return <DarkModeIcon onClick={handleTheme} />;
  } else if (theme === "light") {
    return <LightModeIcon onClick={handleTheme} />;
  }
}
