import { BsPatchQuestionFill } from "react-icons/bs";
import { GiMineExplosion } from "react-icons/gi";
import { boardItem, gameLeaderboard } from "../lib/game-controller";
import { Button } from "./button";
import { ImEvil, ImSmile } from "react-icons/im";
import { MineNumber } from "./mine-number";
import { FaFlagCheckered } from "react-icons/fa";
import { CellContainer } from "./cell-container";
interface GameBoardProps {
  gameStatus: "new" | "playing" | "gameOver" | "gameWon";
  setGameStatus: (status: "new" | "playing" | "gameOver" | "gameWon") => void;
  gameboard: boardItem[][];
  setGameboard: (board: boardItem[][]) => void;
  boardRules: {
    mines: number;
    rows: number;
    cols: number;
  };
  setLeaderboard: (leaderboard: gameLeaderboard) => void;
  leaderboard: gameLeaderboard;
}

export const GameBoard = ({
  gameStatus,
  gameboard,
  setGameboard,
  setGameStatus,
  boardRules,
  setLeaderboard,
  leaderboard,
}: GameBoardProps) => {
  const handleClick = (row: number, col: number) => {
    console.log(gameboard[row][col]);
    if (gameStatus === "gameOver" || gameStatus === "gameWon") return;

    //Changes the reviewed state of the cell
    const newBoard = [...gameboard];
    newBoard[row] = [...gameboard[row]];
    newBoard[row][col] = { ...gameboard[row][col], status: "revealed" };
    setGameboard(newBoard);

    if (gameboard[row][col].item === "mine") {
      setGameStatus("gameOver");
      setLeaderboard({ ...leaderboard, defeats: leaderboard.defeats + 1 });
      return;
    }

    const moves = gameboard.reduce(
      (acc, row) => acc + row.filter((cell) => cell.status === "revealed").length,
      0
    );

    if (moves + 1 === boardRules.rows * boardRules.cols - boardRules.mines) {
      setGameStatus("gameWon");
      setLeaderboard({ ...leaderboard, victories: leaderboard.victories + 1 });
    }
  };

  const handleRightClick = (row: number, col: number) => {
    if (gameStatus === "gameOver" || gameStatus === "gameWon") return;

    const newBoard = [...gameboard];
    newBoard[row] = [...gameboard[row]];

    if (newBoard[row][col].status === "revealed") return;

    if (newBoard[row][col].status === "hidden") {
      newBoard[row][col] = { ...gameboard[row][col], status: "flagged" };
    } else {
      newBoard[row][col] = { ...gameboard[row][col], status: "hidden" };
    }
    setGameboard(newBoard);
  };

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="my-4 sm:my-6">
        {(gameStatus === "gameOver" || gameStatus === "gameWon") && (
          <div
            className={`p-3 mb-4 rounded-lg border-2 ${gameStatus === "gameOver" ? "border-red-500 bg-red-50" : "border-green-500 bg-green-50"}`}
          >
            <div
              className={`flex justify-center items-center gap-2 text-lg sm:text-2xl font-bold mb-2 
                ${gameStatus === "gameOver" ? "text-red-500" : "text-green-500"}`}
            >
              {gameStatus === "gameOver" ? (
                <>
                  <ImEvil /> Game Over - You hit a mine!
                </>
              ) : (
                <>
                  <ImSmile /> Game Won - You found all the mines!
                </>
              )}
            </div>
            <div className="text-gray-600">
              Total moves:{" "}
              {gameboard.reduce(
                (acc, row) => acc + row.filter((cell) => cell.status === "revealed").length,
                0
              )}
            </div>
            <div className="mt-4 w-32 mx-auto">
              <Button onClick={() => setGameStatus("new")}>New Game</Button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-center sm:space-x-2 md:space-x-4 lg:space-x-8 my-4 sm:my-8">
        {gameboard.map((row, rowIndex) => (
          <div
            className="flex flex-row sm:flex-col gap-2 sm:gap-2 md:gap-3 justify-center mb-2 sm:mb-0"
            key={`container-${rowIndex}`}
          >
            {row.map((cell, cellIndex) => (
              <CellContainer
                onClick={() => {
                  handleClick(rowIndex, cellIndex);
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleRightClick(rowIndex, cellIndex);
                }}
                key={`${rowIndex}-${cellIndex}`}
              >
                {cell.status === "revealed" ? (
                  cell.item === "mine" ? (
                    <GiMineExplosion className="text-red-500 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                  ) : cell.item === "number" ? (
                    <MineNumber>{cell.value}</MineNumber>
                  ) : (
                    ""
                  )
                ) : cell.status === "flagged" ? (
                  <FaFlagCheckered className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                ) : (
                  <BsPatchQuestionFill className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                )}
              </CellContainer>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
