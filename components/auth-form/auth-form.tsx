"use client";
import { FormEvent, useState } from "react";

import styles from "./auth-form.module.css";
import { onSubmit } from "@/app/admin/login/page";

export default function AuthForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function handleClick(e: any) {
    e.preventDefault();
    onSubmit(id, pw);
  }
  return (
    <div className={styles["login-wrapper"]}>
      <header className={styles["header"]}>My Account</header>
      <form className={styles["form"]}>
        <div className={styles["text-container"]}>
          <span className={styles["label"]}>ID</span>
          <input
            name="id"
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles["text-container"]}>
          <span className={styles["label"]}>PW</span>
          <input
            name="password"
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          ></input>
        </div>
        <button
          type="submit"
          className={styles["button"]}
          onClick={handleClick}
        >
          login
        </button>
      </form>
    </div>
  );
}
