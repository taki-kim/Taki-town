"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";

import styles from "./comment-container.module.css";
import CommentInput from "./comment-input/comment-input";
import CommentsList from "./comments-list/comments-list";
import { CommentProps } from "@/type";
import { STALE_TIME } from "@/constant";

export type CommentContainerProps = {
  articleTitle: string;
};

export default function CommentContainer({
  articleTitle,
}: CommentContainerProps) {
  // 댓글 불러오기 (postName)

  const [commentsList, setCommentsList] = useState<CommentProps[]>([]);

  const dummyList = [
    {
      author: "TAKI",
      comment: "aasd asd assas",
      date: "2025-01-01",
      recomment: "답글을 남겨주어 참으로 감사드리옵니다",
      recommentDate: "2025-01-02",
    },
    {
      author: "TAKI01",
      comment: "aasdas",
      date: "2025-01-01",
      recomment: "답글을 남겨주어 참으로 감사",
      recommentDate: "2025-01-02",
    },
    {
      author: "TAKI-2",
      comment: "aasd asd assas a",
      date: "2025-01-01",
      recomment: "답글을 남겨주어 참으로 감사드리옵니다!!",
      recommentDate: "2025-01-02",
    },
    {
      author: "TAKI=3",
      comment: "aaasddasd assas",
      date: "2025-01-01",
      recomment: "답글을 남겨주어 참으로 감사드링",
      recommentDate: "2025-01-02",
    },
  ];

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch(`/api/comment/get/${articleTitle}`, {
  //         next: { revalidate: STALE_TIME },
  //       });
  //       const result = await response.json();
  //       if (result) setCommentsList(result);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Comments</h1>
      <CommentInput articleTitle={articleTitle} />
      <Suspense fallback={<>loading...</>}>
        <CommentsList commentsList={dummyList} />
      </Suspense>
    </div>
  );
}
