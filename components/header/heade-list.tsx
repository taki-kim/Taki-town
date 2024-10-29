"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header-list.module.css";
import { checkIsCurrentPath } from "@/utils/header";

export type HeaderListProps = {
  href: string;
  listName: string;
};

export default function HeaderList({ href, listName }: HeaderListProps) {
  const path = usePathname();

  return (
    <li className={styles.list}>
      <Link
        className={
          checkIsCurrentPath(path as string, listName)
            ? `${styles["list-item"]} ${styles.clicked}`
            : `${styles["list-item"]}`
        }
        href={href}
      >
        {listName}
      </Link>
    </li>
  );
}
