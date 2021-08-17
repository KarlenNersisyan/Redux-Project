import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../redux-toolkit/inputSlice";
import counterSlice from "../redux-toolkit/counterSlice";

export const storeTk = configureStore({
  reducer: {
    input: inputSlice,
    counts: counterSlice,
  },
});
