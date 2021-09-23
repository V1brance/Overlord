import { createSlice } from "@reduxjs/toolkit";

//logic can only mutate the state based upon some action passed in
//so i think that I will move the skills component to the features here and then when the skills are updated or
//the proficiency changes, I will dispatch a reducer to modify this page

export const strSkillMod = createSlice({
  name: "strSkillMod",
  initialState: {
    value: 0,
  },
  reducers: {
    changeStrMod: (state, action) => {
      state.value = action.payload;
    },
    incrementStr: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeStrMod, incrementStr } = strSkillMod.actions;
export const selectStrMod = (state) => state.strSkillMod.value;
export default strSkillMod.reducer;
