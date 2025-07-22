"use client";

import DarkModeIcon from "./DarkModeIcon";
import LightModeIcon from "./LightModeIcon";
import useTheme from "@/hooks/useTheme";

export type IConProps = {
  onClick: () => void;
};

export default function ThemeChangeButton() {
  const { theme, toggleTheme } = useTheme();

  if (theme === "dark") {
    return <DarkModeIcon onClick={toggleTheme} />;
  } else if (theme === "light") {
    return <LightModeIcon onClick={toggleTheme} />;
  }
}
