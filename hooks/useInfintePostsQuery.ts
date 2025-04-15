import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPostListByPage } from "@/utils/api";
import { FETCH_POSTS_LIMIT } from "@/constant";

export default function useInfinitePostsQuery(category: string) {
  return useInfiniteQuery({
    queryKey: ["posts", category],
    queryFn: ({ pageParam = 0 }) =>
      fetchPostListByPage({ pageParam, category }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * FETCH_POSTS_LIMIT;
      return lastPage.hasMore ? nextOffset : undefined;
    },
    staleTime: 1000 * 60 * 5,
  });
}
