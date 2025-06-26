import styles from "./page.module.scss";
import Introduction from "@/components/main-page/introduction/Introduction";
import AboutPostSection from "@/components/main-page/about-post-section/about-post-section";
import PostsNavSection from "@/components/main-page/posts-nav-section/posts-nav-section";
import { generatePageMetadata } from "@/utils/metadata";

import { fetchLatestPostList } from "@/utils/api";

import LatestPost from "@/components/main-page/latest-posts/LatestPost";

export const generateMetadata = () =>
  generatePageMetadata({ pageCategory: "Home" });

export default async function Home() {
  const latestPostList = await fetchLatestPostList();

  return (
    <>
      <header className={styles["header"]}>
        <Introduction />
      </header>
      <main className={styles["main"]}>
        <LatestPost latestPostList={latestPostList} />
      </main>
    </>
  );
}
