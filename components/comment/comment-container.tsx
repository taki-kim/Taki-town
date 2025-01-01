import styles from "./comment-container.module.css";
import CommentInput from "./comment-input/comment-input";

export type CommentContainerProps = {
  articleTitle: string;
};

export default function CommentContainer({
  articleTitle,
}: CommentContainerProps) {
  // 댓글 불러오기 (postName)

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Comments</h1>
      <CommentInput articleTitle={articleTitle} />
    </div>
  );
}
