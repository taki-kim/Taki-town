"use client";

import { useState, useEffect } from "react";

import styles from "./admin-project-list.module.scss";
import AdminProjectCard from "../admin-project-card/admin-project-card";
import { fetchProjectList } from "@/utils/api";
import { ProjectDataProps } from "@/type";

export default function AdminProjectList() {
  const [cardData, setCardData] = useState<ProjectDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await fetchProjectList();
      setCardData(postsData);
    };

    fetchData();
  }, []);

  return (
    <div className={styles["wrapper"]}>
      {cardData.map((e) => (
        <AdminProjectCard
          key={e.title}
          postLink={e.title || ""}
          imageLink={e.imageLink || ""}
          title={e.title || ""}
          summary={e.summary || ""}
        />
      ))}
    </div>
  );
}
