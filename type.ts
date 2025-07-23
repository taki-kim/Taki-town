export type PostDataProps = {
  title: string;
  summary: string;
  imageLink: string;
  category: string;
  tags: string;
  content: string;
  date: string;
  postNumber: number;
};

export type ThemeContextProps = {
  theme: string;
  toggleTheme: () => void;
};

export type ProjectDataProps = {
  title: string;
  summary: string;
  imageLink: string;
  category: string;
  content: string;
  date: string;
};

export type ArticleCardProps = {
  title: string;
  summary: string;
  imageLink: string;
  content: string;
  date: string;
};

export type PostCountProps = {
  count: number;
  postCategory: string;
};

export type CommentProps = {
  _id: string;
  articleTitle: string;
  date: string;
  comment: string;
  author: string;
  password: string;
  recomment: string;
  recommentDate: string;
  profileImageLink: string;
};

export type RecommentProps = {
  recomment: string;
  recommentDate: string;
};

export type InputVerificationState =
  | "default"
  | "success"
  | "input-error"
  | "password-error"
  | "server-error";

export type PageCategory =
  | "Home"
  | "Posts"
  | "Projects"
  | "Guestbook"
  | "About";

export type PostCategory =
  | "Development"
  | "Design"
  | "Work-Log"
  | "Philosophy"
  | "Etc";

export type PostCategoryUrlString =
  | "development"
  | "design"
  | "work_log"
  | "philosophy"
  | "etc";
