"use client";

import { useState } from "react";

import styles from "./page.module.css";
import AdminHeader from "@/components/admin/admin-header/admin-header";
import AdminPostList from "@/components/admin/admin-post-list/admin-post-list";
import AdminProjectList from "@/components/admin/admin-project-list/admin-project-list";

export default function Admin() {
  const [selectedArticle, setSelectedArticle] = useState("post");
  return (
    <div className={styles["wrapper"]}>
      <div>
        <button
          onClick={() => {
            setSelectedArticle("post");
          }}
        >
          포스트
        </button>
        <button
          onClick={() => {
            setSelectedArticle("project");
          }}
        >
          프로젝트
        </button>
      </div>

      <AdminHeader />
      {selectedArticle === "post" ? <AdminPostList /> : <AdminProjectList />}
    </div>
  );
}
