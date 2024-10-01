import styles from "./edit-delete-bar.module.css";
import MainButton from "@/components/button/main-button";
import NavButton from "@/components/button/nav-button";

type EditDeleteBarProps = {
  postTitle: string;
};

export default function EditDeleteBar({ postTitle }: EditDeleteBarProps) {
  function deletePost() {
    console.log(postTitle);
  }
  return (
    <div className={styles["wrapper"]}>
      <NavButton text="수정" size="small" link="/" />
      <MainButton text="삭제" size="small" onClick={deletePost} />
    </div>
  );
}
