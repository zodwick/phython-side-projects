import React, { useState } from "react";

const KnightMoves = () => {
  const [chessBoard, setChessBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [currentPosition, setCurrentPosition] = useState("a1");

  const calculateMoves = (currentPosition) => {
    let x = currentPosition.charCodeAt(0) - 97;
    let y = parseInt(currentPosition[1]) - 1;

    let queue = [[x, y, 0]];
    let visited = new Set();

    while (queue.length) {
      let [x, y, moves] = queue.shift();
      if (visited.has(`${x},${y}`)) continue;
      visited.add(`${x},${y}`);
      chessBoard[x][y] = moves;

      if (x + 2 < 8 && y + 1 < 8) queue.push([x + 2, y + 1, moves + 1]);
      if (x + 2 < 8 && y - 1 >= 0) queue.push([x + 2, y - 1, moves + 1]);
      if (x - 2 >= 0 && y + 1 < 8) queue.push([x - 2, y + 1, moves + 1]);
      if (x - 2 >= 0 && y - 1 >= 0) queue.push([x - 2, y - 1, moves + 1]);
      if (x + 1 < 8 && y + 2 < 8) queue.push([x + 1, y + 2, moves + 1]);
      if (x + 1 < 8 && y - 2 >= 0) queue.push([x + 1, y - 2, moves + 1]);
      if (x - 1 >= 0 && y + 2 < 8) queue.push([x - 1, y + 2, moves + 1]);
      if (x - 1 >= 0 && y - 2 >= 0) queue.push([x - 1, y - 2, moves + 1]);
    }
    setChessBoard([...chessBoard]);
  };

  return (
    <div>
      <input
        type="text"
        value={currentPosition}
        onChange={(e) => setCurrentPosition(e.target.value)}
      />
      <button onClick={() => calculateMoves(currentPosition)}>
        Calculate Knight Moves
      </button>
      <div>{JSON.stringify(chessBoard)}</div>
    </div>
  );
};

export default KnightMoves;
