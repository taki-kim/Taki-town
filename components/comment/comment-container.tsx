"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";

import styles from "./comment-container.module.css";
import CommentInput from "./comment-input/comment-input";
import CommentsList from "./comments-list/comments-list";
import { CommentProps } from "@/type";

export type CommentContainerProps = {
  articleTitle: string;
};

export default function CommentContainer({
  articleTitle,
}: CommentContainerProps) {
  // 댓글 불러오기 (postName)

  const [commentsList, setCommentsList] = useState<CommentProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/comment/get/${articleTitle}`);
      const result = await response.json();
      if (result) setCommentsList(result);
    };

    fetchData();
  }, []);

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
