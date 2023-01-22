import React, { useState } from 'react';

const Board = () => {
  const [squares, setSquares] = useState([
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
  ]);

  return (
    <table>
      {squares.map((row, i) => (
        <tr key={i}>
          {row.map((square, j) => (
            <td key={j}>{square}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Board;
