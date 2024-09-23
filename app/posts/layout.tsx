import styles from "./layout.module.css";
import PostsHeader from "@/components/posts/header/posts-header";
import PostList from "@/components/posts/post-list/post-list";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles["wrapper"]}>
      {children}
      <PostsHeader />
      <PostList />
    </div>
  );
}
