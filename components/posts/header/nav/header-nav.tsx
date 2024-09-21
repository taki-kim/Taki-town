import styles from "./header-nav.module.css";
import NavItem from "./nav-item";

type navItem = {
  title: string;
  link: string;
};

const navList: navItem[] = [
  { title: "All", link: "/posts" },
  { title: "Development", link: "/posts/development" },
  { title: "Design", link: "/posts/design" },
  { title: "Philosophy", link: "/posts/philosophy" },
  { title: "Etc", link: "/posts/etc" },
];

export default function HeaderNav() {
  return (
    <div className={styles["wrapper"]}>
      {navList.map((element) => (
        <NavItem
          key={element.title}
          navTitle={element.title}
          navLink={element.link}
        />
      ))}
    </div>
  );
}
