import { createSlice } from "@reduxjs/toolkit";

export const conSkillMod = createSlice({
  name: "conSkillMod",
  initialState: {
    value: 0,
  },
  reducers: {
    changeConMod: (state, action) => {
      state.value = action.payload;
    },
    incrementCon: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeConMod, incrementCon } = conSkillMod.actions;
export default conSkillMod.reducer;
export const selectConMod = (state) => state.conSkillMod.value;
