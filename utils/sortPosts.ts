import { PostDataProps } from "@/type";

export function sortRecentPosts(data: PostDataProps[]) {
  const dateStringToNumber = (date: string) => {
    return Number(date.split("-").join(""));
  };

  const recentPosts = data.filter(
    (item: PostDataProps) => item.category !== "development"
  );

  const recentSorted = recentPosts.sort(
    (a: PostDataProps, b: PostDataProps) =>
      dateStringToNumber(b.date) - dateStringToNumber(a.date)
  );

  return recentSorted.slice(0, 5);
}

export function sortRecentDevPosts(data: PostDataProps[]) {
  const dateStringToNumber = (date: string) => {
    return Number(date.split("-").join(""));
  };

  const devPosts = data.filter(
    (item: PostDataProps) => item.category === "development"
  );

  const recentSorted = devPosts.sort(
    (a: PostDataProps, b: PostDataProps) =>
      dateStringToNumber(b.date) - dateStringToNumber(a.date)
  );

  return recentSorted.slice(0, 5);
}
