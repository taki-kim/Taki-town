"use client";

import { useState, useCallback, ChangeEvent } from "react";

type FormData = Record<string, any>;

export default function useInputs(initialValue: FormData = {}) {
  const [text, setText] = useState<FormData>(initialValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { value, name } = e.target;
      setText({
        ...text,
        [name]: value,
      });
    },
    [text]
  );

  return [text, onChange] as const;
}
