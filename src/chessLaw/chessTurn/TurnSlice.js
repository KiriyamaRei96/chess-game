import { createSlice, current } from "@reduxjs/toolkit";

export const turnSlice = createSlice({
  name: "chess turn",
  initialState: {
    turnColor: "",
    playerColor: "",
  },
  reducers: {
    startGame: (state, action) => {
      state.turnColor = action.payload;
      state.playerColor = action.payload;
    },
  },
});
export const { startGame } = turnSlice.actions;
