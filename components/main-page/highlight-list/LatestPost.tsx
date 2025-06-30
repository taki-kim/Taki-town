"use client";

import styles from "./highlight-list.module.scss";
import { PostDataProps } from "@/type";
import ArticleCard from "@/components/article-card/article-card";
import NavButton from "@/components/button/nav-button";
import useFloatingEffect from "@/hooks/useFloatingEffect";

export default function LatestPost({
  latestPostList,
}: {
  latestPostList: PostDataProps[];
}) {
  const { isVisible, targetRef } = useFloatingEffect<HTMLHeadingElement>();

  return (
    <div className={styles["wrapper"]}>
      <h1
        className={`${styles["title"]} ${isVisible ? styles.visible : ""}`}
        ref={targetRef}
      >
        LATEST POSTS
      </h1>
      <div className={styles["card-list"]}>
        {latestPostList.map((e) => (
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
      <NavButton text="View All Posts" size="medium" link="/posts" />
    </div>
  );
}
