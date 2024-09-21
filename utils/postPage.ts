export function getCategoryAndIntro(pathName: string) {
  let currentPath: string[] | string = pathName.split("/");
  currentPath = currentPath[currentPath.length - 1];

  switch (currentPath) {
    case "development":
      return ["Development", "웹과 개발에 대한 주제를 다루고 있습니다."];
    case "design":
      return ["Design", "웹 디자인에 대한 주제를 다루고 있습니다."];
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
