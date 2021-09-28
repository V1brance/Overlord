import { createSlice } from "@reduxjs/toolkit";

export const survival = createSlice({
  name: "survival",
  initialState: {
    value: 0,
  },
  reducers: {
    changeSurvival: (state, action) => {
      state.value = action.payload;
    },
    incrementSurvival: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeSurvival, incrementSurvival } = survival.actions;
export const selectSurvival = (state) => state.survival.value;
export default survival.reducer;
