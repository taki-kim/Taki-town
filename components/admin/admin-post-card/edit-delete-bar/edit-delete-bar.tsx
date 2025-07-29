import styles from "./edit-delete-bar.module.scss";
import MainButton from "@/components/button/main-button";
import NavButton from "@/components/button/NavButton";
import { deletePost } from "@/utils/api";

type EditDeleteBarProps = {
  postTitle: string;
  postCategory: string;
};

export default function EditDeleteBar({
  postTitle,
  postCategory,
}: EditDeleteBarProps) {
  const handleDeletePost = async () => {
    await deletePost(postTitle, postCategory);
  };

  return (
    <div className={styles["wrapper"]}>
      <NavButton
        text="수정"
        size="small"
        link={`/admin/edit/post/${postTitle}`}
      />

      <MainButton text="삭제" size="small" onClick={handleDeletePost} />
    </div>
  );
}
