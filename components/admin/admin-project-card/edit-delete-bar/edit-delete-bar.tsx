import styles from "./edit-delete-bar.module.scss";
import MainButton from "@/components/button/main-button";
import NavButton from "@/components/button/NavButton";

type EditDeleteBarProps = {
  projectTitle: string;
};

export default function EditDeleteBar({ projectTitle }: EditDeleteBarProps) {
  async function deletePost() {
    try {
      const response = await fetch(`/api/project/delete/${projectTitle}`, {
        method: "DELETE",
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
        link={`/admin/edit/project/${projectTitle}`}
      />
      <MainButton text="삭제" size="small" onClick={deletePost} />
    </div>
  );
}
