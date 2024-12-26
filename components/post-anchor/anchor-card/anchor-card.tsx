import Link from "next/link";

import styles from "./anchor-card.module.css";
import { PostDataProps } from "@/type";

type AnchorCardProps = {
  cardData: PostDataProps | undefined;
};

export default function AnchorCardPrev({ cardData }: AnchorCardProps) {
  return (
    cardData && (
      <Link className={styles["wrapper"]} href={`/post/${cardData.title}`}>
        <div className={styles["label"]}>이전 포스트</div>
        <div className={styles["postTitle"]}>{cardData.title}</div>
      </Link>
    )
  );
}
