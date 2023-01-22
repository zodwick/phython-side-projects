import React from 'react';
import './ChessBoard.css';

const ChessBoardtwo = () => {
    const rows = [8, 7, 6, 5, 4, 3, 2, 1];
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
    return (
      <div className="chess-board">
        {rows.map(row => (
          <div className="chess-row" key={row}>
            {columns.map((column, index) => (
              <div
                className={`chess-square ${index % 2 === row % 2 ? 'white' : 'black'}`}
                key={column + row}
              >
                {column + row}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  

export default ChessBoardtwo
