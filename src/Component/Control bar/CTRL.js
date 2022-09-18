import { Button, Col, message, Modal, Tag } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { startGame, setMode } from "../../chessLaw/chessTurn/TurnSlice";
import { broadSelector, turnSelector } from "../../store/strore";
import { blackSide, whileSide, setPromotion } from "../chessbroad/chessSlice";
import { v4 as uuid } from "uuid";
import style from "./style.module.css";
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
const black = {
  paw: blackPaw,
  rook: blackRook,
  knight: blackKnight,
  bishop: blackBishop,
  queen: blackQueen,
  king: blackKing,
};
const white = {
  paw: whitePaw,
  rook: whiteRook,
  knight: whiteKnight,
  bishop: whiteBishop,
  queen: whiteQueen,
  king: whiteKing,
};

const unit = {
  black: [
    { color: "black", img: blackRook, unit: "rook" },
    { color: "black", img: blackKnight, unit: "knight" },
    { color: "black", img: blackBishop, unit: "bishop" },
    { color: "black", img: blackQueen, unit: "queen" },
  ],
  white: [
    { color: "white", img: whiteRook, unit: "rook" },
    { color: "white", img: whiteKnight, unit: "knight" },
    { color: "white", img: whiteBishop, unit: "bishop" },
    { color: "white", img: whiteQueen, unit: "queen" },
  ],
};

function CTRL() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const turnNumber = useSelector(turnSelector).turn;
  const turnColor = useSelector(turnSelector).turnColor;
  const captureUnit = useSelector(broadSelector).broadReducer.captureUnit;
  const promotion = useSelector(broadSelector).broadReducer.promotion;

  useEffect(() => {
    if (
      captureUnit.black.some((unit) => unit.unit === "king") ||
      captureUnit.white.some((unit) => unit.unit === "king")
    ) {
      setGameEnd(true);
    }
  }, [captureUnit]);
  return (
    <>
      <Modal
        visible={gameEnd}
        closable={false}
        title={
          captureUnit.white.some((unit) => unit.unit === "king")
            ? "Black Win"
            : "White Win"
        }
        footer={
          <div className={style.btnWrapper}>
            <Button
              onClick={() => {
                dispatch(whileSide());
                dispatch(startGame("white"));
                setGameEnd(false);
              }}
            >
              PvP
            </Button>
            <Button
              onClick={() => {
                dispatch(blackSide());
                dispatch(startGame("black"));
                setGameEnd(false);
              }}
            >
              Random
            </Button>
          </div>
        }
      >
        <span>
          {captureUnit.white.some((unit) => unit.unit === "king")
            ? "Congratulations black player! please chose color to replay"
            : "Congratulations white player! please chose color to replay"}
        </span>
      </Modal>
      <Modal
        closable={false}
        title="Promotion"
        visible={promotion !== undefined}
        footer={
          <div className={style.promotionBox}>
            {promotion !== undefined
              ? unit[promotion.color].map((u) => (
                  <Button
                    onClick={() => {
                      dispatch(
                        setPromotion({ potisons: promotion.potisons, unit: u })
                      );
                      message.info("Promotion");
                    }}
                    key={uuid()}
                    className={style.promotionUnit}
                  >
                    <img src={u.img}></img>
                  </Button>
                ))
              : false}
          </div>
        }
      >
        <span>Please chose unit to replace.</span>
      </Modal>
      <Modal
        title={turnNumber === 0 ? "Start Game" : "Restart Game"}
        visible={isModalOpen}
        onCancel={closeModal}
        footer={
          <div className={style.btnWrapper}>
            <Button
              onClick={() => {
                dispatch(whileSide());
                dispatch(startGame("white"));
                dispatch(setMode("pvp"));

                closeModal();
              }}
            >
              PvP
            </Button>
            <Button
              onClick={() => {
                dispatch(whileSide());
                dispatch(startGame("white"));
                dispatch(setMode("random"));
                closeModal();
              }}
            >
              Random Bot
            </Button>
          </div>
        }
      >
        {turnNumber === 0 ? (
          <span className={style.modalContend}>
            {` Welcome to Redux ChessGame Beta! 
            This is a simple chess game build from React-js,Redux and ANT Design.
            Game rule:
            1.Game mode:
            _Player 1 vs player 2.Like the old day.
            _The game AI is not yet finish,but it still can play with you in random mode,
            the AI will pick random valid move from all move possible.
            2.Select game mode to start the game.
            3.The game will end when one side King get capture.
            4.Have fun. ^^
            `}
          </span>
        ) : (
          <span> Restart Game </span>
        )}
      </Modal>
      <Col className={style.menuBar} xl={6} xxl={6} lg={0}>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          {turnNumber === 0 ? "Start Game" : "Restart Game"}
        </Button>
        <div className={style.gameInfo}>
          <Tag>Turn color: {turnColor} </Tag>
          <Tag>Turn number: {turnNumber} </Tag>
        </div>
        <div className={style.captureGroup}>
          <div>
            <span>white capture unit:</span>
            <div className={style.captureBox}>
              {captureUnit.black.map((unit) => (
                <div className={style.captureUnit} key={uuid()}>
                  <img src={black[unit.unit]}></img>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span>black capture unit:</span>
            <div className={style.captureBox}>
              {captureUnit.white.map((unit) => (
                <div className={style.captureUnit} key={uuid()}>
                  <img src={white[unit.unit]}></img>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
export default CTRL;
