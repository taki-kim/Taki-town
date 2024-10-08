"use client";

import { useState, useEffect } from "react";

import styles from "./recent-posts.module.css";
import NavButton from "@/components/button/nav-button";
import Carousel from "@/components/carousel/carousel";
import { sortRecentPosts } from "@/utils/sortPosts";
import { PostDataProps } from "@/type";

export default function RecentPosts() {
  const [cardData, setCardData] = useState<PostDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/post/get-all-posts");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setCardData(sortRecentPosts(result));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>Recent posts</h1>
        <NavButton text="More Posts" size="small" link="/posts" />
      </header>
      <main className={styles["content-wrapper"]}>
        <Carousel data={cardData} />
      </main>
    </div>
  );
}
