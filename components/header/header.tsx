"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import MainLogo from "../main-logo/main-logo";
import HeaderList from "./header-list";
import ThemeChangeButton from "./theme-change-button/theme-change-button";
import styles from "./header.module.scss";
import AdminMenu from "./admin-menu/admin-menu";
import MobileOpenButton from "./mobile/mobile-open-button";
import { headerNavList } from "@/lib/nav-list";

const MobileNavList = dynamic(() => import("./mobile/mobile-nav-list"), {
  ssr: false,
});

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <>
      <header className={styles.header}>
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
