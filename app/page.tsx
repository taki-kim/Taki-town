import styles from "./page.module.css";
import Introduction from "@/components/main-page/introduction";
import AboutPostSection from "@/components/main-page/about-post-section/about-post-section";
import PostsNavSection from "@/components/main-page/posts-nav-section/posts-nav-section";
import { MetadataComponent } from "@/components/metadata/metadata";

export const generateMetadata = () => MetadataComponent({ page: "Main" });

export default function Home() {
  return (
    <>
      <header className={styles["header"]}>
        <Introduction />
      </header>
      <main className={styles["main"]}>
        <AboutPostSection />
        <PostsNavSection />
      </main>
    </>
  );
}
