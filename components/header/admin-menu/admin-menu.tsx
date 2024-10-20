"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";

import styles from "./admin-menu.module.css";

export default function AdminMenu() {
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      signOut();
    }
  }, []);

  if (status === "authenticated") {
    return (
      <div className={styles["wrapper"]}>
        <div className={styles["button"]}>
          <Link className={styles["link"]} href="/admin">
            Admin
          </Link>
        </div>
        <div
          className={styles["button"]}
          onClick={() => {
            signOut();
          }}
        >
          Log-out
        </div>
      </div>
    );
  } else {
    return "";
  }
}
