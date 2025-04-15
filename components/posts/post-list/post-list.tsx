"use client";

import { usePathname } from "next/navigation";

import styles from "./post-list.module.css";
import ArticleCard from "@/components/article-card/article-card";
import { getCategoryString } from "@/utils/postPage";
import PostNotReady from "../post-not-ready/post-not-ready";
import { useEffect, useRef } from "react";
import useInfinitePostsQuery from "@/hooks/useInfintePostsQuery";

import PostListLoading from "./loading/loading";

export default function PostList() {
  const pathname = usePathname();
  const category = getCategoryString(pathname as string);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfinitePostsQuery(category);

  // 모든 데이터 펼치기
  const allPosts = data?.pages.flatMap((page) => page.data) ?? [];

  // 스크롤 감지용 ref
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <PostListLoading />;

  if (error) return <p>에러 발생: {error.message}</p>;

  return (
    <div>
      {allPosts.length > 0 ? (
        <>
          <div className={styles["wrapper"]}>
            {allPosts.map((e) => (
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
          {isFetchingNextPage && <PostListLoading />}
          <div ref={loadMoreRef} />
        </>
      ) : (
        <PostNotReady />
      )}
    </div>
  );
}
