import { SquareProps } from "@/components/Square";
import { useState } from "react";

interface CheckMines {
  squareRow: number;
  squareCol: number;
  board: SquareProps[][];
}

type DifficultyValues = Record<
  string,
  { boardSize: number; mineCount: number }
>;

const useGetBoard = (
  difficulty: string
  //  firstClick: { row: number; col: number }
): { board: SquareProps[][], startGame: ()=> void } => {
  const difficultyValues: DifficultyValues = {
    easy: { boardSize: 9, mineCount: 10 },
    medium: { boardSize: 16, mineCount: 40 },
    hard: { boardSize: 24, mineCount: 99 },
  };

  const [board, setBoard] = useState<SquareProps[][]>([[]]);

  const { boardSize, mineCount } = difficultyValues[`${difficulty}`];

  const getEmptyBoard: SquareProps[][] = Array.from({ length: boardSize }, () =>
    Array.from({ length: boardSize }, () => ({
      isMine: false,
      surroundingMines: 0,
      isRevealed: false
    }))
  );

  const placeMines = (board: SquareProps[][]) => {
    let minesToPlace = mineCount;
    while (minesToPlace > 0) {
      const row = Math.floor(Math.random() * boardSize);
      const col = Math.floor(Math.random() * boardSize);
      if (
        !board[row][col].isMine
        //`${firstClick.row}-${firstClick.col}` !== `${row}-${col}`
      ) {
        board[row][col].isMine = true;
        minesToPlace--;
      }
    }
    return board;
  };

  const checkSurroundingMines = ({ squareRow, squareCol, board }: CheckMines) => {
    let count: number = 0;
    for (let row = squareRow - 1; row <= squareRow + 1; row++) {
      for (let col = squareCol - 1; col <= squareCol + 1; col++) {
        if (
          board?.[row]?.[col] !== undefined &&
          `${row}-${col}` !== `${squareRow}-${squareCol}`
        ) {
          if (board[row][col].isMine) {
            count++;
          }
        }
      }
    }
    return count;
  };

  const boardWithMines = placeMines(getEmptyBoard);

  const boardWithSourroundingMines = boardWithMines.map(
    (row: SquareProps[], rowIndex: number) => {
      return row.map((square: SquareProps, colIndex: number) => {
        if (!square.isMine) {
          const surroundingMines = checkSurroundingMines({
            squareRow: rowIndex,
            squareCol: colIndex,
            board: boardWithMines,
          });
          return { ...square, surroundingMines };
        }
        return square;
      });
    }
  );

  const startGame = () => {};
  return { board: boardWithSourroundingMines, startGame  };
};

export default useGetBoard;
