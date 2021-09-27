import { createSlice } from "@reduxjs/toolkit";

export const stealth = createSlice({
  name: "stealth",
  initialState: {
    value: 0,
  },
  reducers: {
    changeStealth: (state, action) => {
      state.value = action.payload;
    },
    incrementStealth: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeStealth, incrementStealth } = stealth.actions;
export const selectStealth = (state) => state.stealth.value;
export default stealth.reducer;
