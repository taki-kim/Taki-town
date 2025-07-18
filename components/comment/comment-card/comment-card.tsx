"use client";
import { useState } from "react";

import styles from "./comment-card.module.scss";
import { CommentProps } from "@/type";
import CommentEditForm from "./comment-edit-form/comment-edit-form";
import RecommentCard from "../recomment-card/recomment-card";
import ProfileImageBox from "@/components/profile-image-box/profile-image-box";

export default function CommentCard({
  _id,
  author,
  date,
  comment,
  recomment,
  recommentDate,
  password,
  profileImageLink,
  articleTitle,
}: Partial<CommentProps>) {
  const [toggleEdit, setToggleEdit] = useState(false);

  console.log(profileImageLink, author);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <div className={styles["header-profile-wrapper"]}>
          <ProfileImageBox
            imageLink={profileImageLink as string}
            size="medium"
          />

          <div className={styles["author-info"]}>
            <div className={styles["author"]}>{author}</div>

            <div className={styles["date"]}>{date}</div>
          </div>
        </div>
        <button
          className={styles["toggle-button"]}
          onClick={() => {
            setToggleEdit((prev) => !prev);
          }}
        >
          {toggleEdit ? "닫기" : "수정"}
        </button>
      </div>

      <div className={styles["comment-wrapper"]}>
        <p>{comment}</p>
      </div>

      {recomment ? (
        <RecommentCard
          recomment={recomment}
          recommentDate={recommentDate as string}
        />
      ) : null}
      {toggleEdit ? (
        <CommentEditForm
          _id={_id}
          password={password}
          articleTitle={articleTitle}
        />
      ) : null}
    </div>
  );
}
