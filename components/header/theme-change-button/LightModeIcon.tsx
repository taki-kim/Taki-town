import { IConProps } from "./ThemeChangeButton";
import styles from "./LightModeIcon.module.scss";

export default function LightModeIcon({ onClick }: IConProps) {
  return (
    <div className={styles["mode-icon"]} onClick={onClick}>
      <span className={styles.ray}></span>
      <span className={styles.ray}></span>
      <span className={styles.ray}></span>
      <span className={styles.ray}></span>
      <span className={styles.ray}></span>
      <span className={styles.ray}></span>
      <span className={styles.ray}></span>
      <span className={styles.ray}></span>
    </div>
  );
}
