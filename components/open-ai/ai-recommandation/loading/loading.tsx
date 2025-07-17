import { CSSProperties } from "react";
import { GridLoader } from "react-spinners";

import styles from "./loading.module.css";

const override: CSSProperties = {
  display: "block",
  paddingBottom: "3rem",
  borderColor: "red",
};

export default function AiRecommandationLoading() {
  return (
    <div className={styles["loading-wrapper"]}>
      <div className={styles["loading-spinner-wrapper"]}>
        <GridLoader
          color={`var(--background-10)`}
          size={25}
          cssOverride={override}
          aria-label="Loading Spinner"
          speedMultiplier={0.7}
        />
      </div>
      <p className={styles["loading-text"]}>
        AI가 구글 상위 검색 결과를 바탕으로 추천 아티클을 선별하고 있습니다.{" "}
        <br />
        아티클의 선별 작업에 15초 이상이 소요될 수 있습니다.
      </p>
    </div>
  );
}
