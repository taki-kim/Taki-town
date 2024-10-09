"use client";

import { useState, useCallback, ChangeEvent } from "react";

type FormData = Record<string, any>;

export default function useInputs(initialValue: FormData = {}) {
  const [text, setText] = useState<FormData>(initialValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any): void => {
      const { value, name } = e.target;
      setText({
        ...text,
        [name]: value,
      });
    },
    [text]
  );
  const setFormData = useCallback((newData: FormData) => {
    setText((prevText) => ({
      ...prevText,
      ...newData,
    }));
  }, []);

  return [text, onChange, setFormData] as const;
}
