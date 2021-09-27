import { createSlice } from "@reduxjs/toolkit";

export const chaSave = createSlice({
  name: "chaSave",
  initialState: {
    value: 0,
  },
  reducers: {
    changeChaSave: (state, action) => {
      state.value = action.payload;
    },
    incrementChaSave: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeChaSave, incrementChaSave } = chaSave.actions;
export const selectChaSave = (state) => state.chaSave.value;
export default chaSave.reducer;
