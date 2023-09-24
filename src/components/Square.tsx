export interface SquareProps {
  isMine: boolean;
  surroundingMines: number;
  onClick?: () => void;
}

const Square = ({ isMine, surroundingMines, onClick }: SquareProps) => {
  return (
    <div
      className={`flex rounded-sm text-xs font-bold justify-center items-center bg-indigo-500 w-8 h-8`}
      onClick={() => onClick}
    >
      {isMine ? "💣" : surroundingMines}
    </div>
  );
};

export { Square };
