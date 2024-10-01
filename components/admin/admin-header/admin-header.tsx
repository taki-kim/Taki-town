import styles from "./admin-header.module.css";
import NavButton from "@/components/button/nav-button";

export default function AdminHeader() {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Admin Page</h1>
      <div className={styles["button-wrapper"]}>
        <NavButton text="글작성" size="small" link="/admin/create-post" />
      </div>
    </div>
  );
}
