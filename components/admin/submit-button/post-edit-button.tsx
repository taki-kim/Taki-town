"use client";

import { useEffect, useState } from "react";

import sytles from "./submit-button.module.scss";

export default function PostEditButton({ formData }: any) {
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/post/edit/`, {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (submit) {
      fetchData();
    }
  }, [submit]);

  return (
    <div
      className={sytles["button"]}
      onClick={(e: any) => {
        setSubmit(true);
      }}
    >
      SUBMIT
    </div>
  );
}
