import styles from "./header-nav.module.scss";
import NavItem from "./nav-item";
import { navList } from "@/lib/nav-list";

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
