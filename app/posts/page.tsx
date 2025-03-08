import styles from "./page.module.css";
import PostsHeader from "@/components/posts/header/posts-header";
import PostList from "@/components/posts/post-list/post-list";
import { fetchPostList } from "@/utils/fetchData";
import { generatePageMetadata } from "@/utils/metadata";

export const generateMetadata = () =>
  generatePageMetadata({ pageCategory: "Posts" });

export default async function Posts() {
  const dataList = await fetchPostList();

  return (
    <div className={styles["wrapper"]}>
      <PostsHeader pathname="all" />
      <PostList dataList={dataList} />
    </div>
  );
}
