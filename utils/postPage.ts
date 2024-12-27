import { PostDataProps } from "@/type";

export function getCategoryAndIntro(pathName: string) {
  switch (pathName) {
    case "development":
      return ["Development", "웹과 개발에 대한 주제를 다루고 있습니다."];
    case "design":
      return ["Design", "웹 디자인에 대한 주제를 다루고 있습니다."];
    case "work_log":
      return ["Work-Log", "작업들에 대한 내용을 기록하고 있습니다."];
    case "philosophy":
      return ["Philosophy", "인문학과 철학에 관련한 주제를 다루고 있습니다."];
    case "etc":
      return ["Etc", "일상, 취미, 관심사와 잡담을 나눕니다"];
    default:
      return [
        "All",
        "웹, 개발, 디자인, 철학 등의 다양한 주제를 다루고 있습니다.",
      ];
  }
}

export function getCategoryString(pathName: string) {
  let currentPath: string[] | string = pathName.split("/");
  currentPath = currentPath[currentPath.length - 1];

  return currentPath;
}

type getPrevAndNextPostProps = {
  postList: PostDataProps[];
  currentPostCategory: string;
  currentPostNumber: number;
};

export function getPrevAndNextPost({
  postList,
  currentPostCategory,
  currentPostNumber,
}: getPrevAndNextPostProps) {
  let sameCategoryList = postList.filter(
    (item) => item.category === currentPostCategory
  );

  let prevPost: PostDataProps | undefined;
  let nextPost: PostDataProps | undefined;

  sameCategoryList.forEach((e) => {
    if (e.postNumber === currentPostNumber - 1) prevPost = e;
    if (e.postNumber === currentPostNumber + 1) nextPost = e;
  });

  return [prevPost, nextPost];
}
