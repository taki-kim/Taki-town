import Link from "next/link";

import styles from "./header-logo.module.css";

export type HeaderLogoProps = {
  link: string;
  title: string;
};

export default function HeaderLogo({ link, title }: HeaderLogoProps) {
  return (
    <div className={styles["logo-wrapper"]}>
      <Link href={link} className={`${styles.logo} ${styles.fromLeft}`}>
        {title}
      </Link>
    </div>
  );
}
