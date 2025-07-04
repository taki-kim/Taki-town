"use client";
import { useState } from "react";

import styles from "./SkillsList.module.scss";
import Image from "next/image";

type SkillsListProps = {
  title: string;
  skillsList: any[];
};

export default function SkillsList({ title, skillsList }: SkillsListProps) {
  const [selectedSkill, setSelectedSkill] = useState(skillsList[0]);

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>{title}</h1>
      <div className={styles["skills-list"]}>
        {skillsList.map((skill) => {
          return (
            <div
              key={skill.title}
              className={`${styles["skill-item"]} ${
                selectedSkill.title === skill.title ? styles.active : ""
              }`}
              onClick={() => setSelectedSkill(skill)}
            >
              <Image
                src={skill.image}
                alt={skill.title}
                fill
                className={styles["skill-img"]}
              />
            </div>
          );
        })}
      </div>

      <div key={selectedSkill.title} className={`${styles["skill-info"]}`}>
        {selectedSkill.description}
      </div>
    </div>
  );
}
