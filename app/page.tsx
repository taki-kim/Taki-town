import styles from "./page.module.scss";
import Introduction from "@/components/main-page/introduction/Introduction";
import { generatePageMetadata } from "@/utils/metadata";
import { fetchLatestPostList, fetchFeaturedProjectList } from "@/utils/api";
import LatestPost from "@/components/main-page/highlight-list/LatestPost";
import FeaturedProjects from "@/components/main-page/highlight-list/FeaturedProjects";

export const generateMetadata = () =>
  generatePageMetadata({ pageCategory: "Home" });

export default async function Home() {
  const latestPostList = await fetchLatestPostList();
  const featuredProjectList = await fetchFeaturedProjectList();

  return (
    <>
      <header className={styles["header"]}>
        <Introduction />
      </header>
      <main className={styles["main"]}>
        <LatestPost latestPostList={latestPostList} />
        <FeaturedProjects projectList={featuredProjectList} />
      </main>
    </>
  );
}
