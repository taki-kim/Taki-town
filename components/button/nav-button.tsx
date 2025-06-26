"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import styles from "./button.module.css";
import { getButtonSizeClass } from "@/utils/button";

type NavButtonProps = {
  text: string;
  size: string;
  link: string;
};

export default function NavButton({ text, size, link }: NavButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <Link className={styles["Link"]} href={link} ref={buttonRef}>
      <div
        className={`${styles["button-wrapper"]} ${
          styles[getButtonSizeClass(size) as string]
        } ${isVisible ? styles.visible : ""}`}
      >
        {text}
      </div>
    </Link>
  );
}
