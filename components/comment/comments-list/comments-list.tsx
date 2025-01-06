import { CommentProps } from "@/type";
import styles from "./comments-list.module.css";
import CommentCard from "../comment-card/comment-card";

type CommentsListProps = {
  commentsList: Partial<CommentProps>[];
};

export default function CommentsList({ commentsList }: CommentsListProps) {
  return (
    <div className={styles["wrapper"]}>
      {commentsList.map((e) => (
        <CommentCard
          key={`${e._id}`}
          _id={e._id}
          author={e.author}
          date={e.date}
          comment={e.comment}
          recomment={e.recomment}
          recommentDate={e.recommentDate}
          password={e.password}
          profileImageLink={e.profileImageLink}
        />
      ))}
    </div>
  );
}
