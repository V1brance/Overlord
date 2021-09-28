import { createSlice } from "@reduxjs/toolkit";

export const insight = createSlice({
  name: "insight",
  initialState: {
    value: 0,
  },
  reducers: {
    changeInsight: (state, action) => {
      state.value = action.payload;
    },
    incrementInsight: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeInsight, incrementInsight } = insight.actions;
export const selectInsight = (state) => state.insight.value;
export default insight.reducer;
