import { Suspense } from "react";

import styles from "./dev-posts.module.scss";
import NavButton from "@/components/button/nav-button";
import Carousel from "@/components/carousel/carousel";
import { sortRecentDevPosts } from "@/utils/sortPosts";
import { fetchPostList } from "@/utils/api";

export default async function DevPosts() {
  const fetchResult = await fetchPostList();
  const data = sortRecentDevPosts(fetchResult);

  return (
    <Suspense fallback={<p>...loading</p>}>
      <div className={styles["wrapper"]}>
        <header className={styles["header"]}>
          <h1 className={styles["title"]}>Dev posts</h1>
          <NavButton text="More Posts" size="small" link="/posts/development" />
        </header>
        <main className={styles["content-wrapper"]}>
          <Carousel data={data} />
        </main>
      </div>
    </Suspense>
  );
}
