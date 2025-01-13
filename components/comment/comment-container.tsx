"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";

import styles from "./comment-container.module.css";
import CommentInput from "./comment-input/comment-input";
import CommentsList from "./comments-list/comments-list";
import { CommentProps } from "@/type";
import { STALE_TIME } from "@/constant";
import { useCommentRefetch } from "@/hooks/useCommentRefetch";

export type CommentContainerProps = {
  articleTitle: string;
};

export default function CommentContainer({
  articleTitle,
}: CommentContainerProps) {
  // 댓글 불러오기 (postName)
  const { triggerRefetchCount } = useCommentRefetch();
  const [commentsList, setCommentsList] = useState<CommentProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/comment/get/${articleTitle}`, {
        next: { revalidate: STALE_TIME },
      });
      const result = await response.json();
      if (result) setCommentsList(result);
    };

    fetchData();
  }, [triggerRefetchCount]);

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Comments</h1>
      <CommentInput articleTitle={articleTitle} />
      <Suspense fallback={<>loading...</>}>
        <CommentsList commentsList={commentsList} />
      </Suspense>
    </div>
  );
}
