import { configureStore } from "@reduxjs/toolkit";

//stat imports
import strModReducer from "../features/skillMods/strMod";
import dexModReducer from "../features/skillMods/dexMod";

//skill imports
//str
import strSaveReducer from "../features/skillMods/strSkills/strSave";
import athleticsReducer from "../features/skillMods/strSkills/athletics";

export default configureStore({
  reducer: {
    strSkillMod: strModReducer,
    strSave: strSaveReducer,
    athletics: athleticsReducer,
    dexSkillMod: dexModReducer,
  },
});
