import styles from "./page.module.css";
import ProjectsHeader from "@/components/projects/header/projects-header";
import ProjectList from "@/components/projects/list/project-list";
import { fetchProjectList } from "@/utils/api";
import { generatePageMetadata } from "@/utils/metadata";

export const generateMetadata = () =>
  generatePageMetadata({ pageCategory: "Projects" });

export default async function Projects() {
  const dataList = await fetchProjectList();

  return (
    <div className={styles["wrapper"]}>
      <ProjectsHeader />
      <ProjectList cardList={dataList} />
    </div>
  );
}
