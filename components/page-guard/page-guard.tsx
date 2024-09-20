"use client";

import { ReactNode } from "react";
import { useSession } from "next-auth/react";

import styles from "./page-gaurd.module.css";

export default function PageGuard({ children }: { children: ReactNode }) {
  const { status } = useSession();

  if (status === "authenticated")
    return <div style={{ width: "100%" }}>{children}</div>;
  else if (status === "loading")
    return <div className={styles["wrapper"]}>Loading...</div>;
  else if (status === "unauthenticated") {
    window.location.href = "/login";
  }
}
