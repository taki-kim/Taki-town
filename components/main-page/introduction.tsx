"use client";

import { useEffect, useRef, useState } from "react";
import TextAutoSlider from "./text-auto-slider/TextAutoSlider";

import styles from "./introduction.module.scss";
import NavButton from "../button/nav-button";

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
        <div
          className={`${styles["text-wrapper"]} ${
            isVisible ? styles["fade-in"] : ""
          }`}
          ref={textRef}
        >
          Web developer Taki,
          <br />
          focused on Fast Web, Intuitive UI, and Better UX.
          <br />
          <div className={styles["carousel-text-wrapper"]}>
            Building with <TextAutoSlider />
          </div>
        </div>
        <div className={styles["button-wrapper"]}>
          <NavButton text="About Me" size="medium" link="/about" />
        </div>
      </main>
    </>
  );
}
