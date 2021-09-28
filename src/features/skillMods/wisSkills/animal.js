import { createSlice } from "@reduxjs/toolkit";

export const animal = createSlice({
  name: "animal",
  initialState: {
    value: 0,
  },
  reducers: {
    changeAnimal: (state, action) => {
      state.value = action.payload;
    },
    incrementAnimal: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeAnimal, incrementAnimal } = animal.actions;
export const selectAnimal = (state) => state.animal.value;
export default animal.reducer;
