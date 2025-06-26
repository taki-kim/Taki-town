import styles from "./LatestPost.module.scss";
import { PostDataProps } from "@/type";
import ArticleCard from "@/components/article-card/article-card";
import NavButton from "@/components/button/nav-button";

export default function LatestPost({
  latestPostList,
}: {
  latestPostList: PostDataProps[];
}) {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>LATEST POSTS</h1>
      <div className={styles["inner-wrapper"]}>
        {latestPostList.map((e) => (
          <ArticleCard
            key={e.title}
            articleSort="post"
            postLink={e.title}
            imageLink={e.imageLink}
            title={e.title}
            summary={e.summary}
          />
        ))}
      </div>
      <NavButton text="More Posts" size="small" link="/posts" />
    </div>
  );
}
