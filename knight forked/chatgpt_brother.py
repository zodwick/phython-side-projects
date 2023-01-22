from collections import deque
def knight_moves(current_position: str) -> list[list[int]]:
    # Create an 8x8 chessboard filled with 0s
    chessboard = [[0 for _ in range(8)] for _ in range(8)]
    # Convert the current position to coordinates (x, y)
    x = ord(current_position[0]) - ord('a')
    y = int(current_position[1]) - 1

    # Initialize a queue for BFS
    queue = deque([(x, y, 0)])
    # Initialize an array to keep track of visited positions
    visited = set()

    # BFS loop
    while queue:
        x, y, moves = queue.popleft()
        if f"{x},{y}" in visited:
            continue
        visited.add(f"{x},{y}")
        chessboard[x][y] = moves
        # Add all possible knight moves to the queue
        if x + 2 < 8 and y + 1 < 8:
            queue.append((x + 2, y + 1, moves + 1))
        if x + 2 < 8 and y - 1 >= 0:
            queue.append((x + 2, y - 1, moves + 1))
        if x - 2 >= 0 and y + 1 < 8:
            queue.append((x - 2, y + 1, moves + 1))
        if x - 2 >= 0 and y - 1 >= 0:
            queue.append((x - 2, y - 1, moves + 1))
        if x + 1 < 8 and y + 2 < 8:
            queue.append((x + 1, y + 2, moves + 1))
        if x + 1 < 8 and y - 2 >= 0:
            queue.append((x + 1, y - 2, moves + 1))
        if x - 1 >= 0 and y + 2 < 8:
            queue.append((x - 1, y + 2, moves + 1))
        if x - 1 >= 0 and y - 2 >= 0:
            queue.append((x - 1, y - 2, moves + 1))
    return chessboard


print(knight_moves("a1"))