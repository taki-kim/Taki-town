import styles from "./edit-delete-bar.module.css";
import MainButton from "@/components/button/main-button";
import NavButton from "@/components/button/NavButton";

type EditDeleteBarProps = {
  postTitle: string;
  postCategory: string;
};

export default function EditDeleteBar({
  postTitle,
  postCategory,
}: EditDeleteBarProps) {
  async function deletePost() {
    try {
      const response = await fetch(`/api/post/delete/${postTitle}`, {
        method: "DELETE",
        body: JSON.stringify(postCategory),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete the post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }
  return (
    <div className={styles["wrapper"]}>
      <NavButton
        text="수정"
        size="small"
        link={`/admin/edit/post/${postTitle}`}
      />
      <MainButton text="삭제" size="small" onClick={deletePost} />
    </div>
  );
}
