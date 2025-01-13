import { useState } from "react";

import styles from "./comment-edit-form.module.css";
import InputButton from "@/components/button/input-button/input-button";
import VerificationMessage from "../../verification-message/verification-message";
import { InputVerificationState } from "@/type";
import { CommentProps } from "@/type";
import useInputs from "@/hooks/useInputs";
import { editComment } from "@/utils/fetchData";
import { useCommentRefetch } from "@/hooks/useCommentRefetch";

export default function CommentEditForm({
  _id,
  password,
}: Partial<CommentProps>) {
  const [editResponse, setEditResponse] =
    useState<InputVerificationState>("default");

  const [form, onChange] = useInputs({
    id: _id,
    password: password,
    comment: "",
    passwordInput: "",
  });

  const { refreshComments } = useCommentRefetch();

  const onClickSubmit = async (form: any, e: any) => {
    e.preventDefault();

    if (form.comment && form.passwordInput) {
      const result = await editComment(form);

      if (result.code === 200) {
        setEditResponse("success");
        refreshComments();
      }
      if (result.code === 401) {
        setEditResponse("password-error");
      }
      if (result.code === 500) {
        setEditResponse("server-error");
      }
    } else {
      setEditResponse("input-error");
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <VerificationMessage verificationState={editResponse} />
      <textarea
        className={styles["textarea"]}
        placeholder="수정할 내용을 작성하세요"
        name="comment"
        value={form.comment}
        onChange={onChange}
      />
      <div className={styles["footer"]}>
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-label"]}>Password</span>
          <input
            type="password"
            className={styles["input"]}
            placeholder="작성 시 설정한 비밀번호를 입력하세요"
            name="passwordInput"
            value={form.passwordInput}
            onChange={onChange}
          />
        </div>
        <InputButton
          label="수정하기"
          onClick={(e) => {
            onClickSubmit(form, e);
          }}
        />
      </div>
    </div>
  );
}
