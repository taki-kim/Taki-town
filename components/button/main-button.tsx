import styles from "./button.module.scss";
import { getButtonSizeClass } from "@/utils/button";
import useFloatingEffect from "@/hooks/useFloatingEffect";

type MainButtonProps = {
  text: string;
  size: string;
  onClick?: () => void;
};

export default function MainButton({ text, size, onClick }: MainButtonProps) {
  const { isVisible, targetRef } = useFloatingEffect<HTMLDivElement>();

  return (
    <div
      ref={targetRef}
      onClick={onClick ? onClick : undefined}
      className={`${styles["button-wrapper"]} ${
        styles[getButtonSizeClass(size) as string]
      } ${isVisible ? styles.visible : ""}`}
    >
      {text}
    </div>
  );
}
