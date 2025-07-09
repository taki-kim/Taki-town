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
      <h1 className={styles["title"]}>ABOUT ME</h1>
      <div className={styles["text-wrapper"]}>
        <p>
          안녕하세요, 프론트엔드 개발자 Taki입니다. <br />
          저는 사람들에게 유용하고 의미있는 서비스를 만들어주고자 개발자의 길을
          선택했습니다.
        </p>
        <p>
          작은 디테일들이 모여 좋은 사용자 경험을 만든다고 생각합니다. <br />
          그리고 그 경험은 사용자 뿐 아니라 개발자에게도 의미 있는 성장을 남긴다
          믿습니다.
        </p>
        <p>
          그렇기에 저는 사용자와 개발자 모두에게 더 나은 경험을 전하자는 모토를
          가지고, 작은 디테일부터 세심하게 고민하며 서비스를 만들어가고
          있습니다.
        </p>
        <p>
          작은 디테일로부터 시작하여, 궁극적으로 더 나은 경험을 선사하는
          개발자를 목표하고 있습니다.
        </p>
      </div>
    </div>
  );
}
