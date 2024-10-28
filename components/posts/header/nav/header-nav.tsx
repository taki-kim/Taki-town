import styles from "./header-nav.module.css";
import NavItem from "./nav-item";

type navItem = {
  title: string;
  link: string;
  categoryId: string;
};

const navList: navItem[] = [
  { title: "All", link: "/posts", categoryId: "posts" },
  {
    title: "Development",
    link: "/posts/development",
    categoryId: "development",
  },
  { title: "Design", link: "/posts/design", categoryId: "design" },
  { title: "Philosophy", link: "/posts/philosophy", categoryId: "philosophy" },
  { title: "Etc", link: "/posts/etc", categoryId: "etc" },
];

export default function HeaderNav() {
  return (
    <div className={styles["wrapper"]}>
      {navList.map((element) => (
        <NavItem
          key={element.title}
          navTitle={element.title}
          navLink={element.link}
          categoryId={element.categoryId}
        />
      ))}
    </div>
  );
}
