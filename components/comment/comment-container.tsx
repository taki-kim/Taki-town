"use client";

import React, { Suspense } from "react";
import styles from "./comment-container.module.scss";
import CommentInput from "./comment-input/comment-input";
import CommentsList from "./comments-list/comments-list";

export type CommentContainerProps = {
  articleTitle: string;
};

export default function CommentContainer({
  articleTitle,
}: CommentContainerProps) {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Comments</h1>
      <CommentInput articleTitle={articleTitle} />
      <Suspense fallback={<>...loading</>}>
        <CommentsList articleTitle={articleTitle} />
      </Suspense>
    </div>
  );
}
