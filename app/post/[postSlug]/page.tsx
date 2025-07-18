import { Suspense } from "react";

import Header from "@/components/article/header";
import TextContainer from "@/components/article/text-container";
import styles from "./page.module.scss";
import { fetchPostData } from "@/utils/api";
import PostAnchor from "@/components/post-anchor/post-anchor";
import CommentContainer from "@/components/comment/comment-container";
import { generateArticleMetadata } from "@/utils/metadata";
import AiSearchButton from "@/components/open-ai/ai-search-button/ai-search-button";

export async function generateMetadata({
  params,
}: {
  params: { postSlug: string };
}) {
  const data = await fetchPostData(params.postSlug);

  return generateArticleMetadata({
    articleTitle: data.title,
    articleCategory: "post",
    articleSummary: data.summary,
    articleImageUrl: data.imageLink,
  });
}

export default async function PostSlug({
  params,
}: {
  params: { postSlug: string };
}) {
  const data = await fetchPostData(params.postSlug);

  return (
    <Suspense fallback={<p>...loading</p>}>
      <div className={styles["wrapper"]}>
        <Header title={data.title} date={data.date} image={data.imageLink} />
        <TextContainer articleText={data.content} />
        <PostAnchor postCategory={data.category} postNumber={data.postNumber} />
        <CommentContainer articleTitle={data.title} />
        <AiSearchButton
          articleTitle={data.title}
          articleCategory={data.category}
        />
      </div>
    </Suspense>
  );
}
