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

const list_of_colours=['sqaure zero', 'sqaure three', 'sqaure two', 'sqaure three', 'sqaure two', 'sqaure three', 'sqaure four', 'sqaure five', 'sqaure three', 'sqaure four', 'sqaure one', 'sqaure two', 'sqaure three', 'sqaure four', 'sqaure three', 'sqaure four', 'sqaure two', 'sqaure one', 'sqaure four', 'sqaure three', 'sqaure two', 'sqaure three', 'sqaure four', 'sqaure five', 'sqaure three', 'sqaure two', 'sqaure three', 'sqaure two', 'sqaure three', 'sqaure four', 'sqaure three', 'sqaure four', 'sqaure two', 'sqaure three', 'sqaure two', 'sqaure three', 'sqaure four', 'sqaure three', 'sqaure four', 'sqaure five', 'sqaure three', 'sqaure four', 'sqaure three', 'sqaure four', 'sqaure three', 'sqaure four', 'sqaure five', 'sqaure four', 'sqaure four', 'sqaure three', 'sqaure four', 'sqaure three', 'sqaure four', 'sqaure five', 'sqaure four', 'sqaure five', 'sqaure five', 'sqaure four', 'sqaure five', 'sqaure four', 'sqaure five', 'sqaure four', 'sqaure five', 'sqaure six']


function knightMoves(currentPosition) {
  // Create an 8x8 chessboard filled with 0s
  const chessboard = Array(8).fill(0).map(() => Array(8).fill(0));
  
  // Convert the current position to coordinates (x, y)
  const x = currentPosition.charCodeAt(0) - 97;
  const y = parseInt(currentPosition[1]) - 1;

  // Initialize a queue for BFS
  const queue = [[x, y, 0]];

  // Initialize an array to keep track of visited positions
  const visited = [];

  // BFS loop
  while (queue.length) {
    const [x, y, moves] = queue.shift();
    if (visited.includes(`${x},${y}`)) continue;
    visited.push(`${x},${y}`);
    chessboard[x][y] = moves;
    // Add all possible knight moves to the queue
    if (x + 2 < 8 && y + 1 < 8) queue.push([x + 2, y + 1, moves + 1]);
    if (x + 2 < 8 && y - 1 >= 0) queue.push([x + 2, y - 1, moves + 1]);
    if (x - 2 >= 0 && y + 1 < 8) queue.push([x - 2, y + 1, moves + 1]);
    if (x - 2 >= 0 && y - 1 >= 0) queue.push([x - 2, y - 1, moves + 1]);
    if (x + 1 < 8 && y + 2 < 8) queue.push([x + 1, y + 2, moves + 1]);
    if (x + 1 < 8 && y - 2 >= 0) queue.push([x + 1, y - 2, moves + 1]);
    if (x - 1 >= 0 && y + 2 < 8) queue.push([x - 1, y + 2, moves + 1]);
    if (x - 1 >= 0 && y - 2 >= 0) queue.push([x - 1, y - 2, moves + 1]);
  }

  return chessboard;
}

function Square({value_index}) {
  return (
    <button
      className={list_of_colours[value_index]}>
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
      <Square value_index={0} />
        <Square  value_index={1}/>
        <Square value_index={2} />
        <Square value_index={3}/>
        <Square value_index={4}/>
        <Square  value_index={5}/>
        <Square value_index={6} />
        <Square value_index={7} />
      </div>
      <div className="board-row">
        <Square value_index={8}/>
        <Square value_index={9}/>
        <Square value_index={10}/>
        <Square value_index={11}/>
        <Square value_index={12}/>
        <Square value_index={13}/>
        <Square value_index={14}/>
        <Square value_index={15}/>
      </div>
      <div className="board-row">
      <Square value_index={16}/>
        <Square value_index={17}/>
        <Square value_index={18}/>
        <Square value_index={19}/>
        <Square value_index={20}/>
        <Square value_index={21}/>
        <Square value_index={22}/>
        <Square value_index={23}/>
      </div>
      <div className="board-row">
      <Square value_index={24}/>
        <Square value_index={25}/>
        <Square value_index={26}/>
        <Square value_index={27}/>
        <Square value_index={28}/>
        <Square value_index={29}/>
        <Square value_index={30}/>
        <Square value_index={31}/>
      </div>
      <div className="board-row">
      <Square value_index={32}/>
      <Square value_index={33}/>
        <Square value_index={34}/>
        <Square value_index={35}/>
        <Square value_index={36}/>
        <Square value_index={37}/>
        <Square value_index={38}/>
        <Square value_index={39}/>
      </div>
      <div className="board-row">
      <Square value_index={40}/>

      <Square value_index={41}/>
        <Square value_index={42}/>
        <Square value_index={43}/>
        <Square value_index={44}/>
        <Square value_index={45}/>
        <Square value_index={46}/>
        <Square value_index={47}/>
      </div>
      <div className="board-row">
      <Square value_index={48}/>

      <Square value_index={49}/>
        <Square value_index={50}/>
        <Square value_index={51}/>
        <Square value_index={52}/>
        <Square value_index={53}/>
        <Square value_index={54}/>
        <Square value_index={55}/>
      </div>
      <div className="board-row">
       <Square value_index={56}/>
       <Square value_index={57}/>
        <Square value_index={58}/>
        <Square value_index={59}/>
        <Square value_index={60}/>
        <Square value_index={61}/>
        <Square value_index={62}/>
        <Square value_index={63}/>
        
      </div>
    </>
  );
}
