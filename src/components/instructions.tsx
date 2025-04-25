import { useState } from "react";
import { Button } from "./button";

export default function Instructions() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <>
      <div className="my-4 max-w-md mx-auto">
        <Button onClick={() => setShowInstructions(true)}>How to Play</Button>
      </div>
      {showInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative">
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6">How to Play Minefield</h2>
            <ol className="list-decimal pl-6 space-y-3 text-left text-gray-700">
              <li>Click on tiles to reveal what's underneath</li>
              <li>Numbers show how many mines are adjacent to that tile</li>
              <li>Be careful - clicking on a mine ends the game!</li>
              <li>Right-click to flag suspected mine locations</li>
              <li>Reveal all non-mine tiles to win!</li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
