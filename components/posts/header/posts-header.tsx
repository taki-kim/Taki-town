"use client";

import styles from "./posts-header.module.css";
import HeaderNav from "./nav/header-nav";
import { usePathname } from "next/navigation";
import { getCategoryAndIntro } from "@/utils/postPage";

export default function PostsHeader() {
  const pathname = usePathname();

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>
        {getCategoryAndIntro(pathname as string)[0]}
      </h1>
      <p className={styles["summary"]}>
        {" "}
        {getCategoryAndIntro(pathname as string)[1]}
      </p>
      <HeaderNav />
    </div>
  );
}
