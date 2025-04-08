import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "@/utils/api";

export default function useSearchQuery(articleTitle: string) {
  return useQuery({
    queryKey: ["searchQuery", articleTitle],
    queryFn: () => searchQuery(articleTitle),
    enabled: !!articleTitle,
    staleTime: 1000 * 60 * 60 * 12,
  });
}
