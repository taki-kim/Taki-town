"use client";

import styles from "./SkillsSection.module.scss";
import { mainSkillList, hybridSkillList } from "@/lib/about";
import SkillsList from "./skills-list/SkillsList";
import useFloatingEffect from "@/hooks/useFloatingEffect";

export default function SkillsSection() {
  const { isVisible, targetRef } = useFloatingEffect<HTMLDivElement>();

  return (
    <div
      className={`${styles["wrapper"]} ${isVisible ? styles.visible : ""}`}
      ref={targetRef}
    >
      <h1 className={styles["title"]}>SKILLS</h1>
      <div className={styles["inner-wrapper"]}>
        <SkillsList title="MAIN SKILLS" skillsList={mainSkillList} />
        <SkillsList title="HYBRID SKILLS" skillsList={hybridSkillList} />
      </div>
    </div>
  );
}
