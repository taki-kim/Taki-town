"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import styles from "./post-list.module.css";
import ArticleCard from "@/components/article-card/article-card";
import { getCategoryString } from "@/utils/postPage";
import { sortByNewestArtcile } from "@/utils/article";
import { PostDataProps } from "@/type";

export default function PostList() {
  const [cardData, setCardData] = useState<PostDataProps[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/post/get-all-posts");
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
      {getCategoryString(pathname as string) === "posts"
        ? sortByNewestArtcile(cardData).map((e) => (
            <ArticleCard
              key={e.title}
              articleSort="post"
              postLink={e.title}
              imageLink={e.imageLink}
              title={e.title}
              summary={e.summary}
            />
          ))
        : sortByNewestArtcile(cardData).map((e) =>
            getCategoryString(pathname as string) === e.category ? (
              <ArticleCard
                key={e.title}
                articleSort="post"
                postLink={e.title}
                imageLink={e.imageLink}
                title={e.title}
                summary={e.summary}
              />
            ) : null
          )}
    </div>
  );
}
