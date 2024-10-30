import styles from "./page.module.css";
import PostsHeader from "@/components/posts/header/posts-header";
import PostList from "@/components/posts/post-list/post-list";
import { fetchPostList } from "@/utils/fetchData";

export default async function Posts() {
  const dataList = await fetchPostList();

  return (
    <div className={styles["wrapper"]}>
      <PostsHeader />
      <PostList dataList={dataList} />
    </div>
  );
}
