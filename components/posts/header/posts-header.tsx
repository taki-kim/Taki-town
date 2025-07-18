import styles from "./posts-header.module.scss";
import HeaderNav from "./nav/header-nav";
import { getCategoryAndIntro } from "@/utils/postPage";
import { fetchPostCount } from "@/utils/api";

export default async function PostsHeader({ pathname }: { pathname: string }) {
  const [category, summary] = getCategoryAndIntro(pathname);
  const postCount = await fetchPostCount(pathname);

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>
        {category}
        <span className={styles["counter"]}>{`(${postCount.count})`}</span>
      </h1>
      <p className={styles["summary"]}>{summary}</p>
      <HeaderNav />
    </div>
  );
}
