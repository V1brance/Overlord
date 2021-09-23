import Stats from "./components/stats/stats";
import Topbar from "./components/topbar/topbar";
import Spells from "./components/spells/spells";
import Weapons from "./components/weapons/weapons";
import Skills from "../../src/features/skillMods/skills/skills";

import styles from "./character.module.css";

export default function Character() {
  return (
    <>
      <Topbar />
      <div className={styles.charInfo}>
        <Stats />
        <Skills />
        <Spells />
        <Weapons />
      </div>
    </>
  );
}
