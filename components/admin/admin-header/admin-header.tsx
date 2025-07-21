import styles from "./admin-header.module.scss";
import NavButton from "@/components/button/NavButton";

export default function AdminHeader() {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Admin Page</h1>
      <div className={styles["button-wrapper"]}>
        <NavButton text="글작성" size="small" link="/admin/create-article" />
      </div>
    </div>
  );
}
