"use client";

import styles from "./StrengthSection.module.scss";
import { strengthList } from "@/lib/about";
import StrengthCard from "./strength-card/StrengthCard";
import useFloatingEffect from "@/hooks/useFloatingEffect";

export default function StrengthSection() {
  const { isVisible, targetRef } = useFloatingEffect<HTMLDivElement>();
  return (
    <div
      className={`${styles["wrapper"]} ${isVisible ? styles.visible : ""}`}
      ref={targetRef}
    >
      <h1 className={styles["title"]}>FOCUSING ON</h1>
      <div className={styles["cards-list"]}>
        {strengthList.map((e) => (
          <StrengthCard
            key={e.title}
            image={e.image}
            title={e.title}
            description={e.description}
            ref={targetRef}
            className={`${styles.card} ${isVisible ? styles.visible : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
