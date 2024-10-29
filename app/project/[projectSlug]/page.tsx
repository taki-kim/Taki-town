import { Suspense } from "react";

import styles from "./page.module.css";
import Header from "@/components/article/header";
import TextContainer from "@/components/article/text-container";

async function fetchProjectData(projectSlug: string) {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/project/get/${projectSlug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
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
