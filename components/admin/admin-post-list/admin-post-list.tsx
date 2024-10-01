"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import styles from "./admin-post-list.module.css";
import AdminPostCard from "../admin-post-card/admin-post-card";

export default function AdminPostList() {
  const [cardData, setCardData] = useState<any[]>([]);
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
      {cardData.map((e) => (
        <AdminPostCard
          key={e.title}
          postLink={e.title}
          imageLink={e.imageLink}
          title={e.title}
          summary={e.summary}
        />
      ))}
    </div>
  );
}
