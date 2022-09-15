import { createSlice, current } from "@reduxjs/toolkit";
// white unit
import whitePaw from "../../img/white/paw.png";
import whiteRook from "../../img/white/rook.png";
import whiteKnight from "../../img/white/knight.png";
import whiteBishop from "../../img/white/bishop.png";
import whiteQueen from "../../img/white/queen.png";
import whiteKing from "../../img/white/king.png";
// black unit
import blackPaw from "../../img/black/paw.png";
import blackRook from "../../img/black/rook.png";
import blackKnight from "../../img/black/knight.png";
import blackBishop from "../../img/black/bishop.png";
import blackQueen from "../../img/black/queen.png";
import blackKing from "../../img/black/king.png";

export const chessSlice = createSlice({
  name: "chessbroad",
  initialState: {
    chessBroad: [
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
    ],
    selectedUnit: "",
  },
  reducers: {
    whileSide: (state) => {
      state.chessBroad[0] = [
        { color: "black", img: blackRook, unit: "rook" },
        { color: "black", img: blackKnight, unit: "knight" },
        { color: "black", img: blackBishop, unit: "bishop" },
        { color: "black", img: blackQueen, unit: "queen" },
        { color: "black", img: blackKing, unit: "king", firtMove: true },
        { color: "black", img: blackBishop, unit: "bishop" },
        { color: "black", img: blackKnight, unit: "knight" },
        { color: "black", img: blackRook, unit: "rook" },
      ];
      state.chessBroad[1] = [
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
      ];

      state.chessBroad[3] = [
        {},
        { color: "black", img: blackKnight, unit: "knight" },
        { color: "black", img: blackKing, unit: "king", firtMove: true },
        { color: "white", img: whiteQueen, unit: "queen" },
        {},
        {},
        {},
        {},
      ];
      state.chessBroad[6] = [
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
      ];
      state.chessBroad[7] = [
        { color: "white", img: whiteRook, unit: "rook" },
        { color: "white", img: whiteKnight, unit: "knight" },
        { color: "white", img: whiteBishop, unit: "bishop" },
        { color: "white", img: whiteQueen, unit: "queen" },
        { color: "white", img: whiteKing, unit: "king", firtMove: true },
        { color: "white", img: whiteBishop, unit: "bishop" },
        { color: "white", img: whiteKnight, unit: "knight" },
        { color: "white", img: whiteRook, unit: "rook" },
      ];
    },
    blackSide: (state) => {
      state.chessBroad[7] = [
        { color: "black", img: blackRook, unit: "rook" },
        { color: "black", img: blackKnight, unit: "knight" },
        { color: "black", img: blackBishop, unit: "bishop" },
        { color: "black", img: blackQueen, unit: "queen" },
        { color: "black", img: blackKing, unit: "king", firtMove: true },
        { color: "black", img: blackBishop, unit: "bishop" },
        { color: "black", img: blackKnight, unit: "knight" },
        { color: "black", img: blackRook, unit: "rook" },
      ];
      state.chessBroad[6] = [
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
        { color: "black", unit: "paw", firtMove: true, img: blackPaw },
      ];

      state.chessBroad[1] = [
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
        { color: "white", unit: "paw", firtMove: true, img: whitePaw },
      ];
      state.chessBroad[0] = [
        { color: "white", img: whiteRook, unit: "rook" },
        { color: "white", img: whiteKnight, unit: "knight" },
        { color: "white", img: whiteBishop, unit: "bishop" },
        { color: "white", img: whiteQueen, unit: "queen" },
        { color: "white", img: whiteKing, unit: "king", firtMove: true },
        { color: "white", img: whiteBishop, unit: "bishop" },
        { color: "white", img: whiteKnight, unit: "knight" },
        { color: "white", img: whiteRook, unit: "rook" },
      ];
    },
    testState: (state) => {
      state.chessBroad = [
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [
          {},
          {},
          {},
          { onmove: "", color: "white", img: whiteBishop, unit: "bishop" },
          {},
          {},
          {},
          {},
        ],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
      ];
    },
    chessMove: (state, actions) => {
      const prvState = JSON.parse(JSON.stringify(current(state).chessBroad));

      prvState.forEach((row, id) =>
        row.forEach((box, index) => {
          box.onmove = undefined;
        })
      );
      prvState.forEach((row, id) => {
        for (let move of actions.payload.moves) {
          if (id === move[0])
            row.forEach((box, index) => {
              if (index === move[1]) {
                if (box.color === undefined) {
                  box.onmove = "lightgreen";
                }
                if (box.color !== undefined) {
                  box.onmove = "crimson";
                }
              }
            });
        }
      });

      state.chessBroad = prvState;
    },
  },
});
export const { whileSide, blackSide, testState, chessMove } =
  chessSlice.actions;
