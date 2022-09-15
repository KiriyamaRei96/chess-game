import { Row, Col, Tag } from "antd";
import { useSelector } from "react-redux/es/exports";
import { broadSelector, turnSelector } from "../../store/strore";
import style from "./chessBroad.module.css";
import Box from "../chessBox";
function Chessbroad() {
  const chest = useSelector(broadSelector).broadReducer;
  const side = useSelector(turnSelector);

  return (
    <>
      <Tag>player color:{side.playerColor}</Tag>
      <Tag>turn color:{side.turnColor}</Tag>
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
    </>
  );
}
export default Chessbroad;
