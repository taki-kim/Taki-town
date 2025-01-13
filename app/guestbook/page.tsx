"use client";

import { useEffect, useState, Suspense } from "react";
import styles from "./page.module.css";
import { useCommentRefetch } from "@/hooks/useCommentRefetch";
import CommentInput from "@/components/comment/comment-input/comment-input";
import CommentsList from "@/components/comment/comments-list/comments-list";

export default function GuestBook() {
  const [commentsList, setCommentsList] = useState([]);
  const { triggerRefetchCount } = useCommentRefetch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/comment/get/${`guestbook`}`);
      const result = await response.json();
      if (result) setCommentsList(result);
    };

    fetchData();
  }, [triggerRefetchCount]);

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Guestbook</h1>
      <p className={styles["p"]}>
        반갑습니다 여러분!
        <br /> 자유롭게 방명록을 작성해주세요, 질문과 의견도 환영입니다!
      </p>
      <CommentInput articleTitle="guestbook" />
      <Suspense fallback={<>loading...</>}>
        <CommentsList commentsList={commentsList} newestFirst={true} />
      </Suspense>
    </div>
  );
}
