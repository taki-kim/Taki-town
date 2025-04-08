import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitNewComment } from "@/utils/fetchData";

export default function useSubmitNewComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitNewComment,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["getComments", variables.articleTitle],
      });
    },
    onError: (error) => {
      console.error("댓글 작성 중 오류:", error);
    },
  });
}
