import React, { useState } from 'react';

const ChessBoard = () => {
  const [board, setBoard] = useState([]);
  const [startSquare, setStartSquare] = useState(null);

  const possibleMoves = (x, y) => {
    return [[x + 2, y + 1], [x + 2, y - 1], [x - 2, y + 1], [x - 2, y - 1],
            [x + 1, y + 2], [x + 1, y - 2], [x - 1, y + 2], [x - 1, y - 2]];
  }

  const bfs = (start) => {
    let queue = [start];
    let visited = new Set();
    let distance = {};
    distance[start] = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      visited.add(current);
      let nextMoves = possibleMoves(current[0], current[1]);
      for (let move of nextMoves) {
        let x = move[0];
        let y = move[1];
        if (!visited.has(move) && x >= 0 && x <= 7 && y >= 0 && y <= 7) {
          queue.push(move);
          visited.add(move);
          distance[move] = distance[current] + 1;
        }
      }
    }
    return distance;
  }

  const handleClick = event => {
    const square = event.target.getAttribute('data-square');
    setStartSquare(square);
  }

  const renderBoard = () => {
    let rows = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push(
          <div
            key={i + "-" + j}
            data-square={i + "-" + j}
            onClick={handleClick}
            style={{ width: '12.5%', height: '12.5%' }}
          >
            {startSquare === i + "-" + j ? <p>{bfs(square)}</p> : null}
          </div>
        )
      }
      rows.push(<div key={i}>{row}</div>)
    }
    return rows;
  }

  return (
    <div>
      {renderBoard()}
    </div>
  );
};

export default ChessBoard
