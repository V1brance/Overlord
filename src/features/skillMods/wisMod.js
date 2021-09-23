import { createSlice } from "@reduxjs/toolkit";

export const wisSkillMod = createSlice({
  name: "wisSkillMod",
  initialState: {
    value: 0,
  },
  reducers: {
    changeWisMod: (state, action) => {
      state.value = action.payload;
    },
    incrementWis: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeWisMod } = wisSkillMod.actions;
export default wisSkillMod.reducer;
export const selectWisMod = (state) => state.wisSkillMod;
