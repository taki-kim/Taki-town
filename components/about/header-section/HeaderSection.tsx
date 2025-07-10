"use client";
import Image from "next/image";
import TypeWriter from "typewriter-effect";

import styles from "./HeaderSection.module.scss";
import useFloatingEffect from "@/hooks/useFloatingEffect";
import { useState } from "react";

export default function HeaderSection() {
  const { isVisible, targetRef } = useFloatingEffect<HTMLDivElement>();
  const [showCursor, setShowCursor] = useState(true);

  return (
    <div
      className={`${styles["wrapper"]} ${isVisible ? styles.visible : ""}`}
      ref={targetRef}
    >
      <div className={styles["header-img-wrapper"]}>
        <Image
          src="/about-page/images/profile.png"
          alt="taki"
          width={320}
          height={320}
        />
      </div>

      <h1 className={styles["title"]}>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello, I'm Taki")
              .callFunction(() => setTimeout(() => setShowCursor(false), 1500))
              .start();
          }}
        />
        {!showCursor && (
          <style>{`.Typewriter__cursor { display: none }`}</style>
        )}
      </h1>
      <h2 className={styles["sub-title"]}>Frontend Developer</h2>
      <p className={styles["semi-introduce"]}>
        안녕하세요, 프론트엔드 개발자 Taki입니다
        <br />더 나은 경험을 만드는 일, 그리고 함께 성장하는 개발을 추구합니다.
      </p>
      {/* <NavButton text="이력서 바로가기" size="medium" link="/posts" /> */}
    </div>
  );
}
