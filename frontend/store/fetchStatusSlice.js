import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    currentlyFetching: false,
    fetchDone: false,
  },
  reducers: {
    currentlyFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    currentlyFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
    setFetchDone: (state) => {
      state.fetchDone = true;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
