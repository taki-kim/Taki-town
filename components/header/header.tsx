import HeaderLogo from "./header-logo";
import HeaderList from "./heade-list";
import ThemeChangeButton from "./theme-change-button/theme-change-button";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo link="/" title="TAKI-TOWN" />
      <nav className={styles.navbar}>
        <ul className={styles.navbar}>
          <HeaderList href="/posts" listName="posts" />
          <HeaderList href="/portfolit" listName="portfolio" />
          <HeaderList href="/about" listName="about" />
          <ThemeChangeButton />
        </ul>
      </nav>
    </header>
  );
}
