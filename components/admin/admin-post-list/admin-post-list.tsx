"use client";

import { useState, useEffect } from "react";

import styles from "./admin-post-list.module.scss";
import { fetchPostList } from "@/utils/api";
import AdminPostCard from "../admin-post-card/admin-post-card";
import { PostDataProps } from "@/type";

export default function AdminPostList() {
  const [cardData, setCardData] = useState<PostDataProps[]>();

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
          postLink={e.title || ""}
          imageLink={e.imageLink || ""}
          title={e.title || ""}
          summary={e.summary || ""}
          category={e.category || ""}
        />
      ))}
    </div>
  );
}
