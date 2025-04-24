import { useState } from "react";
import "./App.css";
import { gameController, generateBoard } from "./lib/game-controller";
import { Homepage } from "./components/homepage";
import { GameBoard } from "./components/game-board";
import { Header } from "./components/header";

function App() {
  const [gameController, setGameController] = useState<gameController>({
    gameStatus: "new",
    gameboard: [],
    boardRules: {
      mines: 0,
      rows: 0,
      cols: 0,
    },
    leaderboard: { victories: 0, defeats: 0 },
  });

  const startNewGame = (mines: number, rows: number, cols: number) => {
    const board = generateBoard({ mines: mines, rows: rows, cols: cols });
    setGameController((prev) => ({
      ...prev,
      gameStatus: "playing",
      gameboard: board,
      boardRules: { mines: mines, rows: rows, cols: cols },
    }));
  };

  return (
    <>
      <Header leaderboard={gameController.leaderboard} />

      {gameController.gameStatus === "new" ? (
        <Homepage startNewGame={startNewGame} />
      ) : (
        <GameBoard
          gameStatus={gameController.gameStatus}
          gameboard={gameController.gameboard}
          boardRules={gameController.boardRules}
          setGameStatus={(status) => setGameController((prev) => ({ ...prev, gameStatus: status }))}
          setGameboard={(board) => setGameController((prev) => ({ ...prev, gameboard: board }))}
          setLeaderboard={(leaderboard) =>
            setGameController((prev) => ({ ...prev, leaderboard: leaderboard }))
          }
          leaderboard={gameController.leaderboard}
        />
      )}
    </>
  );
}

export default App;
