import styles from "./page.module.css";
import MainButton from "@/components/button/main-button";

export default function About() {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Hello, I'm Taki.</h1>
      <div className={styles["text-wrapper"]}>
        <br />
        <p>
          안녕하세요 저는 웹 프론트엔드 개발자 김특희(Taki)입니다. 이곳은 저의
          개인 블로그입니다. 개발자로서의 배움과 목표를 향한 여정을 기록하기
          위해 운영하고 있습니다. 하지만 단지 개발만 말하지는 않습니다. 이곳에
          저의 개인적인 의미들을 채우고, 가치 있는 공간으로 만들어가려 합니다.
        </p>
        <br />
        <p>
          저는 여러가지 것들을 좋아합니다. 만화와 애니메이션을 좋아하는
          오타쿠고, 가끔씩은 철학책을 읽기도 하며 생각에 빠집니다. 검도를
          좋아해서 종종 검도에 빠져있고, 무서운 이야기나 영화들을 찾아보기도
          합니다. 이곳에서 이런 저의 관심사와 경험들을 가능한 많이 기록하려
          합니다. 둘러보시면서 '이 사람은 이렇게 사는구나, 이런 이야기도 있구나'
          하고 흥미로운 시간이 되신다면 기쁘겠습니다.
        </p>
      </div>

      <h2 className={styles["subtitle"]}>What I do</h2>
      <div className={styles["text-wrapper"]}>
        <p>
          저는 웹 서비스를 만들며, 주로 UI 개발을 담당하는 프론트엔드
          개발자입니다. 프론트엔드를 담당하지만 웹서비스 개발 전체에 관심을
          가지고 있습니다. 웹의 전체적인 부분들을 구상하고 개발하는 역량을
          키워나가고 있습니다.
        </p>

        <a
          href="http://naver.me/5T4D0Sco"
          target="_blank"
          className={styles["link"]}
        >
          <MainButton text="Resume" size="medium" />
        </a>
      </div>

      <h2 className={styles["subtitle"]}>Skills</h2>
      <div>
        <ul>
          <li className={styles["list"]}>
            - Frontend :
            <img
              className={styles["badge"]}
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            />{" "}
            <img
              className={styles["badge"]}
              src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
            />
          </li>
          <li className={styles["list"]}>
            - Backend :
            <img
              className={styles["badge"]}
              src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
            />{" "}
            <img
              className={styles["badge"]}
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
            />
          </li>
          <li className={styles["list"]}>
            - Language :
            <img
              className={styles["badge"]}
              src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
            />{" "}
            <img
              className={styles["badge"]}
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
