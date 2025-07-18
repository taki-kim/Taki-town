import styles from "./verification-message.module.scss";
import { InputVerificationState } from "@/type";

export default function VerificationMessage({
  verificationState,
}: {
  verificationState: InputVerificationState;
}) {
  switch (verificationState) {
    case "success":
      return (
        <p className={`${styles["default"]} ${styles.success}`}>
          댓글이 업데이트 되었습니다
        </p>
      );
    case "input-error":
      return (
        <p className={`${styles["default"]} ${styles.error}`}>
          작성 양식을 바르게 입력해주세요
        </p>
      );
    case "password-error":
      return (
        <p className={`${styles["default"]} ${styles.error}`}>
          비밀번호가 일치하지 않습니다
        </p>
      );
    case "server-error":
      return (
        <p className={`${styles["default"]} ${styles.error}`}>
          서버 응답에 지연이 발생했습니다
        </p>
      );
    default:
      return <p className={styles["default"]} />;
  }
}
