import { configureStore } from "@reduxjs/toolkit";
import { chessSlice } from "../Component/chessbroad/chessSlice";
import { turnSlice } from "../chessLaw/chessTurn/TurnSlice";
export const store = configureStore({
  reducer: {
    broadReducer: chessSlice.reducer,
    turnReducer: turnSlice.reducer,
  },
});
export const broadSelector = (state) => state;
export const turnSelector = (state) => state.turnReducer;
