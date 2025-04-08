import { useSuspenseQuery } from "@tanstack/react-query";
import { getComments } from "@/utils/api";
import { CommentProps } from "@/type";

export default function useGetComments(articleTitle: string) {
  return useSuspenseQuery<CommentProps[]>({
    queryKey: ["getComments", articleTitle],
    queryFn: () => getComments(articleTitle),

    staleTime: 1000 * 60 * 60 * 12,
  });
}
