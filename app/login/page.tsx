"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

import styles from "./page.module.scss";
import AuthForm from "@/components/auth-form/auth-form";

export default function Login() {
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") window.location.href = "/admin";
  }, [status]);

  return (
    <div className={styles["body"]}>
      <AuthForm />
    </div>
  );
}
