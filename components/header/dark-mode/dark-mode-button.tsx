"use client";

import { useState, useEffect } from "react";
import { getThemeCookie, setThemeCookie } from "@/utils/cookies";

import DarkModeIcon from "./dark-mode-icon";
import LightModeIcon from "./light-mode-icon";

export type IConProps = {
  onClick: () => void;
};

export default function DarkModeButton() {
  const [theme, setTheme] = useState("light");

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

  return theme === "dark" ? (
    <DarkModeIcon onClick={handleTheme} />
  ) : (
    <LightModeIcon onClick={handleTheme} />
  );
}
