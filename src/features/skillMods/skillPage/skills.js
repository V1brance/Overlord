import styles from "./skills.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//selector statements for the skills
//str
import { incrementStrSave, selectStrSave } from "../strSkills/strSave";
import { incrementAthletics, selectAthletics } from "../strSkills/athletics";
//dex
import { incrementDexSave, selectDexSave } from "../dexSkills/dexSave";
import { incrementAcrobatics, selectAcrobatics } from "../dexSkills/acrobatics";
import { incrementSleight, selectSleight } from "../dexSkills/sleight";
import { incrementStealth, selectStealth } from "../dexSkills/stealth";
//con
import { incrementConSave, selectConSave } from "../conSkills/conSave";

export default function Skills() {
  const dispatch = useDispatch();
  //will grab from elsewhere eventually,
  let profBonus = 2;

  const strSave = useSelector(selectStrSave);
  const athletics = useSelector(selectAthletics);

  const dexSave = useSelector(selectDexSave);
  const acrobatics = useSelector(selectAcrobatics);
  const sleight = useSelector(selectSleight);
  const stealth = useSelector(selectStealth);

  const conSave = useSelector(selectConSave);

  function handleClick(event) {
    //grabs the name and current proficiency level for the desired change
    const skillName = event.target.getAttribute("data-skill");
    const currentProf = event.target.getAttribute("data-prof");

    //fetches next proficiency level and sets the element to the correct level
    const nextLevel = nextProf(currentProf);
    event.target.setAttribute("data-prof", nextLevel);

    //determine the correct modifier to dispatch
    const modChange = newMod(nextLevel, profBonus);
    //increments the correct skill by the right amount
    skillIncrement(modChange, skillName);
  }

  function skillIncrement(incrementAmount, skillName) {
    switch (skillName) {
      case "str-save":
        dispatch(incrementStrSave(incrementAmount));
        break;
      case "athletics":
        dispatch(incrementAthletics(incrementAmount));
        break;
      case "dex-save":
        dispatch(incrementDexSave(incrementAmount));
        break;
      case "acrobatics":
        dispatch(incrementAcrobatics(incrementAmount));
        break;
      case "sleight":
        dispatch(incrementSleight(incrementAmount));
        break;
      case "stealth":
        dispatch(incrementStealth(incrementAmount));
        break;
      case "con-save":
        dispatch(incrementConSave(incrementAmount));
        break;
    }
  }

  function newMod(newProf, profBonus) {
    if (newProf == "false") {
      return -1 * profBonus * 2;
    } else {
      return profBonus;
    }
  }

  function nextProf(currentProf) {
    switch (currentProf) {
      case "false":
        return "proficient";
      case "proficient":
        return "expert";
      case "expert":
        return "false";
    }
  }

  return (
    <div className={styles.skillArea}>
      <h2 className={styles.areaLabel}>Skills</h2>
      <p className={styles.statLabel}>Strength</p>
      <div data-stat="str">
        <div className={styles.statDisp}>
          <input
            type="checkbox"
            className={styles.profMod}
            data-prof="false"
            data-skill="str-save"
            onClick={handleClick}
          />
          <p className={styles.skillMod} id="str-save" data-stat="str">
            {strSave}
          </p>
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
            onClick={handleClick}
          />
          <p className={styles.skillMod} id="athletics" data-stat="str">
            {athletics}
          </p>
          <p>Athletics</p>
        </div>
      </div>
      <p className={styles.statLabel}>Dexterity</p>
      <div data-stat="dex">
        <div className={styles.dexSkills}>
          <div className={styles.statDisp}>
            <input
              type="checkbox"
              className={styles.profMod}
              data-prof="false"
              data-skill="dex-save"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="dex-save" data-stat="dex">
              {dexSave}
            </p>
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
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="acrobatics" data-stat="dex">
              {acrobatics}
            </p>
            <p>Acrobatics</p>
          </div>
          <div className={styles.statDisp}>
            <input
              type="checkbox"
              className={styles.profMod}
              data-prof="false"
              data-skill="sleight"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="sleight" data-stat="dex">
              {sleight}
            </p>
            <p>Sleight of Hand</p>
          </div>
          <div className={styles.statDisp}>
            <input
              type="checkbox"
              className={styles.profMod}
              data-prof="false"
              data-skill="stealth"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="stealth" data-stat="dex">
              {stealth}
            </p>
            <p>Stealth</p>
          </div>
        </div>
      </div>
      <p className={styles.statLabel}>Constitution</p>
      <div data-stat="con">
        <div className={styles.conSkills}>
          <div className={styles.statDisp}>
            <input
              type="checkbox"
              className={styles.profMod}
              data-prof="false"
              data-skill="con-save"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="con-save" data-stat="con">
              {conSave}
            </p>
            <p>
              <strong>Saving Throw</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
