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
