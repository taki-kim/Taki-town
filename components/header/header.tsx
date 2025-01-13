import MainLogo from "../main-logo/main-logo";
import HeaderList from "./heade-list";
import ThemeChangeButton from "./theme-change-button/theme-change-button";
import styles from "./header.module.css";
import AdminMenu from "./admin-menu/admin-menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <MainLogo link="/" title="TAKI TOWN" />
      <nav className={styles.navbar}>
        <ul className={styles.navbar}>
          <HeaderList href="/posts" listName="Posts" />
          <HeaderList href="/projects" listName="Projects" />
          <HeaderList href="/about" listName="About" />
          <HeaderList href="/guestbook" listName="Guestbook" />
          <AdminMenu />
          <ThemeChangeButton />
        </ul>
      </nav>
    </header>
  );
}
