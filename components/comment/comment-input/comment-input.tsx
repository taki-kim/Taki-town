"use client";

import { useState } from "react";

import styles from "./comment-input.module.scss";
import InputButton from "@/components/button/input-button/input-button";
import useInputs from "@/hooks/useInputs";
import { submitNewComment } from "@/utils/api";
import { getDateString } from "@/utils/date";
import { commentInputVerification } from "@/utils/verification";
import { InputVerificationState } from "@/type";
import VerificationMessage from "../verification-message/verification-message";
import ProfileImageSelector from "@/components/profile-image-selector/profile-image-selector";
import ProfileImageBox from "@/components/profile-image-box/profile-image-box";

import useSubmitNewComment from "@/hooks/useSubmitNewComment";

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
    profileImageLink: "/image/profile-image/basic.png",
  });

  const [showModal, setShowModal] = useState(false);
  const [activateAlert, setActivateAlert] =
    useState<InputVerificationState>("default");
  const [imagePath, setImagePath] = useState(form.profileImageLink);

  const { mutate } = useSubmitNewComment();

  const onClickSubmit = async (e: any) => {
    e.preventDefault();

    if (commentInputVerification({ form })) {
      const currentTime = getDateString(new Date());
      form.date = currentTime;
      form.profileImageLink = imagePath;

      mutate(form);

      setForm({
        articleTitle: articleTitle,
        date: "",
        comment: "",
        author: "",
        password: "",
        profileImageLink: "/image/profile-image/basic.png",
      });

      setActivateAlert("success");
    } else {
      setActivateAlert("input-error");
    }
  };

  return (
    <div className={`${styles.wrapper} ${openToggle ? styles.expanded : ""}`}>
      <ProfileImageSelector
        showModal={showModal}
        setShowModal={setShowModal}
        imagePath={imagePath}
        setImagePath={setImagePath}
      />
      <VerificationMessage verificationState={activateAlert} />
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
        <div
          className={`${styles["image-selector-input-wrapper"]}`}
          onClick={() => {
            setShowModal(true);
          }}
        >
          <ProfileImageBox imageLink={imagePath} size="medium" />
        </div>

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
            placeholder="코멘트 수정에 사용됩니다 (5글자 이상)"
            className={styles["input"]}
            type="password"
            autoComplete="off"
            value={form.password}
            onChange={onChange}
          />
        </div>

        <InputButton label="작성하기" onClick={onClickSubmit} />
      </div>
      {openToggle ? (
        <p className={styles["notice-string"]}>
          코멘트는 삭제가 불가하며 수정만 가능합니다
        </p>
      ) : null}
    </div>
  );
}
