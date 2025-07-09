"use client";

import Link from "next/link";
import styles from "./button.module.css";
import { getButtonSizeClass } from "@/utils/button";
import useFloatingEffect from "@/hooks/useFloatingEffect";

type NavButtonProps = {
  text: string;
  size: string;
  link: string;
  newTab?: boolean;
};

export default function NavButton({
  text,
  size,
  link,
  newTab,
}: NavButtonProps) {
  const { isVisible, targetRef } = useFloatingEffect<HTMLAnchorElement>();

  return (
    <Link
      className={styles["Link"]}
      href={link}
      ref={targetRef}
      target={`${newTab ? "_blank" : ""}`}
    >
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
