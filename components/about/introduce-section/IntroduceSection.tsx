"use client";

import styles from "./IntroduceSection.module.scss";
import useFloatingEffect from "@/hooks/useFloatingEffect";

export default function IntroduceSection() {
  const { isVisible, targetRef } = useFloatingEffect<HTMLDivElement>();
  return (
    <div
      className={`${styles["wrapper"]} ${isVisible ? styles.visible : ""}`}
      ref={targetRef}
    >
      <h1 className={styles["title"]}>INTRODUCE</h1>
      <div className={styles["text-wrapper"]}>
        <p>
          사람들에게 유용하고 의미 있는 경험을 만들어주고자 웹 개발자의 길을
          선택했습니다. 특히 사용자의 경험과 직접 맞닿아 있는 프론트엔드 영역에
          매료되어 꾸준히 개발을 이어가고 있습니다.
        </p>
        <p>
          저는 사용자를 위한 작은 디테일들이 모여 탄탄하고 차별화된 사용경험이
          완성되고, 그 경험을 통해 사용자들의 마음과 일상에 스며드는 서비스가
          만들어진다 믿습니다.
        </p>
        <p>
          나아가 작은 디테일은 개발자의 경험과도 밀접하게 연결된다고 생각합니다.
          작은 부분부터 세심히 가꾸고, 지켜나가는 노력이 축적되어, 서비스와
          개발자 모두 함께 성장하는 경험이 만들어진다고 믿습니다.
        </p>
        <p>
          그렇기에 저는 궁극적으로 서비스의 사용자와 개발자 모두가 만족할 수
          있는 경험들을 만들어가고 싶습니다. 작은 부분 부터 시작하여, 모두가 더
          나은 경험을 가꾸어 나가고자 합니다.
        </p>
      </div>
    </div>
  );
}
