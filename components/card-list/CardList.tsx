import styles from "./CardList.module.scss";
import ArticleCard from "@/components/article-card/ArticleCard";
import { sortByNewestArticle } from "@/utils/article";
import { ProjectDataProps } from "@/type";

export default function CardList({
  cardList,
}: {
  cardList: ProjectDataProps[];
}) {
  return (
    <div className={styles["wrapper"]}>
      {sortByNewestArticle(cardList).map((e) => (
        <ArticleCard
          key={e.title}
          articleSort="project"
          postLink={e.title}
          imageLink={e.imageLink}
          title={e.title}
          summary={e.summary}
        />
      ))}
    </div>
  );
}
