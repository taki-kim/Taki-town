"use client";

import styles from "./MoreProjectsButton.module.scss";
import useFloatingEffect from "@/hooks/useFloatingEffect";
import Link from "next/link";

export default function MoreProjectsButton() {
  const { isVisible, targetRef } = useFloatingEffect<HTMLAnchorElement>();
  return (
    <Link
      href="/projects"
      className={`${styles["wrapper"]} ${isVisible ? styles.visible : ""}`}
      ref={targetRef}
    >
      <h1 className={styles["title"]}>VIEW MORE PROJECTS</h1>
    </Link>
  );
}
