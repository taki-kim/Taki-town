import styles from "./layout.module.scss";
import PageGuard from "@/components/page-guard/page-guard";
import { generateAdminMetadata } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateAdminMetadata({ page: "admin" });

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles["body"]}>
      <PageGuard>{children}</PageGuard>
    </div>
  );
}
