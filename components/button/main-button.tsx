import styles from "./button.module.css";
import { getButtonSizeClass } from "@/utils/button";

type MainButtonProps = {
  text: string;
  size: string;
};

export default function MainButton({ text, size }: MainButtonProps) {
  return (
    <div
      className={`${styles["button-wrapper"]} ${
        styles[getButtonSizeClass(size) as string]
      }`}
    >
      {text}
    </div>
  );
}
