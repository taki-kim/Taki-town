"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./TextAutoSlider.module.scss";
import NextIcon from "/public/icons/nextjs-icon.svg";
import ReactIcon from "/public/icons/react-icon.svg";
import TypeScriptIcon from "/public/icons/typescript-icon.svg";
import MongoDBIcon from "/public/icons/mongodb-icon.svg";

const techStack = [
  { stack: "Next.js", icon: NextIcon },
  { stack: "React.js", icon: ReactIcon },
  { stack: "TypeScript", icon: TypeScriptIcon },
  { stack: "MongoDB", icon: MongoDBIcon },
];
export default function TextAutoSlider() {
  const extendedItems = [
    techStack[techStack.length - 1],
    ...techStack,
    techStack[0],
  ];
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (index === extendedItems.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 800);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(extendedItems.length - 2);
      }, 800);
    }
  }, [index, extendedItems.length]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (
    <div className={styles["wrapper"]}>
      <div
        className={styles["inner-wrapper"]}
        style={{
          transition: transition
            ? "transform 0.3s cubic-bezier(0.4,0,0.2,1)"
            : "none",
          transform: `translateY(-${index * 40}px)`,
        }}
      >
        {extendedItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className={styles["text-wrapper"]}>
              {item.stack}
              <Icon style={{ color: "var(--color-primary)" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
