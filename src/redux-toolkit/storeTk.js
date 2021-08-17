import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../redux-toolkit/inputSlice";

export const store = configureStore({
  reducer: {
    input: inputSlice,
  },
});
