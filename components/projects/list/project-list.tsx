"use client";

import { useState, useEffect } from "react";

import styles from "./project-list.module.css";
import ArticleCard from "@/components/article-card/article-card";
import { sortByNewestArtcile } from "@/utils/article";
import { ProjectDataProps } from "@/type";

export default function ProjectList() {
  const [cardData, setCardData] = useState<ProjectDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/project/get/get-all-projects");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setCardData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles["wrapper"]}>
      {sortByNewestArtcile(cardData).map((e) => (
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
