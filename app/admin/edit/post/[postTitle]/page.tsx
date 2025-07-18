"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import ReactMarkdown from "react-markdown";
import styles from "./page.module.scss";
import useInputs from "@/hooks/useInputs";
import "@/styles/markdown.scss";
import PostEditButton from "@/components/admin/submit-button/post-edit-button";
import rehypeRaw from "rehype-raw";

export default function EditPost() {
  const postTitle = usePathname()?.split("/")[4];
  const [form, setForm, setFormData] = useInputs({
    _id: "",
    title: "",
    summary: "",
    category: "",
    tags: "",
    content: "",
    imageLink: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/post/get/${postTitle}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        setFormData({
          _id: result._id || "",
          title: result.title || "",
          summary: result.summary || "",
          category: result.category || "",
          tags: result.tags || "",
          content: result.content || "",
          imageLink: result.imageLink || "",
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

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
          <span className={styles["input-label"]}>태그</span>
          <input
            className={styles["input"]}
            name="tags"
            value={form.tags}
            onChange={setForm}
          ></input>
        </div>
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-label"]}>메인이미지</span>
          <input
            className={styles["input"]}
            name="imageLink"
            value={form.imageLink}
            onChange={setForm}
          ></input>
        </div>
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-label"]}>카테고리</span>
          <select
            className={styles["select-box"]}
            name="category"
            onChange={setForm}
            value={form.category}
          >
            <option value="development">development</option>
            <option value="design">design</option>
            <option value="work_log">work_log</option>
            <option value="philosophy">philosophy</option>
            <option value="etc">etc</option>
          </select>
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
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          className={`${styles["preview"]} markdown-body`}
        >
          {form.content}
        </ReactMarkdown>
      </div>
      <PostEditButton formData={form} />
    </div>
  );
}
