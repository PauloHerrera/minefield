import { useState } from 'react'
import './App.css'
import { generateBoard, type boardItem } from './lib/board'
import { BsPatchQuestionFill } from 'react-icons/bs'
import { GiMineExplosion } from 'react-icons/gi'

function App() {
  const mines = 15
  const rows = 10
  const cols = 10

  const board = generateBoard({ mines: mines, rows: rows, cols: cols })
  const [gameboard, setGameboard] = useState<boardItem[][]>(board)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [gameWon, setGameWon] = useState<boolean>(false)
  const handleClick = (row: number, col: number) => {
    if (gameOver || gameWon) return

    //Changes the reviewed state of the cell
    setGameboard((prev) => {
      const newBoard = [...prev]
      newBoard[row] = [...prev[row]]
      newBoard[row][col] = { ...prev[row][col], revealed: true }
      return newBoard
    })

    if (gameboard[row][col].item === 'mine') {
      setGameOver(true)
    }

    const moves = gameboard.reduce(
      (acc, row) => acc + row.filter((cell) => cell.revealed).length,
      0
    )
    console.log(moves)
    if (moves + 1 === rows * cols - mines) {
      setGameWon(true)
    }
  }

  return (
    <>
      <div className="flex justify-center text-2xl font-bold">
        <GiMineExplosion className="text-red-500" /> Minefield by Ph{' '}
        <GiMineExplosion className="text-red-500" />
      </div>
      <div className="m-auto-row min-h-screen items-center content-center">
        {gameOver && (
          <div>
            <div className="text-red-500 text-2xl">
              Game Over - You hit a mine
            </div>
            <div>
              Moves to loose:{' '}
              {gameboard.reduce(
                (acc, row) => acc + row.filter((cell) => cell.revealed).length,
                0
              )}
            </div>
          </div>
        )}
        {gameWon && (
          <div>
            <div className="text-green-500 text-2xl">
              Game Won - You found all the mines
            </div>
            <div>
              Moves to win:{' '}
              {gameboard.reduce(
                (acc, row) => acc + row.filter((cell) => cell.revealed).length,
                0
              )}
            </div>
          </div>
        )}

        <div className="flex justify-center space-x-8 my-8">
          {gameboard.map((row, rowIndex) => (
            <div className="flex flex-col gap-2">
              {row.map((cell, cellIndex) => (
                <div
                  className="w-10 h-10 bg-stone-300 flex items-center justify-center text-stone-600 cursor-pointer"
                  onClick={() => {
                    handleClick(rowIndex, cellIndex)
                  }}
                >
                  {cell.revealed ? (
                    cell.item === 'mine' ? (
                      <GiMineExplosion className="text-red-500" />
                    ) : cell.item === 'number' ? (
                      cell.value
                    ) : (
                      ''
                    )
                  ) : (
                    <BsPatchQuestionFill />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
