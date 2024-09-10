import Link from "next/link";
import styles from "./button.module.css";
import { getButtonSizeClass } from "@/utils/button";

type NavButtonProps = {
  text: string;
  size: string;
  link: string;
};

export default function NavButton({ text, size, link }: NavButtonProps) {
  return (
    <Link className={styles["Link"]} href={link}>
      <div
        className={`${styles["button-wrapper"]} ${
          styles[getButtonSizeClass(size) as string]
        }`}
      >
        {text}
      </div>
    </Link>
  );
}
