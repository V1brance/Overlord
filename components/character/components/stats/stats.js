import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//import statements for the stat redux components
import {
  incrementCha,
  selectChaMod,
} from "../../../../src/features/skillMods/chaMod";
import {
  incrementCon,
  selectConMod,
} from "../../../../src/features/skillMods/conMod";
import {
  incrementDex,
  selectDexMod,
} from "../../../../src/features/skillMods/dexMod";
import {
  incrementInt,
  selectIntMod,
} from "../../../../src/features/skillMods/intMod";
import {
  incrementStr,
  selectStrMod,
} from "../../../../src/features/skillMods/strMod";
import {
  incrementWis,
  selectWisMod,
} from "../../../../src/features/skillMods/wisMod";

//import statements for skills
//str
import { incrementStrSave } from "../../../../src/features/skillMods/strSkills/strSave";
import { incrementAthletics } from "../../../../src/features/skillMods/strSkills/athletics";
//dex
import { incrementDexSave } from "../../../../src/features/skillMods/dexSkills/dexSave";
import { incrementAcrobatics } from "../../../../src/features/skillMods/dexSkills/acrobatics";
import { incrementSleight } from "../../../../src/features/skillMods/dexSkills/sleight";
import { incrementStealth } from "../../../../src/features/skillMods/dexSkills/stealth";
//con
import { incrementConSave } from "../../../../src/features/skillMods/conSkills/conSave";
//int
import { incrementIntSave } from "../../../../src/features/skillMods/intSkills/intSave";
import { incrementArcana } from "../../../../src/features/skillMods/intSkills/arcana";
import { incrementHistory } from "../../../../src/features/skillMods/intSkills/history";
import { incrementInvestigation } from "../../../../src/features/skillMods/intSkills/investigation";
import { incrementNature } from "../../../../src/features/skillMods/intSkills/nature";
import { incrementReligion } from "../../../../src/features/skillMods/intSkills/religion";

import styles from "./stats.module.css";
import { incrementWisSave } from "../../../../src/features/skillMods/wisSkills/wisSave";
import { incrementAnimal } from "../../../../src/features/skillMods/wisSkills/animal";
import { incrementInsight } from "../../../../src/features/skillMods/wisSkills/insight";
import { incrementMedicine } from "../../../../src/features/skillMods/wisSkills/medicine";
import { incrementPerception } from "../../../../src/features/skillMods/wisSkills/perception";
import { incrementSurvival } from "../../../../src/features/skillMods/wisSkills/survival";
import { incrementChaSave } from "../../../../src/features/skillMods/chaSkills/chaSave";
import { incrementDeception } from "../../../../src/features/skillMods/chaSkills/deception";
import { incrementIntimidation } from "../../../../src/features/skillMods/chaSkills/intimidation";
import { incrementPerformance } from "../../../../src/features/skillMods/chaSkills/performance";
import { incrementPersuasion } from "../../../../src/features/skillMods/chaSkills/persuasion";

export default function Stats() {
  const dispatch = useDispatch();

  //need to grab the current values from the redux store
  const curStr = useSelector(selectStrMod);
  const curDex = useSelector(selectDexMod);
  const curCon = useSelector(selectConMod);
  const curInt = useSelector(selectIntMod);
  const curWis = useSelector(selectWisMod);
  const curCha = useSelector(selectChaMod);

  //the mod determines the animation component for changing the stat
  //the stat component is the actual number associated with the stat
  //the skill is the skill modifier
  //str
  const [strMod, setStrMod] = useState(false);
  const [str, setStr] = useState(10);
  const [strSkill, setStrSkill] = useState(0);

  //dex
  const [dexMod, setDexMod] = useState(false);
  const [dex, setDex] = useState(10);
  const [dexSkill, setDexSkill] = useState(0);
  //con
  const [conMod, setConMod] = useState(false);
  const [con, setCon] = useState(10);
  const [conSkill, setConSkill] = useState(0);
  //int
  const [intMod, setIntMod] = useState(false);
  const [int, setInt] = useState(10);
  const [intSkill, setIntSkill] = useState(0);
  //wis
  const [wisMod, setWisMod] = useState(false);
  const [wis, setWis] = useState(10);
  const [wisSkill, setWisSkill] = useState(0);
  //cha
  const [chaMod, setChaMod] = useState(false);
  const [cha, setCha] = useState(10);
  const [chaSkill, setChaSkill] = useState(0);

  //variable definition for the sub components, probably should abstract
  //this out further, potentially will rework this
  let strArea;
  let dexArea;
  let conArea;
  let intArea;
  let wisArea;
  let chaArea;

  //handles the click event to toggle stat editing on
  //eventually this will dispatch the database request
  function handleStatToggle(event) {
    //check stat name from dom element
    const stat = event.target.getAttribute("name");

    //switch on the grabbed stat
    switch (stat) {
      case "str":
        setStrMod(!strMod);
        break;
      case "dex":
        setDexMod(!dexMod);
        break;
      case "con":
        setConMod(!conMod);
        break;
      case "int":
        setIntMod(!intMod);
        break;
      case "wis":
        setWisMod(!wisMod);
        break;
      case "cha":
        setChaMod(!chaMod);
        break;
    }
  }

  function handleStat(event) {
    //grab the name of the stat off the element
    const stat = event.target.getAttribute("name");

    //variable declarations
    let ones;
    let mod;
    let skillMod;
    let skillChange;
    let prefix;

    //switch case on the stat we grabbed off the element
    //rework in progress, trying to abstractify some of this
    switch (stat) {
      //syntactically, these are all the same
      //comments for one apply to them all, just switch the stat statements
      case "str":
        //collect some click info, determine if stat is changing up or down
        [ones, mod] = statUpDown(event.target.innerHTML);
        //change the stat component by our calculated val of 1 or -1
        setStr(str + ones);
        skillMod = calculateMod(str, mod);

        //check to see if the modifier has changed
        //if it has we dispatch the change to our redux store
        skillChange = checkModifier(curStr, skillMod);
        dispatch(incrementStr(skillChange));

        //this also dispatches changes to all of the corresponding skills associated with the stat
        dispatch(incrementStrSave(skillChange));
        dispatch(incrementAthletics(skillChange));

        //update on page element
        prefix = setPrefix(strSkill);
        setStrSkill(prefix + skillMod);

        break;

      case "dex":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setDex(dex + ones);

        skillMod = calculateMod(dex, mod);
        skillChange = checkModifier(curDex, skillMod);

        dispatch(incrementDex(skillChange));

        dispatch(incrementDexSave(skillChange));
        dispatch(incrementAcrobatics(skillChange));
        dispatch(incrementSleight(skillChange));
        dispatch(incrementStealth(skillChange));

        prefix = setPrefix(dexSkill);
        setDexSkill(prefix + skillMod);

        break;

      case "con":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setCon(con + ones);

        skillMod = calculateMod(con, mod);
        skillChange = checkModifier(curCon, skillMod);
        dispatch(incrementCon(skillChange));

        dispatch(incrementConSave(skillChange));

        prefix = setPrefix(conSkill);
        setConSkill(prefix + skillMod);

        break;

      case "int":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setInt(int + ones);

        skillMod = calculateMod(int, mod);
        skillChange = checkModifier(curInt, skillMod);
        dispatch(incrementInt(skillChange));

        dispatch(incrementIntSave(skillChange));
        dispatch(incrementArcana(skillChange));
        dispatch(incrementHistory(skillChange));
        dispatch(incrementInvestigation(skillChange));
        dispatch(incrementNature(skillChange));
        dispatch(incrementReligion(skillChange));

        prefix = setPrefix(intSkill);
        setIntSkill(prefix + skillMod);

        break;

      case "wis":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setWis(wis + ones);

        skillMod = calculateMod(wis, mod);
        skillChange = checkModifier(curWis, skillMod);
        dispatch(incrementWis(skillChange));

        dispatch(incrementWisSave(skillChange));
        dispatch(incrementAnimal(skillChange));
        dispatch(incrementInsight(skillChange));
        dispatch(incrementMedicine(skillChange));
        dispatch(incrementPerception(skillChange));
        dispatch(incrementSurvival(skillChange));

        prefix = setPrefix(wisSkill);
        setWisSkill(prefix + skillMod);

        break;

      case "cha":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setCha(cha + ones);

        skillMod = calculateMod(cha, mod);
        skillChange = checkModifier(curCha, skillMod);
        dispatch(incrementCha(skillChange));

        dispatch(incrementChaSave(skillChange));
        dispatch(incrementDeception(skillChange));
        dispatch(incrementIntimidation(skillChange));
        dispatch(incrementPerformance(skillChange));
        dispatch(incrementPersuasion(skillChange));

        prefix = setPrefix(chaSkill);
        setChaSkill(prefix + skillMod);

        break;
    }
  }

  //modifier calculator
  function calculateMod(num, mod) {
    return Math.floor((num - 10 - mod) / 2);
  }

  //mostly will return 1 or -1
  function checkModifier(oldMod, newMod) {
    return newMod - oldMod;
  }

  function setPrefix(num) {
    if (num >= 0) {
      return "+";
    }
    return "";
  }

  function statUpDown(dir) {
    if (dir == "+") {
      return [1, -1];
    } else {
      return [-1, 1];
    }
  }

  if (!strMod) {
    strArea = (
      <div className={styles.statArea}>
        <p className={styles.statNumber} onClick={handleStatToggle} name="str">
          {str}
        </p>
        <p className={styles.statMod}>{strSkill}</p>
        <p className={styles.statName}>STR</p>
      </div>
    );
  } else if (strMod) {
    strArea = (
      <div className={styles.statArea}>
        <div className={styles.statChanger}>
          <button className={styles.statButton} name="str" onClick={handleStat}>
            -
          </button>
          <div className={styles.statDisplay}>
            <p onClick={handleStatToggle} name="str">
              {str}
            </p>
            <p onClick={handleStatToggle} name="str">
              {strSkill}
            </p>
          </div>
          <button className={styles.statButton} name="str" onClick={handleStat}>
            +
          </button>
        </div>
        <p className={styles.statName}>STR</p>
      </div>
    );
  }

  if (!dexMod) {
    dexArea = (
      <div className={styles.statArea}>
        <p className={styles.statNumber} onClick={handleStatToggle} name="dex">
          {dex}
        </p>
        <p className={styles.statMod}>{dexSkill}</p>
        <p className={styles.statName}>DEX</p>
      </div>
    );
  } else if (dexMod) {
    dexArea = (
      <div className={styles.statArea}>
        <div className={styles.statChanger}>
          <button className={styles.statButton} name="dex" onClick={handleStat}>
            -
          </button>
          <div className={styles.statDisplay}>
            <p onClick={handleStatToggle} name="dex">
              {dex}
            </p>
            <p onClick={handleStatToggle} name="dex">
              {dexSkill}
            </p>
          </div>
          <button className={styles.statButton} name="dex" onClick={handleStat}>
            +
          </button>
        </div>
        <p className={styles.statName}>DEX</p>
      </div>
    );
  }

  if (!conMod) {
    conArea = (
      <div className={styles.statArea}>
        <p className={styles.statNumber} onClick={handleStatToggle} name="con">
          {con}
        </p>
        <p className={styles.statMod}>{conSkill}</p>
        <p className={styles.statName}>CON</p>
      </div>
    );
  } else if (conMod) {
    conArea = (
      <div className={styles.statArea}>
        <div className={styles.statChanger}>
          <button className={styles.statButton} name="con" onClick={handleStat}>
            -
          </button>
          <div className={styles.statDisplay}>
            <p onClick={handleStatToggle} name="con">
              {con}
            </p>
            <p onClick={handleStatToggle} name="con">
              {conSkill}
            </p>
          </div>
          <button className={styles.statButton} name="con" onClick={handleStat}>
            +
          </button>
        </div>
        <p className={styles.statName}>CON</p>
      </div>
    );
  }

  if (!intMod) {
    intArea = (
      <div className={styles.statArea}>
        <p className={styles.statNumber} onClick={handleStatToggle} name="int">
          {int}
        </p>
        <p className={styles.statMod}>{intSkill}</p>
        <p className={styles.statName}>INT</p>
      </div>
    );
  } else if (intMod) {
    intArea = (
      <div className={styles.statArea}>
        <div className={styles.statChanger}>
          <button className={styles.statButton} name="int" onClick={handleStat}>
            -
          </button>
          <div className={styles.statDisplay}>
            <p onClick={handleStatToggle} name="int">
              {int}
            </p>
            <p onClick={handleStatToggle} name="int">
              {intSkill}
            </p>
          </div>
          <button className={styles.statButton} name="int" onClick={handleStat}>
            +
          </button>
        </div>
        <p className={styles.statName}>INT</p>
      </div>
    );
  }

  if (!wisMod) {
    wisArea = (
      <div className={styles.statArea}>
        <p className={styles.statNumber} onClick={handleStatToggle} name="wis">
          {wis}
        </p>
        <p className={styles.statMod}>{wisSkill}</p>
        <p className={styles.statName}>WIS</p>
      </div>
    );
  } else if (wisMod) {
    wisArea = (
      <div className={styles.statArea}>
        <div className={styles.statChanger}>
          <button className={styles.statButton} name="wis" onClick={handleStat}>
            -
          </button>
          <div className={styles.statDisplay}>
            <p onClick={handleStatToggle} name="wis">
              {wis}
            </p>
            <p onClick={handleStatToggle} name="wis">
              {wisSkill}
            </p>
          </div>
          <button className={styles.statButton} name="wis" onClick={handleStat}>
            +
          </button>
        </div>
        <p className={styles.statName}>WIS</p>
      </div>
    );
  }

  if (!chaMod) {
    chaArea = (
      <div className={styles.statArea}>
        <p className={styles.statNumber} onClick={handleStatToggle} name="cha">
          {cha}
        </p>
        <p className={styles.statMod}>{chaSkill}</p>
        <p className={styles.statName}>CHA</p>
      </div>
    );
  } else if (chaMod) {
    chaArea = (
      <div className={styles.statArea}>
        <div className={styles.statChanger}>
          <button className={styles.statButton} name="cha" onClick={handleStat}>
            -
          </button>
          <div className={styles.statDisplay}>
            <p onClick={handleStatToggle} name="cha">
              {cha}
            </p>
            <p onClick={handleStatToggle} name="cha">
              {chaSkill}
            </p>
          </div>
          <button className={styles.statButton} name="cha" onClick={handleStat}>
            +
          </button>
        </div>
        <p className={styles.statName}>CHA</p>
      </div>
    );
  }

  return (
    <div className={styles.stats}>
      {strArea}
      {dexArea}
      {conArea}
      {intArea}
      {wisArea}
      {chaArea}
    </div>
  );
}
