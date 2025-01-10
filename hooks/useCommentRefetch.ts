"use client";

import { useContext } from "react";

import { CommentRefetchContext } from "@/providers/context/comment-refetch-provider";

export const useCommentRefetch = () => {
  const context = useContext(CommentRefetchContext);
  if (!context) {
    throw new Error(
      "useCommentRefetch must be used within a CommentRefetchProvider"
    );
  }
  return context;
};
