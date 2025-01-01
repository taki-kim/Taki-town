import styles from "./comment-card.module.css";
import { CommentProps } from "@/type";

export default function CommentCard({ author, date, comment }: CommentProps) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <div className={styles["header-profile"]}>
          <div className={styles["author"]}>{author}</div>
          {"·"}
          <div className={styles["date"]}>{date}</div>
        </div>
      </div>

      <div
        style={{ whiteSpace: "pre-wrap" }}
        className={styles["comment-wrapper"]}
      >
        {comment}
      </div>
    </div>
  );
}
