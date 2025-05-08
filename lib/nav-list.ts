type navItem = {
  title: string;
  link: string;
  categoryId: string;
  summary?: string;
};

export const navList: navItem[] = [
  {
    title: "All",
    link: "/posts",
    categoryId: "posts",
  },
  {
    title: "Development",
    link: "/posts/development",
    categoryId: "development",
    summary: "개발",
  },
  {
    title: "Design",
    link: "/posts/design",
    categoryId: "design",
    summary: "디자인",
  },
  {
    title: "Work-Log",
    link: "/posts/work_log",
    categoryId: "work_log",
    summary: "작업일지",
  },
  {
    title: "Philosophy",
    link: "/posts/philosophy",
    categoryId: "philosophy",
    summary: "철학/인문학",
  },
  {
    title: "Etc",
    link: "/posts/etc",
    categoryId: "etc",
    summary: "잡담/일상",
  },
];

export const headerNavList = [
  {
    listName: "Post",
    link: "/posts",
  },
  {
    listName: "Projects",
    link: "/projects",
  },
  {
    listName: "About",
    link: "/about",
  },
  {
    listName: "Guestbook",
    link: "/guestbook",
  },
];
