import styles from "./button.module.css";
import { getButtonSizeClass } from "@/utils/button";

type MainButtonProps = {
  text: string;
  size: string;
  color?: string | undefined;
};

export default function MainButton({ text, size, color }: MainButtonProps) {
  return (
    <div
      className={`${styles["button-wrapper"]} ${
        styles[getButtonSizeClass(size) as string]
      } `}
      style={
        color === "light"
          ? { color: "lightgray", border: "1px solid lightgray" }
          : color === "dark"
          ? { color: "#1a2140", border: "1px solid #1a2140" }
          : {}
      }
    >
      {text}
    </div>
  );
}
