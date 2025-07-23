"use client";

import { useState, useEffect } from "react";

import styles from "./project-list.module.scss";
import ArticleCard from "@/components/article-card/ArticleCard";
import { sortByNewestArticle } from "@/utils/article";
import { ProjectDataProps } from "@/type";

export default function ProjectList({
  cardList,
}: {
  cardList: ProjectDataProps[];
}) {
  return (
    <div className={styles["wrapper"]}>
      {sortByNewestArticle(cardList).map((e) => (
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
