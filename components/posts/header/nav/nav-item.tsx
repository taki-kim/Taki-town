"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-item.module.css";
import { getCategoryString } from "@/utils/postPage";

type NavItem = {
  navTitle: string;
  navLink: string;
  categoryId: string;
};

export default function NavItem({ navTitle, navLink, categoryId }: NavItem) {
  const path = usePathname();

  return (
    <Link
      href={navLink}
      className={styles["wrapper"]}
      style={
        categoryId === getCategoryString(path as string)
          ? { fontWeight: 700 }
          : {}
      }
    >
      {navTitle}
    </Link>
  );
}
