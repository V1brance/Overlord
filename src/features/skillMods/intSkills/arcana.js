import { createSlice } from "@reduxjs/toolkit";

export const arcana = createSlice({
  name: "arcana",
  initialState: {
    value: 0,
  },
  reducers: {
    changeArcana: (state, action) => {
      state.value = action.payload;
    },
    incrementArcana: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeArcana, incrementArcana } = arcana.actions;
export const selectArcana = (state) => state.arcana.value;
export default arcana.reducer;
