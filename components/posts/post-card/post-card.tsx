"use client";

import styles from "./post-card.module.css";
import Image from "next/image";
import Link from "next/link";

export type CardListProps = {
  imageLink: string;
  title: string;
  summary: string;
  postLink: string;
};

export default function CardList({ imageLink, title, summary }: CardListProps) {
  return (
    <Link href={"/" + title} className={styles["wrapper"]}>
      <div className={styles["image-wrapper"]}>
        <Image src={imageLink} alt={`Image ${title + 1}`} fill />
      </div>
      <h1 className={styles["title"]}>{title}</h1>
      <p className={styles["summary"]}>{summary}</p>
    </Link>
  );
}
