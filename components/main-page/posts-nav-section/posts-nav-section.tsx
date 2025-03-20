import Link from "next/link";

import styles from "./posts-nav-section.module.css";
import { navList } from "@/lib/nav-list";

export default function PostsNavSection() {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Category</h1>
      <nav className={styles["nav-wrapper"]}>
        {navList.map((element) =>
          element.title !== "All" ? (
            <Link
              className={styles["nav-item"]}
              href={element.link}
              key={element.categoryId}
            >
              <h1 className={styles["nav-item-title"]}>{element.title}</h1>
              <h2>{element.summary}</h2>
            </Link>
          ) : null
        )}
      </nav>
    </div>
  );
}
