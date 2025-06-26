"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import styles from "./footer.module.css";
import MainLogo from "../main-logo/main-logo";

export default function Footer() {
  return (
    <footer className={styles["wrapper"]}>
      <MainLogo title="TAKI TOWN" link="/" />

      <p className={styles["text-wrapper"]}>
        Writing about my development and interests
      </p>
      <div className={styles["nav-wrapper"]}>
        <a
          href="https://github.com/taki-kim"
          target="_blank"
          className={styles["nav-button"]}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <Link href="/about" className={styles["nav-button"]}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </Link>
      </div>
      <div className={styles["email-wrapper"]}>
        <span className={styles["email-nav"]}>contact :</span>
        <span className={styles["email-text"]}>tukee.k@gmail.com</span>
      </div>
      <address className={styles["copyright"]}>
        &copy; 2024. Taki all rights reserved.
      </address>
    </footer>
  );
}
