"use client";

import { ReactNode } from "react";
import { useSession } from "next-auth/react";

import styles from "./page-gaurd.module.css";
import NavButton from "../button/nav-button";

export default function PageGuard({ children }: { children: ReactNode }) {
  const { status } = useSession();

  if (status === "authenticated") return <div>{children}</div>;
  else if (status === "loading")
    return <div className={styles["wrapper"]}>Loading...</div>;
  else if (status === "unauthenticated")
    return (
      <div className={styles["wrapper"]}>
        <p className={styles["text-wrapper"]}>접근 불가한 페이지 입니다.</p>
        <NavButton text="홈페이지로" size="medium" link="/" />
      </div>
    );
}
