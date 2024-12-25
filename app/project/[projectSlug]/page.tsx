import { Suspense } from "react";

import styles from "./page.module.css";
import Header from "@/components/article/header";
import TextContainer from "@/components/article/text-container";
import { fetchProjectData } from "@/utils/fetchData";
import { MetadataComponent } from "@/components/metadata/metadata";

export async function generateMetadata({
  params,
}: {
  params: { projectSlug: string };
}) {
  const data = await fetchProjectData(params.projectSlug);

  return MetadataComponent({
    page: `${data.title}`,
    isArticle: true,
    articleSummary: `${data.summary}`,
  });
}

export default async function ProjectSlug({
  params,
}: {
  params: { projectSlug: string };
}) {
  const data = await fetchProjectData(params.projectSlug);

  return (
    <Suspense fallback={<p>...loading</p>}>
      <div className={styles["wrapper"]}>
        <Header title={data.title} date={data.date} image={data.imageLink} />
        <TextContainer articleText={data.content} />
      </div>
    </Suspense>
  );
}
