import { useState } from "react";
import styles from "./topbar.module.css";

export default function Topbar() {
  const [hitDice, setHitDice] = useState(12);
  const [hitPoints, setHitPoints] = useState(80);
  const [hiddenSpeeds, setHiddenSpeeds] = useState(styles.hidden);

  const maxHitDice = 12;
  const maxHitPoints = 80;

  function handleHitDice(event) {
    const button = event.target;
    if (button.innerHTML == "+") {
      setHitDice(hitDice + 1);
    } else {
      setHitDice(hitDice - 1);
    }
  }

  function handleHitPoints(event) {
    const button = event.target;
    if (button.innerHTML == "+") {
      setHitPoints(hitPoints + 1);
    } else {
      setHitPoints(hitPoints - 1);
    }
  }

  function handleSpeedDisplay(event) {
    console.log("Hover event captured");
  }

  return (
    <div className={styles.topBar}>
      <div className={styles.healthArea}>
        <div className={styles.hitDiceArea}>
          <p className="totalHitDice">{maxHitDice}d8</p>
          <p className="currentDiceLabel">Hit Dice</p>
          <div className={styles.currentChanger}>
            <button className={styles.leftButton} onClick={handleHitDice}>
              -
            </button>
            <p className={styles.currentHitDice}>{hitDice}</p>
            <button className={styles.rightButton} onClick={handleHitDice}>
              +
            </button>
          </div>
        </div>
        <div className={styles.hitPointArea}>
          <p className="totalHitDice">Max HP: {maxHitPoints}</p>
          <p className="currentDiceLabel">HP</p>
          <div className={styles.currentChanger}>
            <button className={styles.leftButton} onClick={handleHitPoints}>
              -
            </button>
            <p className={styles.currentHitPoints}>{hitPoints}</p>
            <button className={styles.rightButton} onClick={handleHitPoints}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className={styles.combatStats}>
        <div className={styles.speeds}>
          <div className={styles.visibleArea}>
            <p className={styles.running} data-hidden="false">
              Speed: 30ft
            </p>
            <div
              className={styles.showSpeeds}
              onMouseEnter={handleSpeedDisplay}
            >
              <p>i</p>
            </div>
          </div>
          <p className={{ hiddenSpeeds }} data-hidden="true">
            Flying: 30ft
          </p>
          <p
            className={(styles.hiddenMovement, styles.hidden)}
            data-hidden="true"
          >
            Swimming: 30ft
          </p>
          <p
            className={(styles.hiddenMovement, styles.hidden)}
            data-hidden="true"
          >
            Climbing: 30ft
          </p>
        </div>
      </div>
    </div>
  );
}
