"use client";

import { useState, useEffect } from "react";

import styles from "./project-list.module.css";
import ArticleCard from "@/components/article-card/article-card";
import { sortByNewestArtcile } from "@/utils/article";
import { ProjectDataProps } from "@/type";

export default function ProjectList({
  cardList,
}: {
  cardList: ProjectDataProps[];
}) {
  return (
    <div className={styles["wrapper"]}>
      {sortByNewestArtcile(cardList).map((e) => (
        <ArticleCard
          key={e.title}
          articleSort="project"
          postLink={e.title}
          imageLink={e.imageLink}
          title={e.title}
          summary={e.summary}
        />
      ))}
    </div>
  );
}
