import { useState } from "react";

import styles from "./comment-edit-form.module.css";
import InputButton from "@/components/button/input-button/input-button";
import VerificationMessage from "../../verification-message/verification-message";
import { InputVerificationState } from "@/type";
import { CommentProps } from "@/type";

export default function CommentEditForm({ _id }: Partial<CommentProps>) {
  const [editResponse, setEditResponse] =
    useState<InputVerificationState>("default");

  return (
    <div className={styles["wrapper"]}>
      <VerificationMessage verificationState={editResponse} />
      <textarea
        className={styles["textarea"]}
        placeholder="수정할 내용을 작성하세요"
      />
      <div className={styles["footer"]}>
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-label"]}>Password</span>
          <input
            type="password"
            className={styles["input"]}
            placeholder="작성 시 설정한 비밀번호를 입력하세요"
          />
        </div>
        <InputButton label="수정하기" />
      </div>
    </div>
  );
}
