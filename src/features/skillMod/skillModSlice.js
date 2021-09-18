import { createSlice } from "@reduxjs/toolkit";

//logic can only mutate the state based upon some action passed in
//so i think that I will move the skills component to the features here and then when the skills are updated or
//the proficiency changes, I will dispatch a reducer to modify this page

export const skillModSlice = createSlice({
  name: "skillMod",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  skillModSlice.actions;

export default skillModSlice.reducer;
