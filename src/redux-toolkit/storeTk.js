import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../redux-toolkit/inputSlice";

export const storeTk = configureStore({
  reducer: {
    input: inputSlice,
  },
});
