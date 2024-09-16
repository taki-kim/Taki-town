import styles from "./page.module.css";
import AuthForm from "@/components/auth-form/auth-form";

export default async function Login() {
  return (
    <div className={styles["body"]}>
      <AuthForm />
    </div>
  );
}
