type CellContainerProps = {
  children: React.ReactNode;
  onClick: () => void;
  onContextMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
  key: string;
};

export const CellContainer = ({ children, onClick, onContextMenu, key }: CellContainerProps) => {
  return (
    <div
      className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-stone-300 
                flex items-center justify-center text-stone-600
                p-1 sm:p-2 md:p-3 lg:p-4 cursor-pointer rounded-md"
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {children}
    </div>
  );
};
