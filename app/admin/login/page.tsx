"use client";
import { ChangeEvent, useState } from "react";

import styles from "./page.module.css";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function onSubmit(e: any) {
    e.preventDefault();
    alert(`${id} ${pw}`);
  }

  return (
    <div className={styles["body"]}>
      <div className={styles["login-wrapper"]}>
        <header className={styles["header"]}>My Account</header>
        <form className={styles["form"]}>
          <div className={styles["text-container"]}>
            <span className={styles["label"]}>ID</span>
            <input
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles["text-container"]}>
            <span className={styles["label"]}>PW</span>
            <input
              type="password"
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
            ></input>
          </div>
          <button type="submit" className={styles["button"]} onClick={onSubmit}>
            login
          </button>
        </form>
      </div>
    </div>
  );
}
