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
          저는 작은 디테일에 대한 꾸준한 고민과 정성이 쌓여, 사용자 경험의
          완성도를 높인다고 믿습니다. 그리고 그 경험은 사용자에게는 편안함과
          몰입을, 개발자에게는 성장을 안겨준다고 생각합니다.
        </p>
        <p>
          이러한 믿음을 바탕으로 저는
          <strong> 사용자와 개발자 모두에게 더 나은 경험을 전하자</strong>는
          모토를 가지고, 작은 부분부터 세심하게 고민하며 서비스를 만들어가고
          있습니다.
        </p>
        <p>
          작지만 의미 있는 개선들이 쌓여 결국 사용자와 팀 모두에게 긍정적인
          경험을 제공한다고 생각합니다.
          <br /> 이러한 철학을 바탕으로 더 나은 서비스를 고민하고 실천하는
          개발자로 성장합니다.
        </p>
      </div>
    </div>
  );
}
