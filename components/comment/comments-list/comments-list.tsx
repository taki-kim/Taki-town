"use client";

import useGetComments from "@/hooks/useGetComments";
import styles from "./comments-list.module.css";
import CommentCard from "../comment-card/comment-card";
import { sortByNewestComment } from "@/utils/comment";

type CommentsListProps = {
  articleTitle: string;
  newestFirst?: boolean;
};

export default function CommentsList({
  articleTitle,
  newestFirst,
}: CommentsListProps) {
  const { data: commentsList } = useGetComments(articleTitle);

  if (newestFirst) {
    return (
      <div className={styles["wrapper"]}>
        {sortByNewestComment(commentsList).map((e) => (
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
            articleTitle={e.articleTitle}
          />
        ))}
      </div>
    );
  } else {
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
            articleTitle={e.articleTitle}
          />
        ))}
      </div>
    );
  }
}
