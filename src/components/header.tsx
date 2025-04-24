import { GiMineExplosion } from "react-icons/gi";
import { gameLeaderboard } from "../lib/game-controller";

export const Header = ({ leaderboard }: { leaderboard: gameLeaderboard }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md py-4">
      <div className="flex items-center justify-center space-x-2">
        <GiMineExplosion className="text-red-500 text-3xl" />
        <h1 className="text-2xl font-bold">Minefield by Ph</h1>
        <GiMineExplosion className="text-red-500 text-3xl" />
      </div>
      <div className="flex items-center justify-center space-x-2">
        <p>Victories: {leaderboard.victories}</p>
        <p>Defeats: {leaderboard.defeats}</p>
      </div>
    </div>
  );
};
