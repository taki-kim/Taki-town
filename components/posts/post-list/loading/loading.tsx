import { PuffLoader } from "react-spinners";

import styles from "./loading.module.css";

export default function PostListLoading() {
  return (
    <div className={styles["wrapper"]}>
      <PuffLoader
        color={`var(--background-10-r)`}
        aria-label="Loading Spinner"
      />
    </div>
  );
}
