"use client";

import { useEffect, useState } from "react";

import sytles from "./submit-button.module.css";

type PostSubmitButtonProps = {
  formData: any;
};

export default function PostCreateButton({ formData }: PostSubmitButtonProps) {
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("/api/post/create-post", {
          method: "POST",
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
