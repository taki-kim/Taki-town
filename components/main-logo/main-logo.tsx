import Link from "next/link";

import styles from "./main-logo.module.scss";

export type MainLogoProps = {
  link: string;
  title: string;
};

export default function MainLogo({ link, title }: MainLogoProps) {
  return (
    <div className={styles["logo-wrapper"]}>
      <Link href={link} className={`${styles.logo} ${styles.fromLeft}`}>
        {title}
      </Link>
    </div>
  );
}
