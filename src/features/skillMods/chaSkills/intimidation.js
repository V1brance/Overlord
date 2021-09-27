import { createSlice } from "@reduxjs/toolkit";

export const intimidation = createSlice({
  name: "intimidation",
  initialState: {
    value: 0,
  },
  reducers: {
    changeIntimidation: (state, action) => {
      state.value = action.payload;
    },
    incrementIntimidation: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeIntimidation, incrementIntimidation } =
  intimidation.actions;
export const selectIntimidation = (state) => state.intimidation.value;
export default intimidation.reducer;
