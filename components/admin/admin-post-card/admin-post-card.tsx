"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import styles from "./admin-post-card.module.css";
import EditDeleteBar from "./edit-delete-bar/edit-delete-bar";

export type AdminPostCardProps = {
  imageLink: string;
  title: string;
  summary: string;
  postLink: string;
  category: string;
};

export default function AdminPostCard({
  imageLink,
  title,
  summary,
  category,
}: AdminPostCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const path = usePathname();
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
      { threshold: 0 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [path]);

  return (
    <div>
      <Link
        href={`/post/${title}`}
        className={`${styles["wrapper"]} ${isVisible ? styles.visible : ""}`}
        ref={cardRef}
      >
        <div className={styles["image-wrapper"]}>
          <Image src={imageLink} alt={`Image ${title + 1}`} fill />
        </div>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["summary"]}>{summary}</p>
      </Link>
      <EditDeleteBar postTitle={title} postCategory={category} />
    </div>
  );
}
