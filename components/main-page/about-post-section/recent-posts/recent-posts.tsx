import { Suspense } from "react";

import styles from "./recent-posts.module.css";
import NavButton from "@/components/button/nav-button";
import Carousel from "@/components/carousel/carousel";
import { sortRecentPosts } from "@/utils/sortPosts";

async function fetchRecentData() {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/post/get-all-posts`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function RecentPosts() {
  const fetchResult = await fetchRecentData();
  const data = sortRecentPosts(fetchResult);

  return (
    <Suspense fallback={<p>...loading</p>}>
      <div className={styles["wrapper"]}>
        <header className={styles["header"]}>
          <h1 className={styles["title"]}>Recent posts</h1>
          <NavButton text="More Posts" size="small" link="/posts" />
        </header>
        <main className={styles["content-wrapper"]}>
          <Carousel data={data} />
        </main>
      </div>
    </Suspense>
  );
}
