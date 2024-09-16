"use client";

import { signOut, useSession } from "next-auth/react";

import styles from "./log-out-button.module.css";

export default function LogOutButton() {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <div
        className={styles["button"]}
        onClick={() => {
          signOut();
        }}
      >
        Log-out
      </div>
    );
  }
}
