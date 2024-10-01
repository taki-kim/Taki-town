import styles from "./page.module.css";
import AdminHeader from "@/components/admin/admin-header/admin-header";
import AdminPostList from "@/components/admin/admin-post-list/admin-post-list";

export default function Admin() {
  return (
    <div className={styles["wrapper"]}>
      <AdminHeader />
      <AdminPostList />
    </div>
  );
}
