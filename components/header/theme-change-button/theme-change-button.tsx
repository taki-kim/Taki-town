"use client";

import DarkModeIcon from "./dark-mode-icon";
import LightModeIcon from "./light-mode-icon";
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
