import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul className={styles.navBar}>
        <li className={styles.navLink}>
          <Link href="/">
            <a>Characters</a>
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/">
            <a>Campaigns</a>
          </Link>
        </li>
        <li className={styles.loginButton}>
          <Link href="/">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
