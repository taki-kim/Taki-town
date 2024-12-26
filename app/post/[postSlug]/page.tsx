import { Suspense } from "react";

import Header from "@/components/article/header";
import TextContainer from "@/components/article/text-container";
import styles from "./page.module.css";
import { fetchPostData } from "@/utils/fetchData";
import { MetadataComponent } from "@/components/metadata/metadata";
import PostAnchor from "@/components/post-anchor/post-anchor";

export async function generateMetadata({
  params,
}: {
  params: { postSlug: string };
}) {
  const data = await fetchPostData(params.postSlug);

  return MetadataComponent({
    page: `${data.title}`,
    isArticle: true,
    articleSummary: `${data.summary}`,
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
      </div>
    </Suspense>
  );
}
