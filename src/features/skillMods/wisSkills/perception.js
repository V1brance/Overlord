import { createSlice } from "@reduxjs/toolkit";

export const perception = createSlice({
  name: "perception",
  initialState: {
    value: 0,
  },
  reducers: {
    changePerception: (state, action) => {
      state.value = action.payload;
    },
    incrementPerception: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changePerception, incrementPerception } = perception.actions;
export const selectPerception = (state) => state.perception.value;
export default perception.reducer;
