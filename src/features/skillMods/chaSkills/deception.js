import { createSlice } from "@reduxjs/toolkit";

export const deception = createSlice({
  name: "deception",
  initialState: {
    value: 0,
  },
  reducers: {
    changeDeception: (state, action) => {
      state.value = action.payload;
    },
    incrementDeception: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeDeception, incrementDeception } = deception.actions;
export const selectDeception = (state) => state.deception.value;
export default deception.reducer;
