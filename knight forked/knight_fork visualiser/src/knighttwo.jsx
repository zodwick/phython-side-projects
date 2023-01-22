import React, { useState } from 'react';
import Chess from 'chess.js';

const [board, setBoard] = useState(new Chess());
const [startSquare, setStartSquare] = useState(null);

const handleClick = event => {
    const square = event.target.getAttribute('data-square');
    setStartSquare(square);
  }

  const bfs = (start) => {
    let queue = [start];
    let visited = new Set();
    let distance = {};
    distance[start] = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      visited.add(current);
      let nextMoves = board.moves({ square: current, verbose: true });
      for (let move of nextMoves) {
        if (!visited.has(move.to)) {
          queue.push(move.to);
          visited.add(move.to);
          distance[move.to] = distance[current] + 1;
        }
      }
    }
    return distance;
  }
  const ChessBoard = () => {
    return (
      <div>
        {board.SQUARES.map(square => (
          <div
            key={square}
            data-square={square}
            onClick={handleClick}
            style={{ width: '12.5%', height: '12.5%' }}
          >
            {square}
            {startSquare === square ? <p>{bfs(square)}</p> : null}
          </div>
        ))}
      </div>
    );
  };

export default ChessBoard;