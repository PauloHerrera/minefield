export type boardItem = {
  item: "mine" | "number" | "empty";
  value: number;
  revealed: boolean;
};

type boardRules = {
  mines: number;
  rows: number;
  cols: number;
};

export type gameLeaderboard = {
  victories: number;
  defeats: number;
};

export type gameController = {
  gameStatus: "new" | "playing" | "gameOver" | "gameWon";
  gameboard: boardItem[][];
  boardRules: boardRules;
  leaderboard: gameLeaderboard;
};

export const generateBoard = ({ mines, rows, cols }: boardRules): boardItem[][] => {
  const board = Array.from({ length: rows }, () =>
    Array.from(
      { length: cols },
      () =>
        ({
          item: "empty",
          value: 0,
          revealed: false,
        }) as boardItem
    )
  );

  // Randomly place mines
  for (let i = 0; i < mines; i++) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    board[row][col] = {
      item: "mine",
      value: 0,
      revealed: false,
    };
  }

  // Calculate the number of mines around each cell
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col].item === "mine") {
        // Count mines in the 8 surrounding cells
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              if (board[newRow][newCol].item !== "mine") {
                board[newRow][newCol] = {
                  item: "number",
                  value: board[newRow][newCol].value + 1,
                  revealed: false,
                };
              }
            }
          }
        }
      }
    }
  }

  return board;
};
