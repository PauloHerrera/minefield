type MineNumberProps = {
  children: number;
};

const NUMBER_COLORS: Record<number, string> = {
  1: "text-blue-600",
  2: "text-green-600",
  3: "text-red-600",
  4: "text-purple-800",
  5: "text-yellow-600",
  6: "text-cyan-600",
};

export const MineNumber = ({ children }: MineNumberProps) => {
  if (typeof children !== "number") {
    return null;
  }

  const color = NUMBER_COLORS[Number(children)] || "text-stone-600";

  return <div className={`${color} text-2xl font-bold`}>{children}</div>;
};
