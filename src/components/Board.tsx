import { Square } from "./Square";

interface BoardProps {
  heigth: number;
  width: number;
}

const Board = ({ heigth, width }: BoardProps) => {
  const emptyBoard: void[][] = Array.from({ length: heigth }, () =>
    Array.from({ length: width })
  );
  return (
    <div className="grid gap-1">
      {emptyBoard.map((rows, x) => (
        <div className="flex grid-rows-6 gap-1" key={x}>
          {rows.map((square, y) => (
            <Square key={`${x}${y}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export { Board };
