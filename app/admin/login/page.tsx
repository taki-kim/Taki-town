import { signIn } from "next-auth/react";

import styles from "./page.module.css";
import AuthForm from "@/components/auth-form/auth-form";

export async function onSubmit(id: string, pw: string) {
  const result = await signIn("credentials", {
    redirect: false,
    id: id,
    password: pw,
  });

  console.log(result);
}

export default async function Login() {
  return (
    <div className={styles["body"]}>
      <AuthForm />
    </div>
  );
}
