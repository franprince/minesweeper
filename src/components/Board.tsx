import { Square } from "./Square";

interface BoardProps {
  height: number;
  width: number;
}

const Board = ({ height, width }: BoardProps) => {
  const emptyBoard: void[][] = Array.from({ length: height }, () =>
    Array.from({ length: width })
  );
  return (
    <div className="grid gap-1">
      {emptyBoard.map((rows, x) => (
        <div className="flex grid-rows-6 gap-1" key={x}>
          {rows.map((square, y) => (
            <Square key={`${x}${y}`} value={`${x}, ${y}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export { Board };
