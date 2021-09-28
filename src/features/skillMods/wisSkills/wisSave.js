import { createSlice } from "@reduxjs/toolkit";

export const wisSave = createSlice({
  name: "wisSave",
  initialState: {
    value: 0,
  },
  reducers: {
    changeWisSave: (state, action) => {
      state.value = action.payload;
    },
    incrementWisSave: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeWisSave, incrementWisSave } = wisSave.actions;
export const selectWisSave = (state) => state.wisSave.value;
export default wisSave.reducer;
