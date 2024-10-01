import styles from "./page.module.css";
import PostsHeader from "@/components/posts/header/posts-header";
import PostList from "@/components/posts/post-list/post-list";

export default function Post() {
  return (
    <div className={styles["wrapper"]}>
      <PostsHeader />
      <PostList />
    </div>
  );
}
