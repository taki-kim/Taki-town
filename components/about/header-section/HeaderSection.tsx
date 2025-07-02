"use client";

import styles from "./HeaderSection.module.scss";
import NavButton from "../../button/nav-button";
import useFloatingEffect from "@/hooks/useFloatingEffect";

export default function HeaderSection() {
  const { isVisible, targetRef } = useFloatingEffect<HTMLDivElement>();

  return (
    <div
      className={`${styles["wrapper"]} ${isVisible ? styles.visible : ""}`}
      ref={targetRef}
    >
      <h1 className={styles["title"]}>Taki</h1>
      <h2 className={styles["sub-title"]}>Frontend Developer</h2>
      <p className={styles["semi-introduce"]}>
        빠른 서비스, 직관적 UI, 그리고 더 나은 UX에 집중합니다.
        <br />더 나은 경험을 만드는 일, 그리고 함께 성장하는 개발을 추구합니다.
      </p>
      {/* <NavButton text="이력서 바로가기" size="medium" link="/posts" /> */}
    </div>
  );
}
