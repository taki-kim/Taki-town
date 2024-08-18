"use client";

import { useState, useEffect } from "react";

import HeaderLogo from "./header-logo";
import HeaderList from "./heade-list";
import styles from "./header.module.css";

export default function Header() {
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollTop(false);
      } else {
        setIsScrollTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        isScrollTop
          ? styles.header
          : `${styles.header} ${styles["scrolled-detected"]}`
      }
    >
      <HeaderLogo link="/" title="TAKI-TOWN" />
      <nav className={styles.navbar}>
        <ul className={styles.navbar}>
          <HeaderList href="/posts" listName="posts" />
          <HeaderList href="/portfolit" listName="portfolio" />
          <HeaderList href="/about" listName="about" />
        </ul>
      </nav>
    </header>
  );
}
