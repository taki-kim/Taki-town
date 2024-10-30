"use client";

import { usePathname } from "next/navigation";

import styles from "./post-list.module.css";
import ArticleCard from "@/components/article-card/article-card";
import { getCategoryString } from "@/utils/postPage";
import { sortByNewestArtcile } from "@/utils/article";
import { PostDataProps } from "@/type";

export default function PostList({ dataList }: { dataList: PostDataProps[] }) {
  const pathname = usePathname();

  return (
    <div className={styles["wrapper"]}>
      {getCategoryString(pathname as string) === "posts"
        ? sortByNewestArtcile(dataList).map((e) => (
            <ArticleCard
              key={e.title}
              articleSort="post"
              postLink={e.title}
              imageLink={e.imageLink}
              title={e.title}
              summary={e.summary}
            />
          ))
        : sortByNewestArtcile(dataList).map((e) =>
            getCategoryString(pathname as string) === e.category ? (
              <ArticleCard
                key={e.title}
                articleSort="post"
                postLink={e.title}
                imageLink={e.imageLink}
                title={e.title}
                summary={e.summary}
              />
            ) : null
          )}
    </div>
  );
}
