import styles from "./skills.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectStrMod } from "../strMod";
import { selectDexMod } from "../dexMod";
import { selectConMod } from "../conMod";
import { selectIntMod } from "../intMod";
import { selectWisMod } from "../wisMod";
import { selectChaMod } from "../chaMod";

export default function Skills() {
  //will eventually get from a redux function I think
  let proficiency_bonus = 2;

  //redux state variables
  const strSkillMod = useSelector(selectStrMod);
  const dexSkillMod = useSelector(selectDexMod);
  const conSkillMod = useSelector(selectConMod);
  const intSkillMod = useSelector(selectIntMod);
  const wisSkillMod = useSelector(selectWisMod);
  const chaSkillMod = useSelector(selectChaMod);

  //start skill state list
  //str
  const [strSave, setStrSave] = useState("+0");
  const [athletics, setAthletics] = useState("+0");
  //dex
  const [dexSave, setDexSave] = useState("+0");
  const [acrobatics, setAcrobatics] = useState("+0");
  const [sleight, setSleight] = useState("+0");
  const [stealth, setStealth] = useState("+0");
  //con
  const [conSave, setConSave] = useState("+0");
  //int
  const [intSave, setIntSave] = useState("+0");
  const [arcana, setArcana] = useState("+0");
  const [history, setHistory] = useState("+0");
  const [investigation, setInvestigation] = useState("+0");
  const [nature, setNature] = useState("+0");
  const [religion, setReligion] = useState("+0");
  //wis
  const [wisSave, setWisSave] = useState("+0");
  const [animal, setAnimal] = useState("+0");
  const [insight, setInsight] = useState("+0");
  const [medicine, setMedicine] = useState("+0");
  const [perception, setPerception] = useState("+0");
  const [survival, setSurvival] = useState("+0");
  //cha
  const [chaSave, setChaSave] = useState("+0");
  const [deception, setDeception] = useState("+0");
  const [intimidation, setIntimidation] = useState("+0");
  const [performance, setPerformance] = useState("+0");
  const [persuasion, setPersuasion] = useState("+0");
  //end skill state list

  function handleProfToggle(event) {
    //fetches our skill; for saves, the stat should be included
    let skill = event.target.getAttribute("data-skill");
    let prof = event.target.getAttribute("data-prof");
    let profValue;

    //grabs the dom element corresponding to our skills modifer
    let skillNode = document.querySelector("#" + skill);
    //grabs the modifier number and none of the text (last element)
    let skillStat = skillNode.getAttribute("data-stat");
    let skillMod = switchStatMod(skillStat);

    [prof, profValue] = updateProficiency(prof);
    //determines new proficiency value and edits the dom correspondingly, eventually this will be grabbed from db
    event.target.setAttribute("data-prof", prof);

    //sets the modifier, sends in stateful stat mod, checks for updated proficiency, passes in DOM element
    verifyStat(parseInt(profValue), parseInt(skillMod), skillNode);
  }

  //determines the next rank in the proficiency order
  function updateProficiency(currentProf) {
    switch (currentProf) {
      case "false":
        return ["prof", proficiency_bonus];

      case "prof":
        return ["exp", proficiency_bonus];

      case "exp":
        //resets the changes
        let revert = -1 * (2 * proficiency_bonus);
        return ["false", revert];
    }
  }

  //basically, this should check the skillMod state component and the proficiency
  //so we take in skillMod state, current proficiency bonus, and the skill node to update the correct stat
  //was just going to take the skill name from a data- but decided that I also would like to grab the corresponding stat from a data- so we pass the full node
  function verifyStat(skillMod, profBonus, currentSkill) {
    let currentSkillName = currentSkill.getAttribute("id");

    let finalVal = skillMod + profBonus;
    let modPrefix = checkModifier(finalVal);

    switchSkillState(currentSkillName, finalVal, modPrefix);
  }

  //handles our prefixing of positive vs negative skill modifiers
  function checkModifier(value) {
    if (value >= 0) {
      return "+";
    } else {
      return "-";
    }
  }

  //return the correct stat mod based upon the stat we are working with
  function switchStatMod(statID) {
    switch (statID) {
      case "str":
        return strSkillMod;
      case "dex":
        return dexSkillMod;
      case "con":
        return conSkillMod;
      case "int":
        return intSkillMod;
      case "wis":
        return wisSkillMod;
      case "cha":
        return chaSkillMod;
    }
  }

  //switch case on our skillID to update the correct state
  //skillID determines skill state updated, newVal determines the updated value,
  function switchSkillState(skillID, newVal, valPos) {
    switch (skillID) {
      case "str-save":
        setStrSave(valPos + newVal);
        break;
      case "athletics":
        setAthletics(valPos + newVal);
        break;
      case "dex-mod":
        setDexSave(valPos + newVal);
        break;
      case "acrobatics":
        setAcrobatics(valPos + newVal);
        break;
      case "sleight":
        setSleight(valPos + newVal);
        break;
      case "stealth":
        setStealth(valPos + newVal);
        break;
      case "con-save":
        setConSave(valPos + newVal);
        break;
      case "int-save":
        setIntSave(valPos + newVal);
        break;
      case "arcana":
        setArcana(valPos + newVal);
        break;
      case "history":
        setHistory(valPos + newVal);
        break;
      case "investigation":
        setInvestigation(valPos + newVal);
        break;
      case "nature":
        setNature(valPos + newVal);
        break;
      case "religion":
        setReligion(valPos + newVal);
        break;
      case "wis-save":
        setWisSave(valPos + newVal);
        break;
      case "animal":
        setAnimal(valPos + newVal);
        break;
      case "insight":
        setInsight(valPos + newVal);
        break;
      case "medicine":
        setMedicine(valPos + newVal);
        break;
      case "perception":
        setPerception(valPos + newVal);
        break;
      case "survival":
        setSurvival(valPos + newVal);
        break;
      case "cha-save":
        setChaSave(valPos + newVal);
        break;
      case "deception":
        setDeception(valPos + newVal);
        break;
      case "intimidation":
        setIntimidation(valPos + newVal);
        break;
      case "performance":
        setPerformance(valPos + newVal);
        break;
      case "persuasion":
        setPersuasion(valPos + newVal);
        break;
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
            onClick={handleProfToggle}
          />
          <p className={styles.skillMod} id="athletics" data-stat="str">
            {athletics}
          </p>
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
            onClick={handleProfToggle}
          />
          <p className={styles.skillMod} id="acrobatics" data-stat="dex">
            {acrobatics}
          </p>
          <p>Acrobatics</p>
        </div>
        <div className={styles.statDisp}>
          <input type="checkbox" className={styles.profMod} data-prof="false" />
          <p className={styles.skillMod} id="sleight" data-stat="dex">
            {sleight}
          </p>
          <p>Sleight of Hand</p>
        </div>
        <div className={styles.statDisp}>
          <input type="checkbox" className={styles.profMod} data-prof="false" />
          <p className={styles.skillMod} id="stealth" data-stat="dex">
            {stealth}
          </p>
          <p>Stealth</p>
        </div>
      </div>
    </div>
  );
}
