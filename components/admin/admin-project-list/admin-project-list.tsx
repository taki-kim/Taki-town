"use client";

import { useState, useEffect } from "react";

import styles from "./admin-project-list.module.css";
import AdminProjectCard from "../admin-project-card/admin-project-card";

export default function AdminProjectList() {
  const [cardData, setCardData] = useState<any[]>([]);

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
      {cardData.map((e) => (
        <AdminProjectCard
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
