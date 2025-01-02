"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./comment-card.module.css";
import { CommentProps } from "@/type";
import CommentEditForm from "./comment-edit-form/comment-edit-form";
import RecommentCard from "../recomment-card/recomment-card";

export default function CommentCard({
  author,
  date,
  comment,
  recomment,
  recommentDate,
}: CommentProps) {
  const [toggleEdit, setToggleEdit] = useState(false);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <div className={styles["header-profile-wrapper"]}>
          <FontAwesomeIcon
            icon={faUser}
            style={{
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "var(--highlight-color-2)",
              color: "white",
            }}
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

      <div
        style={{ whiteSpace: "pre-wrap" }}
        className={styles["comment-wrapper"]}
      >
        {comment}
      </div>
      {recomment ? (
        <RecommentCard
          recomment={recomment}
          recommentDate={recommentDate as string}
        />
      ) : null}
      {toggleEdit ? <CommentEditForm /> : null}
    </div>
  );
}
