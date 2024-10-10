import styles from "./layout.module.css";
import PageGuard from "@/components/page-guard/page-guard";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles["body"]}>
      {/* {children} */}
      <PageGuard>{children}</PageGuard>
    </div>
  );
}
