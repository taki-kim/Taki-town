import styles from "./post-anchor.module.scss";
import AnchorCardPrev from "./anchor-card/anchor-card";
import { fetchPostList } from "@/utils/api";
import { getPrevAndNextPost } from "@/utils/postPage";
import AnchorCardNext from "./anchor-card/anchor-card-next";

type PostAnchorProps = {
  postCategory: string;
  postNumber: number;
};

export default async function PostAnchor({
  postCategory,
  postNumber,
}: PostAnchorProps) {
  const postList = await fetchPostList();
  const [prevPost, nextPost] = getPrevAndNextPost({
    postList: postList,
    currentPostCategory: postCategory,
    currentPostNumber: postNumber,
  });

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["card-container"]}>
        <AnchorCardPrev cardData={prevPost} />
      </div>
      <div className={styles["card-container"]}>
        <AnchorCardNext cardData={nextPost} />
      </div>
    </div>
  );
}
