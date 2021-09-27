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
    incrementAthletics: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeAthletics, incrementAthletics } = athletics.actions;
export const selectAthletics = (state) => state.athletics.value;
export default athletics.reducer;
