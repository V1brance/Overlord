import { useState } from "react";
import styles from "./topbar.module.css";

export default function Topbar() {
  const [hitDice, setHitDice] = useState(12);
  const [hitPoints, setHitPoints] = useState(80);
  const [hiddenSpeeds, setHiddenSpeeds] = useState(true);
  const [inspiration, setInspiration] = useState(2);

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

  function handleInspiration(event) {
    const button = event.target;
    if (button.innerHTML == "+") {
      setInspiration(inspiration + 1);
    } else {
      setInspiration(inspiration - 1);
    }
  }

  function handleMouseIn() {
    setHiddenSpeeds(false);
  }

  function handleMouseOut() {
    setHiddenSpeeds(true);
  }

  let hiddenMovement;
  if (hiddenSpeeds) {
    hiddenMovement = (
      <>
        <p
          className={(styles.hiddenMovement, styles.hidden)}
          data-hidden="true"
        >
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
      </>
    );
  } else {
    hiddenMovement = (
      <div className={styles.hiddenArea}>
        <p className={styles.hiddenMovement} data-hidden="false">
          Flying: 30ft
        </p>
        <p className={styles.hiddenMovement} data-hidden="false">
          Swimming: 30ft
        </p>
        <p className={styles.hiddenMovement} data-hidden="false">
          Climbing: 30ft
        </p>
      </div>
    );
  }

  return (
    <div className={styles.topBar}>
      <div className={styles.healthArea}>
        <div className={styles.hitDiceArea}>
          <p className={styles.totalLabels}>Max {maxHitDice}d8</p>
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
          <p className={styles.totalLabels}>Max {maxHitPoints} HP</p>
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
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            >
              <p>i</p>
            </div>
          </div>
          {hiddenMovement}
        </div>
        <div className={styles.armorArea}>
          <p>AC</p>
          <p>14</p>
        </div>
        <div className={styles.profArea}>
          <p>Proficiency</p>
          <p>+3</p>
        </div>
        <div className={styles.inspArea}>
          <p>Inspiration</p>
          <div className={styles.inspChanger}>
            <button className={styles.inspButton} onClick={handleInspiration}>
              -
            </button>
            <p>{inspiration}</p>
            <button className={styles.inspButton} onClick={handleInspiration}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
