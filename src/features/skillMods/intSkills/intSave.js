import { createSlice } from "@reduxjs/toolkit";

export const intSave = createSlice({
  name: "intSave",
  initialState: {
    value: 0,
  },
  reducers: {
    changeIntSave: (state, action) => {
      state.value = action.payload;
    },
    incrementIntSave: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeIntSave, incrementIntSave } = intSave.actions;
export const selectIntSave = (state) => state.intSave.value;
export default intSave.reducer;
