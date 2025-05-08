import styles from "./about-post-section.module.scss";
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
