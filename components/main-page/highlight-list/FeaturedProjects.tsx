import styles from "./highlight-list.module.scss";
import { ProjectDataProps } from "@/type";
import ArticleCard from "@/components/article-card/article-card";
import NavButton from "@/components/button/nav-button";

export default function FeaturedProjects({
  projectList,
}: {
  projectList: ProjectDataProps[];
}) {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>FEATURED PROJECTS</h1>
      <div className={styles["card-list"]}>
        {projectList.map((e) => (
          <ArticleCard
            key={e.title}
            articleSort="project"
            postLink={e.title}
            imageLink={e.imageLink}
            title={e.title}
            summary={e.summary}
          />
        ))}
      </div>
      <NavButton text="View All Projects" size="medium" link="/projects" />
    </div>
  );
}
