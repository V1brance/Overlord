import { createSlice } from "@reduxjs/toolkit";

export const religion = createSlice({
  name: "religion",
  initialState: {
    value: 0,
  },
  reducers: {
    changeReligion: (state, action) => {
      state.value = action.payload;
    },
    incrementReligion: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeReligion, incrementReligion } = religion.actions;
export const selectReligion = (state) => state.religion.value;
export default religion.reducer;
