import { useState } from "react";
import styles from "./stats.module.css";

export default function Stats() {
  const [strMod, setStrMod] = useState(false);
  const [str, setStr] = useState(10);
  const [strSkill, setStrSkill] = useState(0);
  const [dexMod, setDexMod] = useState(false);
  const [dex, setDex] = useState(10);
  const [dexSkill, setDexSkill] = useState(0);
  const [conMod, setConMod] = useState(false);
  const [con, setCon] = useState(10);
  const [conSkill, setConSkill] = useState(0);
  const [intMod, setIntMod] = useState(false);
  const [int, setInt] = useState(10);
  const [intSkill, setIntSkill] = useState(0);
  const [wisMod, setWisMod] = useState(false);
  const [wis, setWis] = useState(10);
  const [wisSkill, setWisSkill] = useState(0);
  const [chaMod, setChaMod] = useState(false);
  const [cha, setCha] = useState(10);
  const [chaSkill, setChaSkill] = useState(0);

  let strArea;
  let dexArea;
  let conArea;
  let intArea;
  let wisArea;
  let chaArea;

  function handleStatToggle(event) {
    const stat = event.target.getAttribute("name");
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
    const stat = event.target.getAttribute("name");
    let ones = "";
    let mod;
    let skill;
    switch (stat) {
      case "str":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setStr(str + ones);
        skill = Math.floor((str - 10 - mod) / 2);
        if (strSkill >= 0) {
          setStrSkill("+" + skill);
        } else {
          setStrSkill(skill);
        }

        break;
      case "dex":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setDex(dex + ones);
        skill = Math.floor((dex - 10 - mod) / 2);
        if (dexSkill >= 0) {
          setDexSkill("+" + skill);
        } else {
          setDexSkill(skill);
        }

        break;
      case "con":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setCon(con + ones);
        skill = Math.floor((con - 10 - mod) / 2);
        if (conSkill >= 0) {
          setConSkill("+" + skill);
        } else {
          setConSkill(skill);
        }
        break;
      case "int":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setInt(int + ones);
        skill = Math.floor((int - 10 - mod) / 2);
        if (intSkill >= 0) {
          setIntSkill("+" + skill);
        } else {
          setIntSkill(skill);
        }
        break;
      case "wis":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setWis(wis + ones);
        skill = Math.floor((wis - 10 - mod) / 2);
        if (wisSkill >= 0) {
          setWisSkill("+" + skill);
        } else {
          setWisSkill(skill);
        }
        break;
      case "cha":
        [ones, mod] = statUpDown(event.target.innerHTML);
        setCha(cha + ones);
        skill = Math.floor((cha - 10 - mod) / 2);
        if (chaSkill >= 0) {
          setChaSkill("+" + skill);
        } else {
          setChaSkill(skill);
        }
        break;
    }
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
