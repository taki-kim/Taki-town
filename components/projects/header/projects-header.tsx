import styles from "./projects-header.module.css";

export default function ProjectsHeader() {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Projects</h1>
      <p className={styles["summary"]}>참여했던 프로젝트에 대해 소개합니다.</p>
    </div>
  );
}
