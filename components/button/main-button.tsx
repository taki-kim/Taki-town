import styles from "./main-button.module.css";

type MainButtonProps = {
  text: string;
  size: string;
};

function getButtonSizeClass(size: string) {
  if (size === "large") return "button-wrapper-large";
  if (size === "medium") return "button-wrapper-medium";
  if (size === "small") return "button-wrapper-small";
}

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
