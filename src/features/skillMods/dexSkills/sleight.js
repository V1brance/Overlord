import { createSlice } from "@reduxjs/toolkit";

export const sleight = createSlice({
  name: "sleight",
  initialState: {
    value: 0,
  },
  reducers: {
    changeSleight: (state, action) => {
      state.value = action.payload;
    },
    incrementSleight: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeSleight, incrementSleight } = sleight.actions;
export const selectSleight = (state) => state.sleight.value;
export default sleight.reducer;
