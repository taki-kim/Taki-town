import { PostDataProps, ProjectDataProps, ArticleCardProps } from "@/type";

export function sortByNewestArticle(
  data: PostDataProps[] | ProjectDataProps[] | ArticleCardProps[]
) {
  const dateStringToNumber = (date: string) => {
    return Number(date.split("-").join(""));
  };

  const recentSorted = data.sort(
    (a: any, b: any) => dateStringToNumber(b.date) - dateStringToNumber(a.date)
  );

  return recentSorted;
}
