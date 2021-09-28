import { createSlice } from "@reduxjs/toolkit";

export const investigation = createSlice({
  name: "investigation",
  initialState: {
    value: 0,
  },
  reducers: {
    changeInvestigation: (state, action) => {
      state.value = action.payload;
    },
    incrementInvestigation: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeInvestigation, incrementInvestigation } =
  investigation.actions;
export const selectInvestigation = (state) => state.investigation.value;
export default investigation.reducer;
