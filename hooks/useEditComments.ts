import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editComment } from "@/utils/api";

export default function useEditComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editComment,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["getComments", variables.articleTitle],
      });
    },
    onError: (error) => {
      console.error("댓글 수정 중 오류:", error);
    },
  });
}
