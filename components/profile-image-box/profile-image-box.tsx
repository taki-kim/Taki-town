import styles from "./profile-image-box.module.css";

type ProfileImageSize = "small" | "medium" | "big";

type ProfileImageBoxProps = {
  imageLink: string;
  size: ProfileImageSize;
};

export default function ProfileImageBox({
  imageLink,
  size,
}: ProfileImageBoxProps) {
  return (
    <div className={styles["wrapper"]}>
      <img
        className={`${styles["circular-image"]} ${styles[size]}`}
        src={imageLink}
      />
    </div>
  );
}
