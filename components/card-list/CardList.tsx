import styles from "./CardList.module.scss";
import ArticleCard from "@/components/article-card/ArticleCard";
import { sortByNewestArticle } from "@/utils/article";

export type CardListProps = {
  cardList: any;
  articleSort: "post" | "project";
};

export default function CardList({ cardList, articleSort }: CardListProps) {
  return (
    <div className={styles["wrapper"]}>
      {sortByNewestArticle(cardList).map((e) => (
        <ArticleCard
          key={e.title}
          articleSort={articleSort}
          postLink={e.title}
          imageLink={e.imageLink}
          title={e.title}
          summary={e.summary}
        />
      ))}
    </div>
  );
}
