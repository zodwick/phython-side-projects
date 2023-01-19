import { useState } from 'react';
import './App.css'
const squares=[[0, 3, 2, 3, 2, 3, 4, 5],
[3, 4, 1, 2, 3, 4, 3, 4],
[2, 1, 4, 3, 2, 3, 4, 5],
[3, 2, 3, 2, 3, 4, 3, 4],
[2, 3, 2, 3, 4, 3, 4, 5],
[3, 4, 3, 4, 3, 4, 5, 4],
[4, 3, 4, 3, 4, 5, 4, 5],
[5, 4, 5, 4, 5, 4, 5, 6]]

function Square() {
  return (
    <button
      className={"square ".concat(squares[3][1].toString())}
      // style=  "background: rgb(233, 36, 36)"
    >
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
