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
          사람들에게 유용하고 의미 있는 서비스를 만들고 싶다는 마음으로 개발자의
          길을 선택했습니다.
        </p>
        <p>
          저는 작은 디테일들이 모여 좋은 사용자 경험을 만든다고 생각합니다.{" "}
          <br />
          그리고 그 경험은 사용자에게는 편안함과 몰입을, 개발자에게는 성장을
          안겨준다고 생각합니다.
        </p>
        <p>
          그렇기에 저는 사용자와 개발자 모두에게 더 나은 경험을 전하자는 모토를
          가지고, <br /> 작은 부분부터 세심하게 고민하며 서비스를 만들어가고
          있습니다.
        </p>
        <p>
          작은 디테일에서 출발해, 결국 더 나은 흐름과 더 나은 일상을 선사하는
          개발자가 되는 것을 목표로 삼고 있습니다.
        </p>
      </div>
    </div>
  );
}
