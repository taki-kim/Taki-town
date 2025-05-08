"use client";

import ReactMarkdown from "react-markdown";
import { useState } from "react";
import rehypeRaw from "rehype-raw";

import styles from "./page.module.css";
import useInputs from "@/hooks/useInputs";
import "@/styles/markdown.scss";
import ArticleCreateButton from "@/components/admin/submit-button/article-create-button";

export default function CreateArticle() {
  const [form, setForm] = useInputs({
    title: "",
    summary: "",
    category: "development",
    tags: "",
    content: "",
    imageLink:
      "https://www.pixelstalk.net/wp-content/uploads/image10/Nature-4K-wallpaper-with-bamboo-forest-with-sunlight-filtering-through-serene-and-peaceful-atmosphere.jpg",
  });

  const [isPost, setIsPost] = useState(true);

  return (
    <div className={styles["body"]}>
      <div className={styles["header-wrapper"]}>
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-label"]}>글 종류</span>
          <button
            onClick={() => {
              setIsPost(true);
            }}
            style={isPost ? { backgroundColor: "pink" } : {}}
          >
            포스트
          </button>
          <button
            onClick={() => {
              setIsPost(false);
            }}
            style={!isPost ? { backgroundColor: "pink" } : {}}
          >
            프로젝트
          </button>
        </div>
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
          <span className={styles["input-label"]}>메인이미지</span>
          <input
            className={styles["input"]}
            name="imageLink"
            value={form.imageLink}
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
        {isPost ? (
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
        ) : null}
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
      <ArticleCreateButton
        formData={form}
        article={isPost ? "post" : "project"}
      />
    </div>
  );
}
