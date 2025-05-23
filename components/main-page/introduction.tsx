"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./introduction.module.scss";
import MainButton from "../button/main-button";
import wallpaper from "/public/image/wallpaper.webp";

export default function Introduction() {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <>
      <main className={styles["wrapper"]}>
        <Image src={wallpaper} alt="wallpaper" quality={60} fill priority />

        <div
          className={`${styles["text-wrapper"]} ${
            isVisible ? styles["fade-in"] : ""
          }`}
          ref={textRef}
        >
          안녕하세요 웹 프론트엔드 개발자 Taki입니다. <br />
          이곳은 저의 개인 블로그, 제가 만든 작업들의 내용과 고민의 흔적들을
          남기고 기억하는 곳입니다.
          <br />
          저의 작업물들과 경험들, 그리고 흥미롭고 관심이 가는 주제들을 자유롭게
          기록하고 있습니다.
        </div>
        <div className={styles["button-wrapper"]}>
          <Link href="/about" className={styles["nav-button"]}>
            <MainButton text="About Me" size="medium" color="light" />
          </Link>
        </div>
      </main>
    </>
  );
}
