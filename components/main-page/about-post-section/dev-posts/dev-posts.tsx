import styles from "./dev-posts.module.css";
import NavButton from "@/components/button/nav-button";
import Carousel from "@/components/carousel/carousel";

export default function DevPosts() {
  return (
    <div className={styles["wrapper"]}>
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>Dev Posts</h1>
        <NavButton text="More Posts" size="small" link="/posts/dev" />
      </header>
      <main className={styles["content-wrapper"]}>
        <Carousel />
      </main>
    </div>
  );
}
