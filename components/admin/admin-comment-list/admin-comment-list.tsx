"use client";

import { useEffect, useState } from "react";

import styles from "./admin-comment-list.module.css";
import { getAllComments } from "@/utils/api";
import AdminCommentCard from "../admin-comment-card/admin-comment-card";

export default function AdminCommentList() {
  const [commentList, setCommentList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const commentsListData = await getAllComments();
      setCommentList(commentsListData);
    };

    fetchData();
  }, []);

  return (
    <div className={styles["wrapper"]}>
      {commentList?.map((e) => (
        <AdminCommentCard
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
