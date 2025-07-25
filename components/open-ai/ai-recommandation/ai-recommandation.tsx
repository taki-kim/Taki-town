"use client";

import { useEffect, useState } from "react";
import styles from "./ai-recommandation.module.scss";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "@/styles/markdown.scss";
import AiRecommandationLoading from "./loading/loading";
import useSearchQuery from "@/hooks/useSearchQuery";
import useGetRelatedArticles from "@/hooks/useGetRelatedArticles";

type AiRecommandtionProps = {
  articleCategory: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  articleTitle: string;
};

export default function AiRecommandation({
  articleCategory,
  showModal,
  setShowModal,
  articleTitle,
}: AiRecommandtionProps) {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";

    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  const {
    data: searchResult,
    isLoading: searchResultLoading,
    isError: searchResultError,
  } = useSearchQuery(articleTitle);

  const {
    data: articleResults,
    isLoading: articleResultsLoading,
    isError: articleResultsError,
  } = useGetRelatedArticles(searchResult, articleTitle);

  const [isModalClosing, setIsModalClosing] = useState(false);

  const handleModalClose = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setShowModal(false);
    }, 280);
  };

  if (articleCategory !== "development") return null;

  if (showModal) {
    return (
      <div
        className={styles["modal-wrapper"]}
        onClick={() => {
          handleModalClose();
        }}
      >
        <div
          className={`${styles["search-result-container"]} ${
            isModalClosing ? styles["close"] : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <>
            <div className={styles["search-result-container-header"]}>
              <h1 className={styles["header-title"]}>
                AI가 추천하는 아티클입니다
              </h1>
              <p className={styles["header-subtitle"]}>
                구글 상위 검색 결과를 기반으로 추천된 내용입니다.
              </p>
            </div>
            {(searchResultLoading || articleResultsLoading) && (
              <AiRecommandationLoading />
            )}
            {searchResult && articleResults && (
              <Markdown
                rehypePlugins={[rehypeRaw]}
                className={`${styles["result-list-container"]}`}
              >
                {articleResults}
              </Markdown>
            )}
            {(searchResultError || articleResultsError) && (
              <>검색결과가 존재하지 않습니다.</>
            )}
          </>
        </div>
      </div>
    );
  }
}
