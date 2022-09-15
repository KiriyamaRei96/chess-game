import { createSlice, current } from "@reduxjs/toolkit";

export const turnSlice = createSlice({
  name: "chess turn",
  initialState: {
    turnColor: "",
    playerColor: "",
  },
  reducers: {
    startGame: (state) => {
      state.turnColor = "white";
    },
  },
});
export const { startGame } = turnSlice.actions;
