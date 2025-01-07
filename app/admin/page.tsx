"use client";

import { useState } from "react";

import styles from "./page.module.css";
import AdminHeader from "@/components/admin/admin-header/admin-header";
import AdminPostList from "@/components/admin/admin-post-list/admin-post-list";
import AdminProjectList from "@/components/admin/admin-project-list/admin-project-list";
import AdminCommentList from "@/components/admin/admin-comment-list/admin-comment-list";

type AdminMenu = "post" | "project" | "comment";

export default function Admin() {
  const renderContent = () => {
    switch (selectAdminMenu) {
      case "post":
        return <AdminPostList />;
      case "project":
        return <AdminProjectList />;
      case "comment":
        return <AdminCommentList />;
      default:
        return <AdminPostList />;
    }
  };

  const [selectAdminMenu, setSelectAdminMenu] = useState<AdminMenu>("post");

  return (
    <div className={styles["wrapper"]}>
      <div>
        <button
          onClick={() => {
            setSelectAdminMenu("post");
          }}
        >
          포스트
        </button>
        <button
          onClick={() => {
            setSelectAdminMenu("project");
          }}
        >
          프로젝트
        </button>
        <button
          onClick={() => {
            setSelectAdminMenu("comment");
          }}
        >
          댓글
        </button>
      </div>

      <AdminHeader />
      {renderContent()}
    </div>
  );
}
