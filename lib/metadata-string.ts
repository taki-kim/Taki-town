export default function metadataString(title: string) {
  switch (title) {
    case "Main":
      return "블로그 Taki Town입니다. 웹과 개발에 대한 주제를 다루고 있습니다.";
    case "Posts":
      return "블로그 Taki Town입니다. 웹개발, 디자인, 철학, 취미 등 다양한 주제들을 다루고 있습니다.";
    case "Projects":
      return "블로그 Taki Town입니다. 참여한 프로젝트에 대해 소개합니다.";
    case "About":
      return "블로그 Taki Town입니다. 블로그 운영자에 대한 소개글입니다.";
    default:
      return "블로그 Taki Town입니다. 웹개발, 디자인, 철학, 취미 등 다양한 주제들을 다루고 있습니다.";
  }
}
