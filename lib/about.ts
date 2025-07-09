export const strengthList = [
  {
    image: "/about-page/images/strength_ux.jpg",
    title: "쾌적한 사용자 경험",
    description:
      "세심한 관찰과 정량적 지표를 바탕으로 UX를 개선합니다. 불편을 최소화하고, 사용자가 자연스럽게 몰입할 수 있는 경험을 만듭니다.",
  },
  {
    image: "/about-page/images/strength_ui.jpg",
    title: "신뢰할 수 있는 UI 품질",
    description:
      "UI는 서비스의 얼굴이라 생각합니다. 예상 가능한 동작, 일관된 스타일, 디자인 시스템을 바탕으로 품질을 체계적으로 유지합니다.",
  },
  {
    image: "/about-page/images/strength_dx.jpg",
    title: "견고한 개발 환경",
    description:
      "좋은 개발 환경이 결국 제품의 완성도로 이어진다고 믿습니다. 유지보수성을 고려해 구조를 설계하고, 직관적이고 확정성 있는 코드를 지향합니다.",
  },
];

export const mainSkillList = [
  {
    image: "/about-page/icons/js.png",
    title: "JavaScript",
    description:
      "JavaScript의 동작 원리를 이해하고, ES6 이상의 문법을 준수하여 개발합니다.",
  },
  {
    image: "/about-page/icons/ts.png",
    title: "TypeScript",
    description:
      "TypeScript를 적용해 런타임 오류를 사전에 방지하고, 안정적인 코드베이스를 구축합니다.",
  },
  {
    image: "/about-page/icons/react.png",
    title: "React",
    description:
      "React의 렌더링 구조와 Hooks의 원리를 이해하고, 상태 관리와 로직 분리를 효율적으로 구현합니다. \n 또한 커스텀 Hook을 통해 복잡한 코드의 재사용성과 확장성을 높이고자 합니다.",
  },
  {
    image: "/about-page/icons/nextJs.png",
    title: "Next.js",
    description:
      "Next.js의 다양한 렌더링 방식을 페이지 특성에 맞게 유연하게 적용하여, \n 초기 렌더링 속도를 개선하고 빠르고 안정적인 사용자 경험을 제공하고자 노력합니다.",
  },
  {
    image: "/about-page/icons/react-query.png",
    title: "React-Query",
    description:
      "React Query를 활용해 서버 상태를 효율적으로 관리하며, 데이터 페칭과 캐싱을 최적화합니다. \n 무한 스크롤 기능을 구현하여 사용자 경험을 개선한 경험이 있습니다.",
  },
  {
    image: "/about-page/icons/zustand.png",
    title: "Zustand",
    description:
      "Zustand를 활용해 최소한의 보일러플레이트로 전역 상태 관리를 구현하고, \n 불필요한 리렌더링을 방지해 애플리케이션 성능을 최적화하고자 노력합니다.",
  },
];

export const hybridSkillList = [
  {
    image: "/about-page/icons/expressJs.png",
    title: "Express.js",
    description:
      "Express.js를 활용하여 CRUD 기능을 포함한 최소 기능 제품(MVP)을 설계 · 개발한 경험이 있습니다.",
  },
  {
    image: "/about-page/icons/mongoDB.png",
    title: "MongoDB",
    description:
      "MongoDB를 활용하여 비정형 데이터를 관리하고, 서비스 개발을 수행한 경험이 있습니다.",
  },
  {
    image: "/about-page/icons/figma.png",
    title: "Figma",
    description: `Figma의 기본 기능을 숙지하고 있으며, \n 개인 서비스의 웹 화면, 디자인 시스템을 직접 설계 · 제작한 경험이 있습니다.`,
  },
];

export type ProjectsListType = {
  image: string;
  title: string;
  techStacks: string[];
  description: string;
  links: { link: string; linkTo: string }[];
  effectPosition: "left" | "right";
};

export const projectsList: ProjectsListType[] = [
  {
    image: "/about-page/images/project_takitown.png",
    title: "TAKI TOWN",
    techStacks: ["Next.js", "TypeScript", "React-Query", "MongoDB"],
    description:
      "Next.js를 활용하여 풀스택으로 구현한 개발 블로그입니다. \n 개발자로서 경험과 배움을 중심으로 다양한 관심사를 공유하고 있습니다.",
    links: [
      { link: "https://takitown.com", linkTo: "GITHUB" },
      { link: "https://github.com/taki-kim/Taki-town", linkTo: "VIEW LIVE" },
      {
        link: "https://www.takitown.com/project/Taki%20Town",
        linkTo: "MORE DETAIL",
      },
    ],
    effectPosition: "left",
  },
  {
    image: "/about-page/images/project_murie.png",
    title: "뮤리의 서재",
    techStacks: ["React", "Express.js", "TypeScript", "MongoDB", "React-Query"],
    description:
      "RPG게임 'BLUE-PROTOCOL'의 위키서비스입니다. \n 게임 플레이를 위한 다양한 정보 및 최신 뉴스 등을 제공합니다. \n 초기 계획부터 런칭까지 전체적인 개발을 담당했습니다.",
    links: [
      { link: "https://takitown.com", linkTo: "GITHUB" },
      { link: "https://github.com/taki-kim/Taki-town", linkTo: "VIEW LIVE" },
      {
        link: "https://www.takitown.com/project/Taki%20Town",
        linkTo: "MORE DETAIL",
      },
    ],
    effectPosition: "right",
  },
  {
    image: "/about-page/images/project_sound.png",
    title: "SoundSupply_Service",
    techStacks: ["Next.js", "Apollo-Client", "GraphQl", "tailwindcss"],
    description:
      "국내 음반사 'Sound-Supply'의 웹페이지입니다. \n 음반사의 아카이빙 페이지로 발매 앨범 및 소속 아티스트들을 소개합니다. 서비스의 뷰 전체를 담당하여 개발했습니다.",
    links: [
      { link: "https://takitown.com", linkTo: "GITHUB" },
      { link: "https://github.com/taki-kim/Taki-town", linkTo: "VIEW LIVE" },
      {
        link: "https://www.takitown.com/project/Taki%20Town",
        linkTo: "MORE DETAIL",
      },
    ],
    effectPosition: "left",
  },
];
