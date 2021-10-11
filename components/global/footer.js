import styles from "./footer.module.css";
import Link from "next/link";
import dice from "../../public/images/home-d20.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyrightSection}>
        <p>©2021 Samuel Brookshire</p>
        <p>All Rights Reserved</p>
        <p>Don&apos;t steal my work please!</p>
      </div>
      <div className={styles.dice}>
        <Image src={dice} width={80} height={80} alt="A d20"></Image>
      </div>
      <div className={styles.aboutArea}>
        <p>Contact Me:</p>
        <Link href="https://www.github.com/V1brance">My Githhub</Link>
        <Link href="https://www.linkedin.com">My LinkedIn</Link>
      </div>
    </div>
  );
}
