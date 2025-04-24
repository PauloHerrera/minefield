# Minefield Game

A classic Minesweeper game built with React, TypeScript, and Tailwind CSS. You can use your logic to win this chalenge

## Features

- Classic Minesweeper gameplay
- Visual indicators for mines and numbers
- Game over and win conditions
- Move counter
- Responsive design
- Modern UI with Tailwind CSS

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/minefield.git
cd minefield
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`


## How to Play

1. Click on any cell to reveal
2. Numbers indicate how many mines are adjacent to that cell
3. Avoid clicking on mines
4. Win by revealing all non-mine cells
5. It's a game over if you click on a mine 


## Next Tasks

[ ] Add tests;
[ ] Deploy + CI/CD;
[ ] Abstract logic of gameboard to the lib;
[ ] General layout improvement for the blocks;
[ ] Numbers with colors, like the original game;
[ ] Add animations for revealing cells and explosions;
[ ] Add a game timer and high score system;
[ ] Consider adding a dark mode theme;
[ ] Include a difficulty preset selector (Beginner, Intermediate, Expert)
[ ] Right click to "save" a known mine space;