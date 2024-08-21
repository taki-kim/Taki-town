import HeaderLogo from "./header-logo";
import HeaderList from "./heade-list";
import DarkModeButton from "./dark-mode/dark-mode-button";
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
        </ul>
      </nav>
      <DarkModeButton />
    </header>
  );
}
