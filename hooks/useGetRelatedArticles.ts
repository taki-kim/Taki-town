import { useQuery } from "@tanstack/react-query";
import { relatedArticleList } from "@/utils/fetchData";

export default function useGetRelatedArticles(
  searchResult: Array<any>,
  articleTitle: string
) {
  return useQuery({
    queryKey: ["relatedArticles", articleTitle],
    queryFn: () => relatedArticleList(searchResult, articleTitle),
    enabled: !!searchResult,
    staleTime: 1000 * 60 * 60 * 12,
  });
}
