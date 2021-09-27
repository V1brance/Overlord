import { createSlice } from "@reduxjs/toolkit";

export const acrobatics = createSlice({
  name: "acrobatics",
  initialState: {
    value: 0,
  },
  reducers: {
    changeAcrobatics: (state, action) => {
      state.value = action.payload;
    },
    incrementAcrobatics: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeAcrobatics, incrementAcrobatics } = acrobatics.actions;
export const selectAcrobatics = (state) => state.acrobatics.value;
export default acrobatics.reducer;
