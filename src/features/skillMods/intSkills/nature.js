import { createSlice } from "@reduxjs/toolkit";

export const nature = createSlice({
  name: "nature",
  initialState: {
    value: 0,
  },
  reducers: {
    changeNature: (state, action) => {
      state.value = action.payload;
    },
    incrementNature: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeNature, incrementNature } = nature.actions;
export const selectNature = (state) => state.nature.value;
export default nature.reducer;
