import { createSlice } from "@reduxjs/toolkit";

export const conSave = createSlice({
  name: "conSave",
  initialState: {
    value: 0,
  },
  reducers: {
    changeConSave: (state, action) => {
      state.value = action.payload;
    },
    incrementConSave: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeConSave, incrementConSave } = conSave.actions;
export const selectConSave = (state) => state.conSave.value;
export default conSave.reducer;
