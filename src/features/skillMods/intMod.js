import { createSlice } from "@reduxjs/toolkit";

export const intSkillMod = createSlice({
  name: "intSkillMod",
  initialState: {
    value: 0,
  },
  reducers: {
    changeIntMod: (state, action) => {
      state.value = action.payload;
    },
    incrementInt: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeIntMod, incrementInt } = intSkillMod.actions;
export default intSkillMod.reducer;
export const selectIntMod = (state) => state.intSkillMod.value;
