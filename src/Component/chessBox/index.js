import { Tag, Col } from "antd";
import { chessMove, move } from "../chessbroad/chessSlice";
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
function Box({ className, color, potisons, info, img, onmove }) {
  const state = useSelector(broadSelector).broadReducer;
  const colorTurn = useSelector(broadSelector).turnReducer.turnColor;
  const playerColor = useSelector(broadSelector).turnReducer.playerColor;
  let turnNumber = useSelector(broadSelector).turnReducer.turn;

  const dispatch = useDispatch();

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
    }

    if (info.unit && info.color !== colorTurn && info.onmove === undefined) {
      openNotificationWithIcon(
        "warning",
        colorTurn === "white" ? "White turn" : "Black turn",
        colorTurn === "white"
          ? "Please chose unit in white color"
          : "Please chose unit in black color"
      );
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
