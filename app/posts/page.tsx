import styles from "./page.module.css";
import PostsHeader from "@/components/posts/header/posts-header";
import PostList from "@/components/posts/post-list/post-list";
import { fetchPostList } from "@/utils/fetchData";
import { MetadataComponent } from "@/components/metadata/metadata";

export const generateMetadata = () => MetadataComponent({ page: "Posts" });

export default async function Posts() {
  const dataList = await fetchPostList();

  return (
    <div className={styles["wrapper"]}>
      <PostsHeader />
      <PostList dataList={dataList} />
    </div>
  );
}
