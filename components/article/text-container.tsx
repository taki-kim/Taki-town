"use client";

import ReactMarkdwon from "react-markdown";

import styles from "./text-container.module.css";
import "@/styles/markdown.css";

type TextContainerProps = {
  articleText: string;
};

export default function TextContainer({ articleText }: TextContainerProps) {
  return (
    <div className={styles["wrapper"]}>
      <ReactMarkdwon className="markdown-body">{articleText}</ReactMarkdwon>
    </div>
  );
}
