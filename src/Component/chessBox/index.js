import { Tag, Col } from "antd";
import { chessMove, move, AImove } from "../chessbroad/chessSlice";
import { setTurn, setTurnNumber } from "../../chessLaw/chessTurn/TurnSlice";
import { useSelector } from "react-redux/es/exports";
import { broadSelector } from "../../store/strore";
import {
  bishopMove,
  rookMove,
  queenMove,
  knightMove,
  kingMove,
  pawMove,
} from "../../chessLaw/chessmove/chessMove";
import { useDispatch } from "react-redux";
import openNotificationWithIcon from "../../funcion/noti";
import style from "../chessbroad/chessBroad.module.css";
import { useEffect } from "react";
function Box({ className, color, potisons, info, img, onmove }) {
  const state = useSelector(broadSelector).broadReducer;
  const colorTurn = useSelector(broadSelector).turnReducer.turnColor;
  const playerColor = useSelector(broadSelector).turnReducer.playerColor;
  const gameMode = useSelector(broadSelector).turnReducer.mode;

  let turnNumber = useSelector(broadSelector).turnReducer.turn;

  const dispatch = useDispatch();

  const AIMoveGenerator = (info, potison) => {
    switch (info.unit) {
      case "bishop":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },

          moves: bishopMove(potison, state.chessBroad, info.color),
        };

      case "rook":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },

          moves: rookMove(potison, state.chessBroad, info.color),
        };
      case "queen":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },
          turnColor: colorTurn,
          moves: queenMove(potison, state.chessBroad, info.color),
        };

      case "knight":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },

          moves: knightMove(potison, state.chessBroad, info.color),
        };

      case "king":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },

          moves: kingMove(
            potison,
            state.chessBroad,
            info.color,
            info.firstMove,
            playerColor
          ),
        };

      case "paw":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },

          moves: pawMove(
            potison,
            state.chessBroad,
            info.color,
            info.firstMove,
            playerColor
          ),
        };

      default:
        console.log(info.onmove, "error");
        break;
    }
  };
  const AITurn = () => {
    let AIarr = [];
    state.chessBroad.forEach((Col, id) => {
      for (let index in Col) {
        if (Col[index].unit && Col[index].color !== playerColor) {
          const unitMove = AIMoveGenerator(Col[index], [id, index]);
          if (unitMove.moves.length > 0) {
            AIarr.push({
              potisons:
                unitMove.moves[
                  Math.floor(Math.random() * unitMove.moves.length)
                ],
              selectedUnit: unitMove.selectedUnit,
            });
          }
        }
      }
    });

    dispatch(AImove(AIarr[Math.floor(Math.random() * AIarr.length)]));
    dispatch(setTurn(colorTurn === "black" ? "white" : "black"));
    dispatch(setTurnNumber((turnNumber += 1)));
  };
  const clickHandler = () => {
    if (info.onmove !== undefined) {
      dispatch(
        move({
          potisons: [potisons.collum, potisons.row],
          info: info,
        })
      );

      dispatch(setTurn(colorTurn));
      dispatch(setTurnNumber((turnNumber += 1)));
      if (gameMode === "random") {
        AITurn();
      }
    }

    if (
      (info.unit &&
        info.color !== playerColor &&
        info.onmove === undefined &&
        gameMode === "random") ||
      (info.unit && info.color !== colorTurn && info.onmove === undefined)
    ) {
      gameMode !== "random"
        ? openNotificationWithIcon(
            "warning",
            colorTurn === "white" ? "White turn" : "Black turn",
            colorTurn === "white"
              ? "Please chose unit in white color"
              : "Please chose unit in black color"
          )
        : openNotificationWithIcon(
            "warning",
            info.color !== playerColor ? "AI unit" : "AI turn",
            info.color !== playerColor
              ? "Please chose unit in white color"
              : "Please wait,for AI to please AI turn"
          );
      return;
    }

    if (info.unit && info.color === colorTurn)
      switch (info.unit) {
        case "bishop":
          dispatch(
            chessMove({
              selectedUnit: {
                potisons: [potisons.collum, potisons.row],
                unit: info,
              },

              turnColor: colorTurn,
              moves: bishopMove(
                [potisons.collum, potisons.row],
                state.chessBroad,
                info.color
              ),
            })
          );
          break;
        case "rook":
          dispatch(
            chessMove({
              selectedUnit: {
                potisons: [potisons.collum, potisons.row],
                unit: info,
              },

              turnColor: colorTurn,
              moves: rookMove(
                [potisons.collum, potisons.row],
                state.chessBroad,
                info.color
              ),
            })
          );
          break;
        case "queen":
          dispatch(
            chessMove({
              selectedUnit: {
                potisons: [potisons.collum, potisons.row],
                unit: info,
              },
              turnColor: colorTurn,
              moves: queenMove(
                [potisons.collum, potisons.row],
                state.chessBroad,
                info.color
              ),
            })
          );
          break;
        case "knight":
          dispatch(
            chessMove({
              selectedUnit: {
                potisons: [potisons.collum, potisons.row],
                unit: info,
              },

              turnColor: colorTurn,
              moves: knightMove(
                [potisons.collum, potisons.row],
                state.chessBroad,
                info.color
              ),
            })
          );
          break;

        case "king":
          dispatch(
            chessMove({
              selectedUnit: {
                potisons: [potisons.collum, potisons.row],
                unit: info,
              },

              turnColor: colorTurn,
              moves: kingMove(
                [potisons.collum, potisons.row],
                state.chessBroad,
                info.color,
                info.firstMove,
                playerColor
              ),
            })
          );
          break;
        case "paw":
          dispatch(
            chessMove({
              selectedUnit: {
                potisons: [potisons.collum, potisons.row],
                unit: info,
              },

              turnColor: colorTurn,
              moves: pawMove(
                [potisons.collum, potisons.row],
                state.chessBroad,
                info.color,
                info.firstMove,
                playerColor
              ),
            })
          );
          break;

        default:
          console.log(info.onmove, "error");
          break;
      }
  };

  return (
    <Col onClick={clickHandler} span={3}>
      <Tag className={className} color={color}>
        {info.unit !== undefined ? <img src={img} alt="chess unit" /> : false}
        {onmove ? (
          <div
            style={{
              boxShadow: `0px 0px 30px 17px inset ${info.onmove}`,
              border: `1px solid transparent`,
            }}
            className={style.moveColor}
          ></div>
        ) : (
          false
        )}
      </Tag>
    </Col>
  );
}
export default Box;
// box-shadow: inset 0 0 26px 15px lightgreen;
