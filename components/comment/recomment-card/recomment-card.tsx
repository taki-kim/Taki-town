import { RecommentProps } from "@/type";
import styles from "./recomment-card.module.css";

export default function RecommentCard({
  recomment,
  recommentDate,
}: RecommentProps) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["recomment-header"]}>
        <div className={styles["taki-profile-icon"]}>T</div>
        <div className={styles["recomment-header-profile-wrapper"]}>
          <span className={styles["author"]}>TAKI</span>
          <span className={styles["date"]}>{recommentDate}</span>
        </div>
      </div>
      <div className={styles["recomment-string-wrapper"]}>{recomment}</div>
    </div>
  );
}
