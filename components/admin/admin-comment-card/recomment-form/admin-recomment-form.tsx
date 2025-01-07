"use client";

import styles from "./admin-recomment-form.module.css";
import useInputs from "@/hooks/useInputs";
import InputButton from "@/components/button/input-button/input-button";
import { getDateString } from "@/utils/date";
import { updateRecomment } from "@/utils/fetchData";
import { CommentProps } from "@/type";

export default function AdminRecommentForm({ _id }: Partial<CommentProps>) {
  const [form, onChange, setForm] = useInputs({
    recomment: "",
    recommentDate: "",
  });

  const onClickSubmit = async (form: any, e: any) => {
    const currentTime = getDateString(new Date());
    form.recommentDate = currentTime;

    await updateRecomment(_id as string, form);

    setForm({
      recomment: "",
      recommmentDate: "",
    });
  };

  return (
    <div className={styles["wrapper"]}>
      <textarea
        className={styles["textarea"]}
        placeholder="답변 내용을 작성하세요"
        name="recomment"
        value={form.recomment}
        onChange={onChange}
      />
      <div className={styles["footer"]}>
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
