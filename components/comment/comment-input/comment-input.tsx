"use client";

import { useState } from "react";
import styles from "./comment-input.module.css";
import InputButton from "@/components/button/input-button/input-button";
import useInputs from "@/hooks/useInputs";
import { submitNewComment } from "@/utils/fetchData";
import { getDateString } from "@/utils/date";

export type CommentInputProps = {
  articleTitle: string;
};

export default function CommentInput({ articleTitle }: CommentInputProps) {
  const [openToggle, setOpenToggle] = useState(false);
  const [form, onChange, setForm] = useInputs({
    articleTitle: articleTitle,
    date: "",
    comment: "",
    author: "",
    password: "",
  });

  const onClickSubmit = async (e: any) => {
    e.preventDefault();
    const currentTime = getDateString(new Date());
    form.date = currentTime;

    await submitNewComment(form);

    setForm({
      articleTitle: articleTitle,
      date: "",
      comment: "",
      author: "",
      password: "",
    });
  };

  return (
    <div className={`${styles.wrapper} ${openToggle ? styles.expanded : ""}`}>
      <textarea
        className={`${styles["textarea"]} ${openToggle ? styles.expanded : ""}`}
        name="comment"
        onClick={() => setOpenToggle(true)}
        placeholder="코멘트를 작성하세요"
        autoComplete="off"
        value={form.comment}
        onChange={onChange}
      />

      <div
        className={`${styles["hidden-form"]} ${
          openToggle ? styles.expanded : ""
        }`}
      >
        <div className={`${styles["input-wrapper"]}`}>
          <label className={styles["input-label"]}>Name</label>
          <input
            name="author"
            placeholder="이름을 입력하세요"
            className={styles["input"]}
            autoComplete="off"
            value={form.author}
            onChange={onChange}
          />
        </div>

        <div className={`${styles["input-wrapper"]}`}>
          <label className={styles["input-label"]}>Password</label>
          <input
            name="password"
            placeholder="코멘트 수정에 사용됩니다"
            className={styles["input"]}
            type="password"
            autoComplete="off"
            value={form.password}
            onChange={onChange}
          />
        </div>

        <InputButton label="작성하기" onClick={onClickSubmit} />
      </div>
    </div>
  );
}
