//since this is the first skill rendered it is my template for documentation
//please refer to here for all of the other skill slices in the skillMod folder

import { createSlice } from "@reduxjs/toolkit";

//create slice called strSave
export const strSave = createSlice({
  name: "strSave",
  //set the modifier value to 0
  //this will be read from a db eventuall
  initialState: {
    value: 0,
  },
  //defines reducers, allow us to make changes to the state from the store
  reducers: {
    //fallback in case I have to rest the value or something
    //don't do this
    //state should be modified in some way not just reset, I know its bad but its a just-in-case measure
    changeStrSave: (state, action) => {
      state.value = action.payload;
    },
    //in our components, we will dispatch (generally) a 1 or -1 and this reducer handles the changing of state
    incrementStrSave: (state, action) => {
      state.value += action.payload;
    },
  },
});

//compile the reducers into the actions
export const { changeStrSave, incrementStrSave } = strSave.actions;
//selector statement so that this state variable is usable in components
export const selectStrSave = (state) => state.strSave.value;
//compiles as a reducers
export default strSave.reducer;
