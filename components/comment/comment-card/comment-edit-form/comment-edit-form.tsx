import { useState } from "react";

import styles from "./comment-edit-form.module.css";
import InputButton from "@/components/button/input-button/input-button";

export type editResponse = "default" | "success" | "error";

export default function CommentEditForm() {
  const [editResponse, setEditResponse] = useState<editResponse>("default");

  return (
    <div className={styles["wrapper"]}>
      {editResponse === "default" ? null : editResponse === "success" ? (
        <span className={styles["alert-success"]}>
          댓글 수정이 완료되었습니다.
        </span>
      ) : (
        <span className={styles["alert-error"]}>
          비밀번호가 일치하지 않습니다.
        </span>
      )}
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
