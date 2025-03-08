import styles from "./layout.module.css";
import { generatePageMetadata } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  pageCategory: "Guestbook",
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles["body"]}>{children}</div>;
}
