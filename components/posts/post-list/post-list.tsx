"use client";

import { usePathname } from "next/navigation";

import styles from "./post-list.module.css";
import ArticleCard from "@/components/article-card/article-card";
import { getCategoryString } from "@/utils/postPage";
import { sortByNewestArtcile } from "@/utils/article";
import { PostDataProps } from "@/type";
import PostNotReady from "../post-not-ready/post-not-ready";

export default function PostList({ dataList }: { dataList: PostDataProps[] }) {
  const pathname = usePathname();
  const category = getCategoryString(pathname as string);

  const filteredArticles =
    category === "posts"
      ? sortByNewestArtcile(dataList)
      : sortByNewestArtcile(dataList).filter((e) => e.category === category);

  return (
    <div>
      {filteredArticles.length > 0 ? (
        <div className={styles["wrapper"]}>
          {filteredArticles.map((e) => (
            <ArticleCard
              key={e.title}
              articleSort="post"
              postLink={e.title}
              imageLink={e.imageLink}
              title={e.title}
              summary={e.summary}
            />
          ))}
        </div>
      ) : (
        <PostNotReady />
      )}
    </div>
  );
}
