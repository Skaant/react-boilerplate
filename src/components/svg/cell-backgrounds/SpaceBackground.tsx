import React from "react";
import { GridElement } from "../../../types/grid/GridElement";
import { Cell } from "../../../types/grid/Cell";

export default function SpaceBackground({
  id,
  x,
  y,
  cellSize,
  onClick,
}: Pick<Cell, "id"> &
  GridElement & {
    cellSize: number;
    onClick: (id: Cell["id"]) => void;
  }) {
  return (
    <svg
      x={x}
      y={y}
      width={cellSize}
      height={cellSize}
      viewBox="0 0 33.867 33.867"
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <rect
        width="33.867"
        height="33.867"
        fill="#271b3d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="6.4934"
      />
      <g transform="matrix(.67904 0 0 .67904 10.625 -6.5122)" fill="#fff">
        <path d="m11.661 19.412 0.91671-1.3751 0.91671 0.91671-0.85123 1.2441z" />
        <path d="m16.572 22.49-0.78575 0.78575 0.9167 0.91671 0.58931-0.65479z" />
        <path d="m19.912 20.722-3.143-0.45835 3.4049-0.65479 0.85123-3.6668 0.52383 3.6668 3.2085 0.65479-3.3394 0.58931-0.98218 2.5537z" />
      </g>
    </svg>
  );
}
