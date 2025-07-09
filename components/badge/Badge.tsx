import styles from "./Badge.module.scss";

type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return <div className={styles["wrapper"]}>{text}</div>;
}
