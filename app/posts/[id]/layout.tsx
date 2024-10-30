import styles from "./layout.module.css";
import PostsHeader from "@/components/posts/header/posts-header";
import PostList from "@/components/posts/post-list/post-list";
import { fetchPostList } from "@/utils/fetchData";

export default async function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dataList = await fetchPostList();

  return (
    <div className={styles["wrapper"]}>
      {children}
      <PostsHeader />
      <PostList dataList={dataList} />
    </div>
  );
}
