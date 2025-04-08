"use client";

import { Suspense } from "react";
import styles from "./page.module.css";
import CommentInput from "@/components/comment/comment-input/comment-input";
import CommentsList from "@/components/comment/comments-list/comments-list";

export default function GuestBook() {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Guestbook</h1>
      <p className={styles["p"]}>
        반갑습니다 여러분!
        <br /> 자유롭게 방명록을 작성해주세요, 질문과 의견도 환영입니다!
      </p>
      <CommentInput articleTitle="guestbook" />
      <Suspense fallback={<>loading...</>}>
        <CommentsList articleTitle="guestbook" newestFirst={true} />
      </Suspense>
    </div>
  );
}
