import { createSlice } from "@reduxjs/toolkit";

export const dexSkillMod = createSlice({
  name: "dexSkillMod",
  initialState: {
    value: 0,
  },
  reducers: {
    changeDexMod: (state, action) => {
      state.value = action.payload;
    },
    incrementDex: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeDexMod, incrementDex } = dexSkillMod.actions;
export default dexSkillMod.reducer;
export const selectDexMod = (state) => state.dexSkillMod;
