import styles from "./ProjectsSection.module.scss";
import ProjectCard from "./project-card/ProjectCard";
import { projectsList } from "@/lib/about";
import MoreProjectsButton from "./more-projects-button/MoreProjectsButton";

export default function ProjectsSection() {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>PROJECTS</h1>
      <div className={styles["projects-list"]}>
        {projectsList.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            techStacks={project.techStacks}
            description={project.description}
            links={project.links}
            effectPosition={project.effectPosition}
          />
        ))}
        <MoreProjectsButton />
      </div>
    </div>
  );
}
