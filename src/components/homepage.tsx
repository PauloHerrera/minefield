import { useState } from "react";
import { Button } from "./button";
import { FormInput } from "./form-input";

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
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">New Challenge</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <FormInput
              label="Number of Mines"
              value={mines.toString()}
              onChange={(value) => setMines(Number(value))}
            />
          </div>
          <div className="col-span-2">
            <FormInput
              label="Number of Rows"
              value={rows.toString()}
              onChange={(value) => setRows(Number(value))}
            />
          </div>
          <div className="col-span-2">
            <FormInput
              label="Number of Columns"
              value={cols.toString()}
              onChange={(value) => setCols(Number(value))}
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
