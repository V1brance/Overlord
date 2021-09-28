import { createSlice } from "@reduxjs/toolkit";

export const history = createSlice({
  name: "history",
  initialState: {
    value: 0,
  },
  reducers: {
    changeHistory: (state, action) => {
      state.value = action.payload;
    },
    incrementHistory: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { changeHistory, incrementHistory } = history.actions;
export const selectHistory = (state) => state.history.value;
export default history.reducer;
