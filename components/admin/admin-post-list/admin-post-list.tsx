"use client";

import { useState, useEffect } from "react";

import styles from "./admin-post-list.module.css";
import { fetchPostList } from "@/utils/fetchData";
import AdminPostCard from "../admin-post-card/admin-post-card";

export default function AdminPostList() {
  const [cardData, setCardData] = useState<any[]>();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetchPostList();
        if (res) setCardData(res);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles["wrapper"]}>
      {cardData?.map((e) => (
        <AdminPostCard
          key={e.title}
          postLink={e.title}
          imageLink={e.imageLink}
          title={e.title}
          summary={e.summary}
          category={e.category}
        />
      ))}
    </div>
  );
}
