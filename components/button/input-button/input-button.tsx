import styles from "./input-button.module.css";

export type buttonSize = "small" | "medium" | "large";

export type InputButtonProps = {
  label: string;
  size?: buttonSize;
  onClick?: (e: any) => void;
};

export default function InputButton({
  label,
  size,
  onClick,
}: InputButtonProps) {
  return (
    <button className={styles["button"]} onClick={onClick}>
      {label}
    </button>
  );
}
