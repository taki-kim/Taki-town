import styles from "./page.module.scss";
import ProjectsHeader from "@/components/projects/header/projects-header";
import { fetchProjectList } from "@/utils/api";
import { generatePageMetadata } from "@/utils/metadata";
import CardList from "@/components/card-list/CardList";

export const generateMetadata = () =>
  generatePageMetadata({ pageCategory: "Projects" });

export default async function Projects() {
  const dataList = await fetchProjectList();

  return (
    <div className={styles["wrapper"]}>
      <ProjectsHeader />
      <CardList cardList={dataList} articleSort="project" />
    </div>
  );
}
