import styles from "./about-post-section.module.css";
import RecentPosts from "./recent-posts/recent-posts";
import DevPosts from "./dev-posts/dev-posts";

export default function AboutPostSection() {
  return (
    <div className={styles["wrapper"]}>
      <RecentPosts />
      <DevPosts />
    </div>
  );
}
