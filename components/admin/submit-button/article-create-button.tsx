"use client";

import { useRouter } from "next/navigation";
import sytles from "./submit-button.module.scss";
import { getDateString } from "@/utils/date";
import { PostDataProps, ProjectDataProps } from "@/type";
import { createPost, createProject } from "@/utils/api";

type PostSubmitButtonProps = {
  formData: PostDataProps | ProjectDataProps;
  article: "post" | "project";
};

export default function ArticleCreateButton({
  formData,
  article,
}: PostSubmitButtonProps) {
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const date = getDateString(new Date());
      formData.date = date; // add date

      if (article === "post") {
        await createPost(formData as PostDataProps);
      }

      if (article === "project") {
        await createProject(formData as ProjectDataProps);
      }
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/admin");
    }
  };

  return (
    <div className={sytles["button"]} onClick={handleSubmit}>
      SUBMIT
    </div>
  );
}
