"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

import styles from "./ai-search-button.module.css";
import AiRecommandation from "../ai-recommandation/ai-recommandation";
import { searchQuery, relatedArticleList } from "@/utils/fetchData";

const dummyList = `<div>
<h4>
<a href="https://yozm.wishket.com/magazine/detail/2479/" target="_blank"> 프론트엔드와 SOLID 원칙 살펴보기 | 요즘IT </a>
<span> 2024.03.04 </span>
<p> SOLID 원칙의 인터페이스 분리 원칙에 대해 다루며 클라이언트가 사용하지 않는 메서드에 대해 의존하지 않도록 해야 함을 강조합니다. </p>
<h4>
</div>

<div>
<h4>
<a href="https://brick-house.tistory.com/47" target="_blank"> [SOLID 원칙] 프론트엔드의 SOLID 원칙과 과거 프로젝트에 대한 회고 ... </a>
<span> 2024.02.22 </span>
<p> 프론트엔드와 SOLID 원칙 간의 관계를 탐구하고 과거 프로젝트를 회고하며 코드 품질에 대한 성찰을 제공합니다. </p>
<h4>
</div>


<div>
<h4>
<a href="https://homebody-coder.tistory.com/21" target="_blank"> 프론트에서의 SOLID를 이해해보자 </a>
<span> 2024.03.28 </span>
<p> SOLID 원칙을 이해하고 프론트엔드 개발에서의 적용 가능성을 성찰하는 글입니다. </p>
<h4>
</div>

<div>
<h4>
<a href="https://velog.io/@haryan248/SOLID-principle-react" target="_blank"> SOLID 원칙을 React 컴포넌트에 입혀보기 </a>
<span> 2024.11.10 </span>
<p> SOLID 원칙을 React 컴포넌트에 적용하는 사례를 다루며, 외부 주입 방식에 대한 내용을 포함하고 있습니다. </p>
<h4>
</div>

<div>
<h4>
<a href="https://velog.io/@teo/Javascript%EC%97%90%EC%84%9C%EB%8F%84-SOLID-%EC%9B%90%EC%B9%99%EC%9D%B4-%ED%86%B5%ED%95%A0%EA%B9%8C" target="_blank"> Javascript에서도 SOLID 원칙이 통할까? </a>
<span> 2022.01.19 </span>
<p> JavaScript에서 SOLID 원칙의 적용 가능성을 탐구하며, 객체지향문법의 차별성과 적용의 어려움에 대해 설명합니다. </p>
<h4>
</div>`;

type AiSearchButtonProps = {
  articleTitle: string;
  articleCategory: string;
};

export default function AiSearchButton({
  articleTitle,
  articleCategory,
}: AiSearchButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    const getDataFromAi = async () => {
      const searchResult = await searchQuery(articleTitle);
      if (searchResult) {
        const result = await relatedArticleList(searchResult, articleTitle);
        setResult(result);
      } else {
        setResult("죄송합니다, 관련 검색결과가 존재하지 않습니다.");
      }
    };

    if (showModal && !result) {
      getDataFromAi();
    }
  }, [showModal]);

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
          aiRecommandationResult={result}
        />
      ) : null}
    </div>
  );
}
