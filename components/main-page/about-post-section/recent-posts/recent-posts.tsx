import { Suspense } from "react";

import styles from "./recent-posts.module.scss";
import NavButton from "@/components/button/NavButton";
import Carousel from "@/components/carousel/carousel";
import { sortRecentPosts } from "@/utils/sortPosts";
import { fetchPostList } from "@/utils/api";

export default async function RecentPosts() {
  const fetchResult = await fetchPostList();
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
