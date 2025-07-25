import styles from "./page.module.scss";
import PostsHeader from "@/components/posts/header/posts-header";
import PostList from "@/components/posts/post-list/post-list";
import { fetchPostList } from "@/utils/api";
import { generatePageMetadata } from "@/utils/metadata";

export const generateMetadata = () =>
  generatePageMetadata({ pageCategory: "Posts" });

export default async function Posts() {
  const dataList = await fetchPostList();

  return (
    <div className={styles["wrapper"]}>
      <PostsHeader pathname="all" />
      <PostList />
    </div>
  );
}
