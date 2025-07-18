"use client";

import Image from "next/image";
import { Suspense } from "react";

import styles from "./header.module.scss";

type ArticleHeaderProps = {
  title: string;
  date: string;
  image: string;
};

export default function Header({ title, date, image }: ArticleHeaderProps) {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <div className={styles["wrapper"]}>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["date"]}>{date}</p>
        <div className={styles["image-wrapper"]}>
          <Image src={image} alt="article-header-image" fill />
        </div>
      </div>
    </Suspense>
  );
}
