import { createSlice } from "@reduxjs/toolkit";

export const dexSave = createSlice({
  name: "dexSave",
  initialState: {
    value: 0,
  },
  reducers: {
    changeDexSave: (state, action) => {
      state.value = action.payload;
    },
    incrementDexSave: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeDexSave, incrementDexSave } = dexSave.actions;
export const selectDexSave = (state) => state.dexSave.value;
export default dexSave.reducer;
