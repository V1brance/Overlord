import styles from "./home.module.css";
import Image from "next/image";
import dice from "../../public/images/home-d20.png";

export default function Home() {
  return (
    <>
      <div className={styles.homeTitle}>
        <Image
          src={dice}
          width={200}
          height={200}
          className={styles.homeImage}
        />
        <h1>OverLord</h1>
        <p>Next Gen Character Sheets</p>
      </div>
      <div>
        <p className={styles.about}>
          An emphasis on clean, beautiful, interactive character sheets for your
          favorite RPG's. Thanks for testing the beta of the site. Currently, I
          am adding support for specific subclasses found in Dungeon's and
          Dragon's fifth edition. Each class and to a further extent subclass in
          5e will have a custom styled sheet to allow for maximum ease of use
          for players.
          <br />
          <div className={styles.smallLine}></div>
          <br />
          Unfortunately, most actual class information will have to be manually
          added by users, as only SRD content can be officially sanctioned
          however I am looking in to ways to allow users to batch import data.
          On top of this, I am planning on adding support for multiclassing and
          custom theming of classes. For now, this is a small app to allow for a
          more fluid Roll20 experience with my friends.
        </p>
      </div>
    </>
  );
}
