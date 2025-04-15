import { PuffLoader } from "react-spinners";

import styles from "./loading.module.css";

export default function PostListLoading() {
  return (
    <div className={styles["wrapper"]}>
      <PuffLoader
        color={`var(--primary-color-r)`}
        aria-label="Loading Spinner"
      />
    </div>
  );
}
