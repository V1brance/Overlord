import styles from "./skills.module.css";
import { useState } from "react";

export default function Skills() {
  let proficiency_bonus = 3;

  const [profSkills, setProfSkill] = useState([]);

  function handleProfToggle(event) {
    //fetches our skill; for saves, the stat should be included
    let skill = event.target.getAttribute("data-skill");
    let prof = event.target.getAttribute("data-prof");
    let currentSkills = [...profSkills];
    currentSkills.push(skill);
    setProfSkill(currentSkills);
    prof = updateProficiency(prof);
    event.target.setAttribute("data-prof", prof);
  }

  function updateProficiency(currentProf) {
    switch (currentProf) {
      case "false":
        return "prof";
      case "prof":
        return "exp";
      case "exp":
        return "false";
    }
  }

  return (
    <div className={styles.skillArea}>
      <h2 className={styles.areaLabel}>Skills</h2>
      <p className={styles.statLabel}>Strength</p>
      <div className={styles.strSkills} data-stat="str">
        <div className={styles.statDisp}>
          <input
            type="checkbox"
            className={styles.profMod}
            data-prof="false"
            data-skill="str-save"
            onClick={handleProfToggle}
          />
          <p className={styles.skillMod}>+0</p>
          <p>
            <strong>Saving Throw</strong>
          </p>
        </div>
        <div className={styles.statDisp}>
          <input
            type="checkbox"
            className={styles.profMod}
            data-prof="false"
            data-skill="athletics"
            onClick={handleProfToggle}
          />
          <p className={styles.skillMod}>+0</p>
          <p>Athletics</p>
        </div>
      </div>
      <p className={styles.statLabel}>Dexterity</p>
      <div className={styles.dexSkills}>
        <div className={styles.statDisp}>
          <input
            type="checkbox"
            className={styles.profMod}
            data-prof="false"
            data-skill="dex-save"
            onClick={handleProfToggle}
          />
          <p className={styles.skillMod}>+0</p>
          <p>
            <strong>Saving Throw</strong>
          </p>
        </div>
        <div className={styles.statDisp}>
          <input
            type="checkbox"
            className={styles.profMod}
            data-prof="false"
            data-skill="acrobatics"
            onClick={handleProfToggle}
          />
          <p className={styles.skillMod}>+0</p>
          <p>Acrobatics</p>
        </div>
        <div className={styles.statDisp}>
          <input type="checkbox" className={styles.profMod} data-prof="false" />
          <p className={styles.skillMod}>+0</p>
          <p>Sleight of Hand</p>
        </div>
        <div className={styles.statDisp}>
          <input type="checkbox" className={styles.profMod} data-prof="false" />
          <p className={styles.skillMod}>+0</p>
          <p>Stealth</p>
        </div>
      </div>
    </div>
  );
}
