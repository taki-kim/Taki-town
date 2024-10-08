export function sortRecentPosts(data: any[] | any) {
  const dateStringToNumber = (date: string) => {
    return Number(date.split("-").join(""));
  };

  const recentSorted = data.sort(
    (a: any, b: any) => dateStringToNumber(b.date) - dateStringToNumber(a.date)
  );

  return recentSorted.slice(0, 5);
}

export function sortRecentDevPosts(data: any[] | any) {
  const dateStringToNumber = (date: string) => {
    return Number(date.split("-").join(""));
  };

  const devPosts = data.filter((item: any) => item.category === "development");

  const recentSorted = devPosts.sort(
    (a: any, b: any) => dateStringToNumber(b.date) - dateStringToNumber(a.date)
  );

  return recentSorted.slice(0, 5);
}
