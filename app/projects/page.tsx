import styles from "./page.module.css";
import ProjectsHeader from "@/components/projects/header/projects-header";
import ProjectList from "@/components/projects/list/projects-list";

export default function Projects() {
  return (
    <div className={styles["wrapper"]}>
      <ProjectsHeader />
      <ProjectList />
    </div>
  );
}
