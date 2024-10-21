"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import ReactMarkdown from "react-markdown";
import styles from "./page.module.css";
import useInputs from "@/hooks/useInputs";
import "@/styles/markdown.css";
import ProjectEditButton from "@/components/admin/submit-button/project-edit-button";

export default function EditPost() {
  const projectTitle = usePathname()?.split("/")[4];
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
        const response = await fetch(`/api/project/get/${projectTitle}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        setFormData({
          _id: result._id || "",
          title: result.title || "",
          summary: result.summary || "",
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
      <ProjectEditButton formData={form} />
    </div>
  );
}
