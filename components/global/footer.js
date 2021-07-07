import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyrightSection}>
        <p>©2021 Samuel Brookshire</p>
        <p>All Rights Reserved</p>
        <p>Don't steal my work please!</p>
      </div>
      <div className={styles.aboutArea}>
        <p>Contact Me:</p>
        <Link href="https://www.github.com/V1brance">My Githhub</Link>
        <Link href="https://www.linkedin.com">My LinkedIn</Link>
      </div>
    </div>
  );
}
