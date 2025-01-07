"use client";
import { useState } from "react";
import Link from "next/link";

import styles from "./admin-comment-card.module.css";
import { CommentProps } from "@/type";
import ProfileImageBox from "@/components/profile-image-box/profile-image-box";
import RecommentCard from "@/components/comment/recomment-card/recomment-card";
import AdminRecommentForm from "./recomment-form/admin-recomment-form";

export default function AdminCommentCard({
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
        <div className={styles["header-menu-wrapper"]}>
          <Link
            className={styles["menu-button"]}
            href={`/post/${articleTitle}`}
          >
            본문
          </Link>
          <button
            className={styles["menu-button"]}
            onClick={() => {
              setToggleEdit((prev) => !prev);
            }}
          >
            {toggleEdit ? "닫기" : "답글"}
          </button>
        </div>
      </div>

      <div
        style={{ whiteSpace: "pre-wrap" }}
        className={styles["comment-wrapper"]}
      >
        <p>{comment}</p>
      </div>

      {recomment ? (
        <RecommentCard
          recomment={recomment}
          recommentDate={recommentDate as string}
        />
      ) : null}
      {toggleEdit ? <AdminRecommentForm _id={_id} password={password} /> : null}
    </div>
  );
}
