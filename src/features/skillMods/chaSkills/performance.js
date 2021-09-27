import { createSlice } from "@reduxjs/toolkit";

export const performance = createSlice({
  name: "performance",
  initialState: {
    value: 0,
  },
  reducers: {
    changePerformance: (state, action) => {
      state.value = action.payload;
    },
    incrementPerformance: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changePerformance, incrementPerformance } = performance.actions;
export const selectPerformance = (state) => state.performance.value;
export default performance.reducer;
