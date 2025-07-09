"use client";
import { useState } from "react";
import Link from "next/link";

import styles from "./ProjectCard.module.scss";
import useFloatingEffect from "@/hooks/useFloatingEffect";
import Image from "next/image";
import Badge from "@/components/badge/Badge";
import { ProjectsListType } from "@/lib/about";

export default function ProjectCard({
  image,
  title,
  techStacks,
  description,
  links,
  effectPosition,
}: ProjectsListType) {
  const { isVisible, targetRef } = useFloatingEffect<HTMLDivElement>();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles["wrapper"]} ${styles[`${effectPosition}-card`]} ${
        isVisible ? styles.visible : ""
      }`}
      ref={targetRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={image} alt="project-card" fill />
      <div
        className={`${styles["hover-card"]} ${isHovered ? styles.hovered : ""}`}
      >
        <h1 className={styles["title"]}>{title}</h1>
        <div className={styles["stacks-wrapper"]}>
          {techStacks.map((stack, i) => (
            <Badge key={i} text={stack} />
          ))}
        </div>
        <p className={styles["description"]}>{description}</p>

        <div className={styles["links-wrapper"]}>
          {links.map((item) => (
            <Link
              className={styles["nav-button"]}
              href={item.link}
              target="_blank"
            >
              {item.linkTo}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
