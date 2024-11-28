import styles from "./post-not-ready.module.css";

export default function PostNotReady() {
  return (
    <div className={styles["wrapper"]}>
      <p className={styles["text"]}>포스팅을 준비하고 있습니다.</p>
    </div>
  );
}
