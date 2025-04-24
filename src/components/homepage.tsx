import { useState } from "react";
import { Button } from "./button";

interface NewGameProps {
  startNewGame: (mines: number, rows: number, cols: number) => void;
}

export const Homepage = ({ startNewGame }: NewGameProps) => {
  const [mines, setMines] = useState(6);
  const [rows, setRows] = useState(5);
  const [cols, setCols] = useState(5);

  const isValid = () => {
    return (
      mines > 0 && rows > 0 && cols > 0 && mines < rows * cols // Can't have more mines than cells
    );
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">New Challenge</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="mines" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Mines
            </label>
            <input
              type="number"
              min="1"
              max={rows * cols - 1}
              className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
              value={mines}
              onChange={(e) => setMines(Number(e.target.value))}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="rows" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Rows
            </label>
            <input
              type="number"
              min="1"
              max="50"
              className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="cols" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Columns
            </label>
            <input
              type="number"
              min="1"
              max="50"
              className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
              value={cols}
              onChange={(e) => setCols(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button onClick={() => startNewGame(mines, rows, cols)} disabled={!isValid()}>
            Start New Game
          </Button>
        </div>
      </div>
    </div>
  );
};
