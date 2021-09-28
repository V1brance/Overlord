import { configureStore } from "@reduxjs/toolkit";

//stat imports
import strModReducer from "../features/skillMods/strMod";
import dexModReducer from "../features/skillMods/dexMod";
import conModReducer from "../features/skillMods/conMod";
import intModReducer from "../features/skillMods/intMod";
import wisModReducer from "../features/skillMods/wisMod";
import chaModReducer from "../features/skillMods/chaMod";

//skill imports
//str
import strSaveReducer from "../features/skillMods/strSkills/strSave";
import athleticsReducer from "../features/skillMods/strSkills/athletics";
//dex
import dexSaveReducer from "../features/skillMods/dexSkills/dexSave";
import acrobaticsReducer from "../features/skillMods/dexSkills/acrobatics";
import sleightReducer from "../features/skillMods/dexSkills/sleight";
import stealthReducer from "../features/skillMods/dexSkills/stealth";
//con
import conSaveReducer from "../features/skillMods/conSkills/conSave";
//int
import intSaveReducer from "../features/skillMods/intSkills/intSave";
import arcanaReducer from "../features/skillMods/intSkills/arcana";
import historyReducer from "../features/skillMods/intSkills/history";
import investigationReducer from "../features/skillMods/intSkills/investigation";
import natureReducer from "../features/skillMods/intSkills/nature";
import religionReducer from "../features/skillMods/intSkills/religion";
//wis
import wisSaveReducer from "../features/skillMods/wisSkills/wisSave";
import animalReducer from "../features/skillMods/wisSkills/animal";
import insightReducer from "../features/skillMods/wisSkills/insight";
import medicineReducer from "../features/skillMods/wisSkills/medicine";
import perceptionReducer from "../features/skillMods/wisSkills/perception";
import survivalReducer from "../features/skillMods/wisSkills/survival";
//cha
import chaSaveReducer from "../features/skillMods/chaSkills/chaSave";
import deceptionReducer from "../features/skillMods/chaSkills/deception";
import intimidationReducer from "../features/skillMods/chaSkills/intimidation";
import performanceReducer from "../features/skillMods/chaSkills/performance";
import persuasionReducer from "../features/skillMods/chaSkills/persuasion";

export default configureStore({
  reducer: {
    //str mod and skills
    strSkillMod: strModReducer,
    strSave: strSaveReducer,
    athletics: athleticsReducer,

    //dex mod and skills
    dexSkillMod: dexModReducer,
    dexSave: dexSaveReducer,
    acrobatics: acrobaticsReducer,
    sleight: sleightReducer,
    stealth: stealthReducer,

    //con mod and skills
    conSkillMod: conModReducer,
    conSave: conSaveReducer,

    //int mod and skills
    intSkillMod: intModReducer,
    intSave: intSaveReducer,
    arcana: arcanaReducer,
    history: historyReducer,
    investigation: investigationReducer,
    nature: natureReducer,
    religion: religionReducer,

    //wis mod and skills
    wisSkillMod: wisModReducer,
    wisSave: wisSaveReducer,
    animal: animalReducer,
    insight: insightReducer,
    medicine: medicineReducer,
    perception: perceptionReducer,
    survival: survivalReducer,
    //cha mod and skill
    chaSkillMod: chaModReducer,
    chaSave: chaSaveReducer,
    deception: deceptionReducer,
    intimidation: intimidationReducer,
    performance: performanceReducer,
    persuasion: persuasionReducer,
  },
});
