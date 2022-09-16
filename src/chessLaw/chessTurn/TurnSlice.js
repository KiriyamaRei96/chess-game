import { createSlice, current } from "@reduxjs/toolkit";

export const turnSlice = createSlice({
  name: "chess turn",
  initialState: {
    turn: 0,
    turnColor: "white",
    playerColor: "",
  },
  reducers: {
    startGame: (state, action) => {
      state.playerColor = action.payload;
      state.turnColor = "white";
      state.turn = 1;
    },
    setTurn: (state, action) => {
      action.payload === "white"
        ? (state.turnColor = "black")
        : (state.turnColor = "white");
    },
    setTurnNumber: (state, action) => {
      state.turn = action.payload;
    },
  },
});
export const { startGame, setTurn, setTurnNumber } = turnSlice.actions;
