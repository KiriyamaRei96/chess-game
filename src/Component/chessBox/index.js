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
        "Bạn không thể chọn quân cờ đối phương !",
        "Bạn đang chọn quân cờ của đối phương,hãy chọn quân cờ đúng màu"
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
        {`col-${potisons.collum}row-${potisons.row}`}
        {info.unit !== undefined ? <img src={img} alt="chess unit" /> : false}
        {onmove ? (
          <Tag
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              margin: "0",
              opacity: "0.7",
              border: "1px black solid",
            }}
            color={onmove}
          ></Tag>
        ) : (
          false
        )}
      </Tag>
    </Col>
  );
}
export default Box;
