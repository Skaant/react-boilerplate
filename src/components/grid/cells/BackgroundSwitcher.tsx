import React from "react";
import { Cell } from "../../../types/grid/Cell";
import SpaceBackground from "../../svg/cell-backgrounds/SpaceBackground";

export default function BackgroundSwitcher({
  cell: { id, x, y, ...cell },
  cellSize,
  onClick,
}: {
  cell: Cell;
  cellSize: number;
  onClick: (id: Cell["id"]) => void;
}) {
  return cell.type === "space" ? (
    <SpaceBackground
      id={id}
      x={x * cellSize}
      y={y * cellSize}
      cellSize={cellSize}
      onClick={onClick}
    />
  ) : (
    <rect
      x={x * cellSize}
      y={y * cellSize}
      width={cellSize}
      height={cellSize}
      fill={
        (cell.type === "ground" &&
          (cell.waild === 2
            ? "#050"
            : cell.waild === 3
            ? "#0a0"
            : undefined)) ||
        "#333"
      }
      onClick={() => onClick(id)}
    />
  );
}
