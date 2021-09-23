import { createSlice } from "@reduxjs/toolkit";

export const strSave = createSlice({
  name: "strSave",
  initialState: {
    value: 0,
  },
  reducers: {
    changeStrSave: (state, action) => {
      state.value = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { changeStrSave } = strSave.actions;
export const selectStrSave = (state) => state.strSave.value;
export default strSave.reducer;
