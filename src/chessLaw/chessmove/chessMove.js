function checkMoves(moves = [], state, side, position, unit) {
  let outPut1 = [...moves[0]];
  let outPut2 = [...moves[1]];
  switch (unit) {
    case "paw":
      state.forEach((row, id) => {
        row.forEach((box, index) => {
          for (let move of moves[0]) {
            if (move[0] == id && move[1] == index) {
              if (box.unit !== undefined) {
                outPut1.splice(outPut1.indexOf(`${id}${index}`), 2);
              }
            }
          }
          for (let move of moves[1]) {
            if (move[0] == id && move[1] == index) {
              if (box.unit === undefined || box.color === side) {
                outPut2.splice(outPut2.indexOf(`${id}${index}`), 1);
              }
            }
          }
        });
      });
      break;

    case "king":
    case "knight":
      state.forEach((row, id) => {
        row.forEach((box, index) => {
          for (let move of moves[0]) {
            if (move[0] == id) {
              if (move[1] == index) {
                if (box.color === side) {
                  outPut1.splice(outPut1.indexOf(`${id}${index}`), 1);
                }
              }
            }
          }
          for (let move of moves[1]) {
            if (move[0] == id) {
              if (move[1] == index) {
                if (box.color === side) {
                  outPut2.splice(outPut2.indexOf(`${id}${index}`), 1);
                }
              }
            }
          }
        });
      });
      break;

    default:
      state.forEach((row, id) => {
        row.forEach((box, index) => {
          for (let move of moves[0]) {
            if (move[0] == id) {
              if (move[1] == index) {
                if (box.color === side) {
                  if (
                    outPut1.indexOf(`${id}${index}`) < outPut1.indexOf(position)
                  ) {
                    outPut1.splice(
                      0,
                      Number(outPut1.indexOf(`${id}${index}`) + 1)
                    );
                  }

                  if (
                    outPut1.indexOf(position) < outPut1.indexOf(`${id}${index}`)
                  ) {
                    outPut1.splice(
                      Number(outPut1.indexOf(`${id}${index}`)),
                      outPut1.length
                    );
                  }
                }
                if (box.color !== side && box.color !== undefined) {
                  if (
                    outPut1.indexOf(`${id}${index}`) < outPut1.indexOf(position)
                  ) {
                    outPut1.splice(0, Number(outPut1.indexOf(`${id}${index}`)));
                  }

                  if (
                    outPut1.indexOf(position) < outPut1.indexOf(`${id}${index}`)
                  ) {
                    outPut1.splice(
                      Number(outPut1.indexOf(`${id}${index}`) + 1),
                      outPut1.length
                    );
                  }
                }
              }
            }
          }
          for (let move of moves[1]) {
            if (move[0] == id) {
              if (move[1] == index) {
                if (box.color == side) {
                  if (
                    outPut2.indexOf(`${id}${index}`) < outPut2.indexOf(position)
                  ) {
                    outPut2.splice(
                      0,
                      Number(outPut2.indexOf(`${id}${index}`) + 1)
                    );
                  }
                  if (
                    outPut2.indexOf(position) < outPut2.indexOf(`${id}${index}`)
                  ) {
                    outPut2.splice(
                      Number(outPut2.indexOf(`${id}${index}`)),
                      outPut2.length
                    );
                  }
                }

                if (box.color !== side && box.color !== undefined) {
                  if (
                    outPut2.indexOf(`${id}${index}`) < outPut2.indexOf(position)
                  ) {
                    outPut2.splice(0, Number(outPut2.indexOf(`${id}${index}`)));
                  }

                  if (
                    outPut2.indexOf(position) < outPut2.indexOf(`${id}${index}`)
                  ) {
                    outPut2.splice(
                      Number(outPut2.indexOf(`${id}${index}`) + 1),
                      outPut2.length
                    );
                  }
                }
              }
            }
          }
        });
      });
      break;
  }

  let outPut = [
    ...outPut1.filter((item) => item !== position),
    ...outPut2.filter((item) => item !== position),
  ];
  outPut = outPut.map((item) => item.split("").map((num) => Number(num)));

  return outPut;
}

export function bishopMove(data, state, side) {
  var xAxis = Number(data[0]);
  var yAxis = Number(data[1]);
  var negitive = xAxis - yAxis;
  var positve = xAxis + yAxis;

  var dowRow, upRow, dowCollum, upCollum;
  if (negitive < 0) {
    dowRow = 0;
  } else {
    dowRow = negitive;
  }

  if (negitive > 0) {
    dowCollum = 0;
  } else {
    dowCollum = Math.abs(negitive);
  }
  if (positve > 7) {
    upCollum = 7;
  } else {
    upCollum = positve;
  }
  if (positve <= 7) {
    upRow = 0;
  } else {
    upRow = positve - 7;
  }

  var rightHalf = [];
  var leftHalf = [];
  var move = [];

  state.forEach(function (row, index) {
    if (index >= upRow) {
      var up = `${index}${upCollum}`;
      if (upCollum < 0 || upCollum > 7) {
        up = undefined;
      }
      upCollum--;
    }
    if (index >= dowRow) {
      var dow = `${index}${dowCollum}`;
      if (dowCollum < 0 || dowCollum > 7) {
        dow = undefined;
      }
      dowCollum++;
    }
    if (up !== undefined) {
      rightHalf.push(up);
    }
    if (dow !== undefined) {
      leftHalf.push(dow);
    }
  });

  var move = [leftHalf, rightHalf];

  return checkMoves(move, state, side, data.join(""));
}
// quân tượng
// quân xe
export function rookMove(data, state, side) {
  var xAxis = Number(data[0]);
  var yAxis = Number(data[1]);
  var yHaft = [];
  var xHaft = [];
  state.forEach(function (row, id) {
    // yHaft.push([id, yAxis]);
    yHaft.push(`${id}${yAxis}`);
    if (id == xAxis) {
      for (let index in row) {
        // xHaft.push([xAxis, Number(index)]);
        xHaft.push(`${xAxis}${index}`);
      }
    }
  });

  var move = [yHaft, xHaft];

  return checkMoves(move, state, side, data.join(""));
}
// quân xe
// quân hậu
export function queenMove(data, state, side) {
  var diagonal = bishopMove(data, state, side);
  var cross = rookMove(data, state, side);
  //   var move = [[], []];

  var move = [];
  for (let moveDia of diagonal) {
    // move[0] = move[0].concat(moveDia);
    move = [...move, moveDia];
  }
  for (let movesCrs of cross) {
    // move[1] = move[1].concat(moves);
    move = [...move, movesCrs];
  }

  return move;
}
// quân hậu
// // quân mã
export function knightMove(data, state, side) {
  var xAxis = Number(data[0]);
  var yAxis = Number(data[1]);
  var start = xAxis - 2;
  var end = xAxis + 2;
  var left = yAxis - 1;
  var right = yAxis + 1;
  var leftMove = [];
  var rightMove = [];
  state.forEach((row, id) => {
    if (id >= start && id <= end && id != xAxis) {
      var potsion = Math.abs(xAxis - id);

      if (potsion == 2) {
        leftMove.push(`${id}${left}`);
        rightMove.push(`${id}${right}`);
      }
      if (potsion == 1) {
        leftMove.push(`${id}${left - 1}`);
        rightMove.push(`${id}${right + 1}`);
      }
    }
  });

  var move = [leftMove, rightMove];
  return checkMoves(move, state, side, data.join(""), "knight");
}
// // quân mã
// quân vua
export function kingMove(data, state, side, firstMove, playerColor) {
  var xAxis = Number(data[0]);
  var yAxis = Number(data[1]);

  var diagonal = [
    [`${xAxis - 1}${yAxis - 1}`, `${xAxis - 1}${yAxis + 1}`],
    [`${xAxis + 1}${yAxis - 1}`, `${xAxis + 1}${yAxis + 1}`],
  ];
  var cross = [
    [`${xAxis}${yAxis - 1}`, `${xAxis}${yAxis + 1}`],
    [`${xAxis - 1}${yAxis}`, `${xAxis + 1}${yAxis}`],
  ];

  var moveDiagonal = checkMoves(diagonal, state, side, data.join(""), "king");
  var moveCross = checkMoves(cross, state, side, data.join(""), "king");

  if (firstMove && side !== playerColor) {
    if (
      state[0][0].firstMove &&
      state[0].filter((box, id) => {
        if (id > 0 && id <= 3) {
          return box.unit === undefined;
        }
      }).length === 3
    ) {
      moveDiagonal.push([0, 2]);
    }
    if (
      state[0][7].firstMove &&
      state[0].filter((box, id) => {
        if (id > 4 && id <= 6) {
          return box.unit === undefined;
        }
      }).length === 2
    ) {
      moveDiagonal.push([0, 6]);
    }
  }
  if (firstMove && side == playerColor) {
    if (
      state[7][0].firstMove &&
      state[7].filter((box, id) => {
        if (id > 0 && id <= 3) {
          return box.unit === undefined;
        }
      }).length === 3
    ) {
      moveDiagonal.push([7, 2]);
    }
    if (
      state[7][7].firstMove &&
      state[7].filter((box, id) => {
        if (id > 4 && id <= 6) {
          return box.unit === undefined;
        }
      }).length === 2
    ) {
      moveDiagonal.push([7, 6]);
    }
  }

  return [...moveDiagonal, ...moveCross];
}
// quân tốt
export function pawMove(data, state, side, firstMove, playerColor) {
  var xAxis = Number(data[0]);
  var yAxis = Number(data[1]);
  var moveArray = [];
  var attackArray = [];

  if (firstMove) {
    side === playerColor
      ? (moveArray = [`${xAxis - 1}${yAxis}`, `${xAxis - 2}${yAxis}`])
      : (moveArray = [`${xAxis + 1}${yAxis}`, `${xAxis + 2}${yAxis}`]);
  }
  if (!firstMove) {
    side === playerColor
      ? (moveArray = [`${xAxis - 1}${yAxis}`])
      : (moveArray = [`${xAxis + 1}${yAxis}`]);
  }

  side === playerColor
    ? (attackArray = [`${xAxis - 1}${yAxis - 1}`, `${xAxis - 1}${yAxis + 1}`])
    : (attackArray = [`${xAxis + 1}${yAxis - 1}`, `${xAxis + 1}${yAxis + 1}`]);

  var move = [moveArray, attackArray];

  return checkMoves(move, state, side, data.join(""), "paw");
}
