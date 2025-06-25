"use client";

import { useState } from "react";

import styles from "./HoverTextItem.module.scss";

type HoverTextItemProps = {
  label: string;
  emoji: string;
};

export default function HoverTextItem({ label, emoji }: HoverTextItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className={styles["wrapper"] + (hovered ? " " + styles["hovered"] : "")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      aria-label={label}
    >
      {label}
      <span
        className={
          styles["hovered-emoji"] +
          (hovered ? " " + styles["emoji-visible"] : "")
        }
      >
        {emoji}
      </span>
    </span>
  );
}
