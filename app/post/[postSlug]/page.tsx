import { Suspense } from "react";

import Header from "@/components/article/header";
import TextContainer from "@/components/article/text-container";
import styles from "./page.module.css";
import { fetchPostData } from "@/utils/fetchData";

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
      </div>
    </Suspense>
  );
}
