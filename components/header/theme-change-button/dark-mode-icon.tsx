import { IConProps } from "./theme-change-button";
import styles from "./dark-mode-icon.module.scss";

export default function DarkModeIcon({ onClick }: IConProps) {
  return (
    <div className={styles["mode-icon"]} onClick={onClick}>
      <div className={styles["moon-shadow"]}></div>
    </div>
  );
}
