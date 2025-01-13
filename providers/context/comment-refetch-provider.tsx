"use client";

import { createContext, useCallback, useState, ReactNode } from "react";

type CommentRefetchContextType = {
  triggerRefetchCount: number;
  setTriggerRefetchCount: (value: number) => void;
  refreshComments: () => void;
};

export const CommentRefetchContext = createContext<
  CommentRefetchContextType | undefined
>(undefined);

export default function CommentRefetchProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [triggerRefetchCount, setTriggerRefetchCount] = useState(0);

  const refreshComments = useCallback(() => {
    setTriggerRefetchCount((prev) => prev + 1);
  }, []);

  return (
    <CommentRefetchContext.Provider
      value={{ triggerRefetchCount, setTriggerRefetchCount, refreshComments }}
    >
      {children}
    </CommentRefetchContext.Provider>
  );
}
