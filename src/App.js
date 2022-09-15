import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  whileSide,
  blackSide,
  testState,
} from "./Component/chessbroad/chessSlice";
import { startGame } from "./chessLaw/chessTurn/TurnSlice";
import { Button } from "antd";
import "./App.css";
import Chessbroad from "./Component/chessbroad";
function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Button onClick={() => dispatch(whileSide())}>white</Button>
      <Button onClick={() => dispatch(blackSide())}>black</Button>
      <Button onClick={() => dispatch(testState())}>test</Button>
      <Button onClick={() => dispatch(startGame())}>start</Button>

      <Chessbroad />
    </div>
  );
}

export default App;
