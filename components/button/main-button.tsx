import styles from "./button.module.scss";
import { getButtonSizeClass } from "@/utils/button";

type MainButtonProps = {
  text: string;
  size: string;
  color?: string | undefined;
  onClick?: () => void;
};

export default function MainButton({
  text,
  size,
  color,
  onClick,
}: MainButtonProps) {
  return (
    <div
      onClick={onClick ? onClick : undefined}
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
