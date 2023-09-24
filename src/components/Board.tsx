"use client";
import useGetBoard from "@/app/hooks/useGetBoard";
import { Square, SquareProps } from "./Square";
import { useEffect, useState } from "react";

interface BoardProps {
  difficulty: "easy" | "medium" | "hard";
}

const Board = ({ difficulty }: BoardProps) => {
  const { board } = useGetBoard(difficulty);
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = (row: number, col: number) => {
    console.log(`row: ${row}, col: ${col}`);
  };
  return isClient ? (
    <section className="grid gap-1">
      {board.map((rows: SquareProps[], row: number) => (
        <div className="flex grid-rows-6 gap-1" key={row}>
          {rows.map((square: SquareProps, col: number) => {
            return (
              <Square
                key={`${row}${col}`}
                {...square}
                onClick={() => handleClick(row, col)}
              />
            );
          })}
        </div>
      ))}
    </section>
  ): "Cargando...";
};

export { Board };
