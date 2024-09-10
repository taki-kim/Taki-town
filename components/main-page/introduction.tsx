import Link from "next/link";
import Image from "next/image";

import styles from "./introduction.module.css";
import MainButton from "../button/main-button";

export default function Introduction() {
  return (
    <main className={styles["wrapper"]}>
      <Image
        src="https://wallpapercave.com/wp/wp6272794.jpg"
        fill
        alt="wallpaper"
      />

      <div className={styles["text-wrapper"]}>
        안녕하세요 웹 프론트엔드 개발자 Taki입니다. <br />
        이곳은 저의 개인 블로그 Taki Town, 제가 만든 작업들의 내용과 고민의
        흔적들을 남기고 기억하는 곳입니다.
        <br />
        저의 작업물들과 경험들, 그리고 흥미롭고 관심이 가는 주제들을 자유롭게
        탐구하고 기록하고 있습니다.
      </div>
      <div className={styles["button-wrapper"]}>
        <Link href="/about" className={styles["nav-button"]}>
          <MainButton text="About Me" size="medium" color="light" />
        </Link>
      </div>
    </main>
  );
}
