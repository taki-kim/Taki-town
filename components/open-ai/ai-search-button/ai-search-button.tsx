"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

import styles from "./ai-search-button.module.scss";
import AiRecommandation from "../ai-recommandation/ai-recommandation";

type AiSearchButtonProps = {
  articleTitle: string;
  articleCategory: string;
};

export default function AiSearchButton({
  articleTitle,
  articleCategory,
}: AiSearchButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const onClickButton = async () => {
    setShowModal((prev) => !prev);
  };

  if (articleCategory !== "development") return;

  return (
    <div>
      <button
        className={styles["wrapper"]}
        onClick={() => {
          onClickButton();
        }}
      >
        <FontAwesomeIcon icon={faSearchengin} />
      </button>
      {showModal ? (
        <AiRecommandation
          articleCategory={articleCategory}
          showModal={showModal}
          setShowModal={setShowModal}
          articleTitle={articleTitle}
        />
      ) : null}
    </div>
  );
}
