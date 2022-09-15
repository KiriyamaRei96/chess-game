import { Tag, Col } from "antd";
import { chessMove } from "../chessbroad/chessSlice";
import { useSelector } from "react-redux/es/exports";
import { broadSelector } from "../../store/strore";
import {
  bishopMove,
  rookMove,
  queenMove,
  knightMove,
} from "../../chessLaw/chessmove/chessMove";
import { useDispatch } from "react-redux";

function Box({ className, color, potisons, info, img, onmove }) {
  const state = useSelector(broadSelector).broadReducer;
  const colorTurn = useSelector(broadSelector).turnReducer.turnColor;

  const dispatch = useDispatch();

  const clickHandler = () => {
    console.log(info.unit);
    switch (info.unit) {
      case "bishop":
        dispatch(
          chessMove({
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
        console.log(info);
        dispatch(
          chessMove({
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
            turnColor: colorTurn,
            moves: knightMove(
              [potisons.collum, potisons.row],
              state.chessBroad,
              info.color
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
