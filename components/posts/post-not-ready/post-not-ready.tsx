import styles from "./post-not-ready.module.scss";

export default function PostNotReady() {
  return (
    <div className={styles["wrapper"]}>
      <p className={styles["text"]}>아직 준비된 포스팅이 없습니다</p>
    </div>
  );
}
