import { CommentProps } from "@/type";

export function sortByNewestComment(data: Partial<CommentProps>[]) {
  const dateStringToNumber = (date: string) => {
    return Number(date.split("-").join(""));
  };

  const recentSorted = data.sort(
    (a: any, b: any) => dateStringToNumber(b.date) - dateStringToNumber(a.date)
  );

  return recentSorted;
}
