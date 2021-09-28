import { createSlice } from "@reduxjs/toolkit";

export const medicine = createSlice({
  name: "medicine",
  initialState: {
    value: 0,
  },
  reducers: {
    changeMedicine: (state, action) => {
      state.value = action.payload;
    },
    incrementMedicine: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeMedicine, incrementMedicine } = medicine.actions;
export const selectMedicine = (state) => state.medicine.value;
export default medicine.reducer;
