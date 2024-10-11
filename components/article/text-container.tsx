"use client";

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import styles from "./text-container.module.css";
import "@/styles/markdown.css";
import useTheme from "@/hooks/useTheme";

type TextContainerProps = {
  articleText: string;
};

export default function TextContainer({ articleText }: TextContainerProps) {
  const { theme } = useTheme();

  return (
    <div className={styles["wrapper"]}>
      <Markdown
        className={"markdown-body"}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");

            return !inline && match ? (
              <SyntaxHighlighter
                style={theme === "light" ? oneLight : oneDark}
                PreTag="div"
                language={match[1]}
                {...props}
                customStyle={{
                  padding: "2rem",
                }}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {articleText}
      </Markdown>
    </div>
  );
}
