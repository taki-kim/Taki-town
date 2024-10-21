"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./page.module.css";
import Header from "@/components/article/header";
import TextContainer from "@/components/article/text-container";

export default function PostSlug() {
  const projectTitle = usePathname()?.split("/")[2];
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/project/get/${projectTitle}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <Header title={data.title} date={data.date} image={data.imageLink} />
      <TextContainer articleText={data.content} />
    </div>
  );
}
