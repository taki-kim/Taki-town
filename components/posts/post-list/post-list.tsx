import styles from "./post-list.module.css";
import CardList from "../post-card/post-card";

const cardData = [
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8HVyz7dev1vvkPXA4RIV0Ii1qHSfJmFcHg&s",
    title: "JavaScript의 비동기 처리",
    summary:
      "JavaScript에서 비동기 처리 방식인 콜백, 프로미스, async/await에 대해 알아봅니다.",
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8HVyz7dev1vvkPXA4RIV0Ii1qHSfJmFcHg&s",
    title: "React의 상태 관리",
    summary:
      "React의 상태 관리 기법인 useState, useReducer, 그리고 Redux를 다룹니다.",
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8HVyz7dev1vvkPXA4RIV0Ii1qHSfJmFcHg&s",
    title: "TypeScript: 왜 사용하는가?",
    summary:
      "TypeScript의 타입 시스템이 코드 안정성과 개발 생산성에 미치는 영향에 대해 설명합니다.",
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8HVyz7dev1vvkPXA4RIV0Ii1qHSfJmFcHg&s",
    title: "Node.js 서버 구축",
    summary: "Node.js를 활용한 서버 구축 과정과 주요 모듈에 대해 다룹니다.",
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8HVyz7dev1vvkPXA4RIV0Ii1qHSfJmFcHg&s",
    title: "CSS Flexbox와 Grid",
    summary:
      "CSS에서 레이아웃을 구성하는 두 가지 강력한 도구인 Flexbox와 Grid에 대해 알아봅니다.",
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8HVyz7dev1vvkPXA4RIV0Ii1qHSfJmFcHg&s",
    title: "Next.js의 서버 사이드 렌더링",
    summary:
      "Next.js에서 제공하는 서버 사이드 렌더링과 정적 사이트 생성 방식의 차이를 이해합니다.",
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8HVyz7dev1vvkPXA4RIV0Ii1qHSfJmFcHg&s",
    title: "Git과 GitHub 기본 사용법",
    summary: "Git과 GitHub를 활용한 버전 관리 및 협업 도구에 대해 알아봅니다.",
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8HVyz7dev1vvkPXA4RIV0Ii1qHSfJmFcHg&s",
    title: "REST API와 GraphQL 비교",
    summary: "REST API와 GraphQL의 차이점과 각각의 장단점을 설명합니다.",
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8HVyz7dev1vvkPXA4RIV0Ii1qHSfJmFcHg&s",
    title: "모바일 앱 개발: Flutter",
    summary:
      "Flutter를 이용한 크로스 플랫폼 모바일 앱 개발의 장점과 특징을 소개합니다.",
  },
];

export default function PostList() {
  return (
    <div className={styles["wrapper"]}>
      {cardData.map((e) => (
        <CardList
          key={e.title}
          postLink={e.title}
          imageLink={e.imageLink}
          title={e.title}
          summary={e.summary}
        />
      ))}
    </div>
  );
}
