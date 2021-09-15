import styles from "./spells.module.css";
import { useState } from "react";

export default function Spells() {
  const playerClass = "warlock";

  const [lvlOne, setLvlOne] = useState(0);
  const [lvlTwo, setLvlTwo] = useState(0);
  const [lvlThree, setLvlThree] = useState(0);
  const [lvlFour, setLvlFour] = useState(0);
  const [lvlFive, setLvlFive] = useState(3);
  const [lvlSix, setLvlSix] = useState(1);
  const [lvlSeven, setLvlSeven] = useState(0);
  const [lvlEight, setLvlEight] = useState(0);
  const [lvlNine, setLvlNine] = useState(0);

  return (
    <div>
      <h1>Spells</h1>
      <div className={styles.slots}>
        <div className={styles.levelArea}></div>
      </div>
    </div>
  );
}
