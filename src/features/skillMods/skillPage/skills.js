import styles from "./skills.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//selector statements for the skills, cannot be safely copy
//and pasted unless also in the features folder
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
//int
import { incrementIntSave, selectIntSave } from "../intSkills/intSave";
import { incrementArcana, selectArcana } from "../intSkills/arcana";
import { incrementHistory, selectHistory } from "../intSkills/history";
import {
  incrementInvestigation,
  selectInvestigation,
} from "../intSkills/investigation";
import nature, { incrementNature, selectNature } from "../intSkills/nature";
import { incrementReligion, selectReligion } from "../intSkills/religion";
//wis
import { incrementWisSave, selectWisSave } from "../wisSkills/wisSave";
import { incrementAnimal, selectAnimal } from "../wisSkills/animal";
import { incrementInsight, selectInsight } from "../wisSkills/insight";
import { incrementMedicine, selectMedicine } from "../wisSkills/medicine";
import { incrementPerception, selectPerception } from "../wisSkills/perception";
import { incrementSurvival, selectSurvival } from "../wisSkills/survival";
//cha
import { incrementChaSave, selectChaSave } from "../chaSkills/chaSave";
import { incrementDeception, selectDeception } from "../chaSkills/deception";
import {
  incrementIntimidation,
  selectIntimidation,
} from "../chaSkills/intimidation";
import {
  incrementPerformance,
  selectPerformance,
} from "../chaSkills/performance";
import { incrementPersuasion, selectPersuasion } from "../chaSkills/persuasion";

export default function Skills() {
  const dispatch = useDispatch();
  //will grab from elsewhere eventually,
  let profBonus = 2;
  //useSelector defines our stateful variables from
  //our redux store, divided into the stat components they are
  //rendered in
  //str skills
  const strSave = useSelector(selectStrSave);
  const athletics = useSelector(selectAthletics);
  //dex skills
  const dexSave = useSelector(selectDexSave);
  const acrobatics = useSelector(selectAcrobatics);
  const sleight = useSelector(selectSleight);
  const stealth = useSelector(selectStealth);
  //con skills
  const conSave = useSelector(selectConSave);
  //int skills
  const intSave = useSelector(selectIntSave);
  const arcana = useSelector(selectArcana);
  const history = useSelector(selectHistory);
  const investigation = useSelector(selectInvestigation);
  const nature = useSelector(selectNature);
  const religion = useSelector(selectReligion);
  //wis skills
  const wisSave = useSelector(selectWisSave);
  const animal = useSelector(selectAnimal);
  const insight = useSelector(selectInsight);
  const medicine = useSelector(selectMedicine);
  const perception = useSelector(selectPerception);
  const survival = useSelector(selectSurvival);
  //cha skills
  const chaSave = useSelector(selectChaSave);
  const deception = useSelector(selectDeception);
  const intimidation = useSelector(selectIntimidation);
  const performance = useSelector(selectPerformance);
  const persuasion = useSelector(selectPersuasion);

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
      case "int-save":
        dispatch(incrementIntSave(incrementAmount));
        break;
      case "arcana":
        dispatch(incrementArcana(incrementAmount));
        break;
      case "history":
        dispatch(incrementHistory(incrementAmount));
        break;
      case "investigation":
        dispatch(incrementInvestigation(incrementAmount));
        break;
      case "nature":
        dispatch(incrementNature(incrementAmount));
        break;
      case "religion":
        dispatch(incrementReligion(incrementAmount));
        break;
      case "wis-save":
        dispatch(incrementWisSave(incrementAmount));
        break;
      case "animal":
        dispatch(incrementAnimal(incrementAmount));
        break;
      case "insight":
        dispatch(incrementInsight(incrementAmount));
        break;
      case "medicine":
        dispatch(incrementMedicine(incrementAmount));
        break;
      case "perception":
        dispatch(incrementPerception(incrementAmount));
        break;
      case "survival":
        dispatch(incrementSurvival(incrementAmount));
        break;
      case "cha-save":
        dispatch(incrementChaSave(incrementAmount));
        break;
      case "deception":
        dispatch(incrementDeception(incrementAmount));
        break;
      case "intimidation":
        dispatch(incrementIntimidation(incrementAmount));
        break;
      case "performance":
        dispatch(incrementPerformance(incrementAmount));
        break;
      case "persuasion":
        dispatch(incrementPersuasion(incrementAmount));
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
      <div data-stat="str" className={styles.strSkills}>
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
      <p className={styles.statLabel}>Intelligence</p>
      <div data-stat="int">
        <div className={styles.intSkills}>
          <div className={styles.statDisp}>
            <input
              type="checkbox"
              className={styles.profMod}
              data-prof="false"
              data-skill="int-save"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="int-save" data-stat="int">
              {intSave}
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
              data-skill="arcana"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="arcana" data-stat="int">
              {arcana}
            </p>
            <p>Arcana</p>
          </div>
          <div className={styles.statDisp}>
            <input
              type="checkbox"
              className={styles.profMod}
              data-prof="false"
              data-skill="history"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="history" data-stat="int">
              {history}
            </p>
            <p>History</p>
          </div>
          <div className={styles.statDisp}>
            <input
              type="checkbox"
              className={styles.profMod}
              data-prof="false"
              data-skill="investigation"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="investigation" data-stat="int">
              {investigation}
            </p>
            <p>Investigation</p>
          </div>
          <div className={styles.statDisp}>
            <input
              type="checkbox"
              className={styles.profMod}
              data-prof="false"
              data-skill="nature"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="nature" data-stat="int">
              {nature}
            </p>
            <p>Nature</p>
          </div>
          <div className={styles.statDisp}>
            <input
              type="checkbox"
              className={styles.profMod}
              data-prof="false"
              data-skill="religion"
              onClick={handleClick}
            />
            <p className={styles.skillMod} id="religion" data-stat="int">
              {religion}
            </p>
            <p>Religion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
