import { createSlice } from "@reduxjs/toolkit";

export const persuasion = createSlice({
  name: "persuasion",
  initialState: {
    value: 0,
  },
  reducers: {
    changePersuasion: (state, action) => {
      state.value = action.payload;
    },
    incrementPersuasion: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changePersuasion, incrementPersuasion } = persuasion.actions;
export const selectPersuasion = (state) => state.persuasion.value;
export default persuasion.reducer;
