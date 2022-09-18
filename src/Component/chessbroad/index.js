import { Row, Col, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { broadSelector, turnSelector } from "../../store/strore";
import style from "./chessBroad.module.css";
import Box from "../chessBox";
import { useEffect } from "react";
import {
  bishopMove,
  kingMove,
  knightMove,
  pawMove,
  queenMove,
  rookMove,
} from "../../chessLaw/chessmove/chessMove";
import { AImove } from "./chessSlice";
import { setTurn, setTurnNumber } from "../../chessLaw/chessTurn/TurnSlice";
function Chessbroad() {
  const chest = useSelector(broadSelector).broadReducer;
  const colorTurn = useSelector(broadSelector).turnReducer.turnColor;
  const playerColor = useSelector(broadSelector).turnReducer.playerColor;
  const gameMode = useSelector(broadSelector).turnReducer.mode;
  let turnNumber = useSelector(broadSelector).turnReducer.turn;

  useEffect(() => {
    if (gameMode === "random" && colorTurn !== playerColor) {
      AITurn();
    }
  }, [chest]);

  const dispatch = useDispatch();

  const AIMoveGenerator = (info, potison) => {
    switch (info.unit) {
      case "bishop":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },

          moves: bishopMove(potison, chest.chessBroad, info.color),
        };

      case "rook":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },

          moves: rookMove(potison, chest.chessBroad, info.color),
        };
      case "queen":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },
          turnColor: colorTurn,
          moves: queenMove(potison, chest.chessBroad, info.color),
        };

      case "knight":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },

          moves: knightMove(potison, chest.chessBroad, info.color),
        };

      case "king":
        return {
          selectedUnit: {
            potison,
            unit: info,
          },

          moves: kingMove(
            potison,
            chest.chessBroad,
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
            chest.chessBroad,
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

    chest.chessBroad.forEach((Col, id) => {
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
    dispatch(setTurn(colorTurn));
    dispatch(setTurnNumber((turnNumber += 1)));
  };
  return (
    <Row className={style.chessbroad}>
      <Col style={{ display: "flex", flexWrap: "wrap" }} span={24}>
        {chest.chessBroad.map((col, id) => {
          return col.map((row, index) => {
            if (id % 2 === 0) {
              if (index % 2 === 0) {
                return (
                  <Box
                    className={`${style.Box}`}
                    key={`col-${id}row-${index}`}
                    potisons={{ collum: id, row: index }}
                    color="blue"
                    img={row.img}
                    info={row}
                    onmove={row.onmove}
                  ></Box>
                );
              }

              if (index % 2 !== 0) {
                return (
                  <Box
                    className={`${style.Box} ${style.whiteBox}`}
                    key={`col-${id}row-${index}`}
                    potisons={{ collum: id, row: index }}
                    color="antiquewhite"
                    img={row.img}
                    info={row}
                    onmove={row.onmove}
                  />
                );
              }
            }

            if (id % 2 !== 0) {
              if (index % 2 !== 0) {
                return (
                  <Box
                    className={`${style.Box}`}
                    key={`col-${id}row-${index}`}
                    potisons={{ collum: id, row: index }}
                    color="blue"
                    img={row.img}
                    info={row}
                    onmove={row.onmove}
                  ></Box>
                );
              }

              if (index % 2 === 0) {
                return (
                  <Box
                    className={`${style.Box} ${style.whiteBox}`}
                    key={`col-${id}row-${index}`}
                    potisons={{ collum: id, row: index }}
                    color="antiquewhite"
                    img={row.img}
                    info={row}
                    onmove={row.onmove}
                  />
                );
              }
            }
          });
        })}
      </Col>
    </Row>
  );
}
export default Chessbroad;
