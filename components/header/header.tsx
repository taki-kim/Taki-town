"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import MainLogo from "../main-logo/main-logo";
import HeaderList from "./header-list";
import ThemeChangeButton from "./theme-change-button/theme-change-button";
import styles from "./header.module.scss";
import AdminMenu from "./admin-menu/admin-menu";
import MobileOpenButton from "./mobile/mobile-open-button";
import { headerNavList } from "../../lib/nav-list";

const MobileNavList = dynamic(() => import("./mobile/mobile-nav-list"), {
  ssr: false,
});

export default function Header({
  disableScrollHide = false,
}: {
  disableScrollHide?: boolean;
}) {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (disableScrollHide) return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 10) {
        setHidden(true);
      } else if (currentY < lastScrollY.current) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${hidden ? styles.hidden : ""}`}>
        <div className={styles["title-wrapper"]}>
          <MobileOpenButton setOpenList={setOpenMobileNav} />
          <MainLogo link="/" title="TAKI TOWN" />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navbar}>
            {headerNavList.map((item, i) => (
              <HeaderList
                key={item.listName + i}
                href={item.link}
                listName={item.listName}
                onClick={() => {
                  setOpenMobileNav(false);
                }}
              />
            ))}

            <AdminMenu />
          </ul>
        </nav>
        <ThemeChangeButton />
      </header>
      <MobileNavList openList={openMobileNav} setOpenList={setOpenMobileNav} />
    </>
  );
}
