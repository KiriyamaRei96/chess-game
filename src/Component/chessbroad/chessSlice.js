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
import { message } from "antd";
const chessBroad = [
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
];
export const chessSlice = createSlice({
  name: "chessbroad",
  initialState: {
    chessBroad,
    selectedUnit: {},
    captureUnit: {
      black: [],
      white: [],
    },
    promotion: undefined,
  },
  reducers: {
    whileSide: (state) => {
      state.selectedUnit = {};
      state.captureUnit = {
        black: [],
        white: [],
      };
      state.chessBroad = [...chessBroad];

      state.chessBroad[0] = [
        { color: "black", img: blackRook, unit: "rook", firstMove: true },
        { color: "black", img: blackKnight, unit: "knight" },
        { color: "black", img: blackBishop, unit: "bishop" },
        { color: "black", img: blackQueen, unit: "queen" },
        { color: "black", img: blackKing, unit: "king", firstMove: true },
        { color: "black", img: blackBishop, unit: "bishop" },
        { color: "black", img: blackKnight, unit: "knight" },
        { color: "black", img: blackRook, unit: "rook", firstMove: true },
      ];
      state.chessBroad[1] = [
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
      ];

      state.chessBroad[6] = [
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
      ];
      state.chessBroad[7] = [
        { color: "white", img: whiteRook, unit: "rook", firstMove: true },
        { color: "white", img: whiteKnight, unit: "knight" },
        { color: "white", img: whiteBishop, unit: "bishop" },
        { color: "white", img: whiteQueen, unit: "queen" },
        { color: "white", img: whiteKing, unit: "king", firstMove: true },
        { color: "white", img: whiteBishop, unit: "bishop" },
        { color: "white", img: whiteKnight, unit: "knight" },
        { color: "white", img: whiteRook, unit: "rook", firstMove: true },
      ];
    },
    blackSide: (state) => {
      state.selectedUnit = {};
      state.captureUnit = {
        black: [],
        white: [],
      };
      state.chessBroad = [...chessBroad];
      state.chessBroad[7] = [
        { color: "black", img: blackRook, unit: "rook", firstMove: true },
        { color: "black", img: blackKnight, unit: "knight" },
        { color: "black", img: blackBishop, unit: "bishop" },
        { color: "black", img: blackQueen, unit: "queen" },
        { color: "black", img: blackKing, unit: "king", firstMove: true },
        { color: "black", img: blackBishop, unit: "bishop" },
        { color: "black", img: blackKnight, unit: "knight" },
        { color: "black", img: blackRook, unit: "rook", firstMove: true },
      ];
      state.chessBroad[6] = [
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
        {
          color: "black",
          unit: "paw",
          firstMove: true,

          img: blackPaw,
        },
      ];

      state.chessBroad[1] = [
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
        {
          color: "white",
          unit: "paw",
          firstMove: true,

          img: whitePaw,
        },
      ];
      state.chessBroad[0] = [
        { color: "white", img: whiteRook, unit: "rook", firstMove: true },
        { color: "white", img: whiteKnight, unit: "knight" },
        { color: "white", img: whiteBishop, unit: "bishop" },
        { color: "white", img: whiteQueen, unit: "queen" },
        { color: "white", img: whiteKing, unit: "king", firstMove: true },
        { color: "white", img: whiteBishop, unit: "bishop" },
        { color: "white", img: whiteKnight, unit: "knight" },
        { color: "white", img: whiteRook, unit: "rook", firstMove: true },
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
                  box.onmove = "#ff4d4f";
                }
              }
            });
        }
      });
      state.selectedUnit = actions.payload.selectedUnit;
      state.chessBroad = prvState;
    },
    move: (state, actions) => {
      const currentUnit = current(state).selectedUnit.unit;
      const currentPosition = current(state).selectedUnit.potisons;
      state.chessBroad.forEach((row, id) =>
        row.forEach((box, index) => {
          box.onmove = undefined;
        })
      );

      state.chessBroad[currentPosition[0]][currentPosition[1]] = {};

      if (currentUnit.unit === "king" && currentUnit.firstMove) {
        switch (actions.payload.potisons.join("")) {
          case "02":
            state.chessBroad[0][3] = state.chessBroad[0][0];
            state.chessBroad[0][0] = {};
            message.info("Castling");
            break;
          case "72":
            state.chessBroad[7][3] = state.chessBroad[7][0];
            state.chessBroad[7][0] = {};
            message.info("Castling");
            break;
          case "06":
            state.chessBroad[0][5] = state.chessBroad[0][7];
            state.chessBroad[0][7] = {};
            message.info("Castling");
            break;
          case "76":
            state.chessBroad[7][5] = state.chessBroad[7][7];
            state.chessBroad[7][7] = {};
            message.info("Castling");
            break;
          default:
            break;
        }
      }

      if (
        (currentUnit.unit === "paw" && actions.payload.potisons[0] === 0) ||
        (currentUnit.unit === "paw" && actions.payload.potisons[0] === 7)
      ) {
        state.promotion = {
          potisons: actions.payload.potisons,
          color: currentUnit.color,
        };
      }
      state.chessBroad[actions.payload.potisons[0]][
        actions.payload.potisons[1]
      ] = { ...currentUnit, firstMove: false };

      if (actions.payload.info.unit !== undefined) {
        state.captureUnit[actions.payload.info.color].push(
          actions.payload.info
        );
      }
    },
    setPromotion: (state, action) => {
      const potisons = action.payload.potisons;

      state.chessBroad[potisons[0]][potisons[1]] = action.payload.unit;
      state.promotion = undefined;
    },
  },
});
export const { whileSide, blackSide, chessMove, move, test, setPromotion } =
  chessSlice.actions;
