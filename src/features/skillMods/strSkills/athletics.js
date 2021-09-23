import { createSlice } from "@reduxjs/toolkit";

export const athletics = createSlice({
  name: "athletics",
  initialState: {
    value: 0,
  },
  reducers: {
    changeAthletics: (state, action) => {
      state.value = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { changeAthletics } = athletics.actions;
export const selectAthletics = (state) => state.athletics.value;
export default athletics.reducer;
