import { createSlice } from "@reduxjs/toolkit";

export const chaSkillMod = createSlice({
  name: "chaSkillMod",
  initialState: {
    value: 0,
  },
  reducers: {
    changeChaMod: (state, action) => {
      state.value = action.payload;
    },
    incrementCha: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeChaMod, incrementCha } = chaSkillMod.actions;
export default chaSkillMod.reducer;
export const selectChaMod = (state) => state.chaSkillMod.value;
