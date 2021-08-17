import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    addInputValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addInputValue } = inputSlice.actions;
export default inputSlice.reducer;
