"use client";

import { useEffect, useState } from "react";

import sytles from "./submit-button.module.css";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const date = getDateString(new Date());
        formData.date = date; // add date

        if (article === "post") {
          await fetch("/api/post/create-post", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }

        if (article === "project") {
          await fetch("/api/project/create-project", {
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
      window.location.href = "/admin";
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
