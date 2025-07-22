"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./HeaderList.module.scss";
import { checkIsCurrentPath } from "@/utils/header";

export type HeaderListProps = {
  href: string;
  listName: string;
  onClick?: () => void;
};

export default function HeaderList({
  href,
  listName,
  onClick,
}: HeaderListProps) {
  const path = usePathname();

  return (
    <li className={styles.list} onClick={onClick}>
      <Link
        className={
          checkIsCurrentPath(path as string, listName)
            ? `${styles["list-item"]} ${styles.clicked}`
            : `${styles["list-item"]} ${styles["to-right-underline"]}`
        }
        href={href}
      >
        {listName}
      </Link>
    </li>
  );
}
