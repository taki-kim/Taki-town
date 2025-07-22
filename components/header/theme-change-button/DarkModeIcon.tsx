import { IConProps } from "./ThemeChangeButton";
import styles from "./DarkModeIcon.module.scss";

export default function DarkModeIcon({ onClick }: IConProps) {
  return (
    <div className={styles["mode-icon"]} onClick={onClick}>
      <div className={styles["moon-shadow"]}></div>
    </div>
  );
}
