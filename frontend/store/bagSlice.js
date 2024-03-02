import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state.filter((item) => item === action.payload);
    },
  },
});

export const bagSliceActions = bagSlice.actions;

export default bagSlice;
