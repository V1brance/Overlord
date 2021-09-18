import { configureStore } from "@reduxjs/toolkit";
import skillModReducer from "../features/skillMod/skillModSlice";

export default configureStore({
  reducer: {
    skillMod: skillModReducer,
  },
});
