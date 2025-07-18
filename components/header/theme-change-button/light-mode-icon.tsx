import { IConProps } from "./theme-change-button";
import styles from "./light-mode-icon.module.scss";

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
