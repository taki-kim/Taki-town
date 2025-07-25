"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import sytles from "./submit-button.module.scss";
import { getDateString } from "@/utils/date";

type PostSubmitButtonProps = {
  formData: any;
  article: string;
};

export default function ArticleCreateButton({
  formData,
  article,
}: PostSubmitButtonProps) {
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const date = getDateString(new Date());
        formData.date = date; // add date

        if (article === "post") {
          console.log(formData);
          await fetch(`/api/post/create`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }

        if (article === "project") {
          await fetch("/api/project/create", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (submit) {
      fetchData();
      router.push("/admin");
    }
  }, [submit]);

  return (
    <div
      className={sytles["button"]}
      onClick={() => {
        setSubmit(true);
      }}
    >
      SUBMIT
    </div>
  );
}
