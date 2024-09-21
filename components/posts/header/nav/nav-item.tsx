import Link from "next/link";

import styles from "./nav-item.module.css";

type NavItem = {
  navTitle: string;
  navLink: string;
};

export default function NavItem({ navTitle, navLink }: NavItem) {
  return (
    <Link href={navLink} className={styles["wrapper"]}>
      {navTitle}
    </Link>
  );
}
