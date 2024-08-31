import Link from "next/link";

import styles from "./introduction.module.css";
import MainButton from "../button/main-button";

export default function Introduction() {
  return (
    <main className={styles["wrapper"]}>
      <h1 className={styles["welcome-header"]}>Welcome</h1>
      <div className={styles["text-wrapper"]}>
        웹 프론트엔드 개발자 Taki입니다. <br />
        이곳은 저의 블로그 Taki Town, 제가 만든 작업들의 내용과 고민의 흔적들을
        남기고 기억하는 공간입니다.
        <br />
        저의 작업물들과 경험들을 공유합니다. 그리고 흥미롭고 관심이 가는
        주제들을 자유롭게 기록하고 탐구합니다.
        <br />
        방문하시는 모든 분들에게 즐겁고 흥미로운 시간 되시길 바랍니다.
        <br />
      </div>
      <div className={styles["button-wrapper"]}>
        <Link href="/about" className={styles["nav-button"]}>
          <MainButton text="About Me" size="medium" />
        </Link>
      </div>
    </main>
  );
}
