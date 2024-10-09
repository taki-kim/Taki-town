"use client";

import ReactMarkdown from "react-markdown";

import styles from "./page.module.css";
import useInputs from "@/hooks/useInputs";
import "@/styles/markdown.css";
import PostCreateButton from "@/components/admin/submit-button/post-create-button";

export default function CreatePost() {
  const [form, setForm] = useInputs({
    title: "",
    summary: "",
    category: "",
    tags: "",
    content: "",
  });

  return (
    <div className={styles["body"]}>
      <div className={styles["header-wrapper"]}>
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-label"]}>제목</span>
          <input
            className={styles["input"]}
            name="title"
            value={form.title}
            onChange={setForm}
          ></input>
        </div>
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-label"]}>개요</span>
          <input
            className={styles["input"]}
            name="summary"
            value={form.summary}
            onChange={setForm}
          ></input>
        </div>
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-label"]}>카테고리</span>
          <input
            className={styles["input"]}
            name="category"
            value={form.category}
            onChange={setForm}
          ></input>
        </div>
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-label"]}>태그</span>
          <input
            className={styles["input"]}
            name="tags"
            value={form.tags}
            onChange={setForm}
          ></input>
        </div>
      </div>
      <div className={styles["editor-wrapper"]}>
        <textarea
          className={styles["textarea"]}
          id="content"
          name="content"
          value={form.content}
          onChange={setForm}
        ></textarea>
        <ReactMarkdown className={`${styles["preview"]} markdown-body`}>
          {form.content}
        </ReactMarkdown>
      </div>
      <PostCreateButton formData={form} />
    </div>
  );
}
