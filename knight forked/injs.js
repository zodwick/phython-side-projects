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
  
console.log(knightMoves("h8"))