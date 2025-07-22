"use client";

import styles from "./MobileNavList.module.scss";
import HeaderList from "../HeaderList";
import { headerNavList } from "@/lib/nav-list";

type MobileNavListProps = {
  openList: boolean;
  setOpenList: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNavList({
  openList,
  setOpenList,
}: MobileNavListProps) {
  return (
    <>
      <div
        className={`${styles["background"]} ${
          openList ? styles["background-open"] : ""
        }`}
        onClick={() => {
          setOpenList(false);
        }}
      />
      <ul
        className={`${styles["list-wrapper"]} ${
          openList ? styles["menu-list-open"] : ""
        }`}
      >
        {headerNavList.map((item, i) => (
          <HeaderList
            key={item.listName + i}
            href={item.link}
            listName={item.listName}
            onClick={() => {
              setOpenList(false);
            }}
          />
        ))}
      </ul>
    </>
  );
}
