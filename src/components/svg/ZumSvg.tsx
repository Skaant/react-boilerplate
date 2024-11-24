import React from "react";
import { GridElement } from "../../types/grid/GridElement";
import { Zum } from "../../types/zums/Zum";

export const ZUM_SVG_WIDTH = 0.21;
export const ZUM_SVG_HEIGHT = 0.43;

export default function ZumSvg({
  id,
  x,
  y,
  cellSize,
  selected,
  onClick,
}: GridElement &
  Zum & {
    cellSize: number;
    selected?: true;
    onClick?: (id: Zum["id"]) => void;
  }) {
  return (
    <svg
      x={x}
      y={y}
      width={cellSize * ZUM_SVG_WIDTH}
      height={cellSize * ZUM_SVG_HEIGHT}
      version="1.1"
      viewBox="0 0 14.287 29.104"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <path
        d="m5.8759 6.2603s-1.2766-1.6755-1.2766-2.992c0-1.3165 0.83775-3.0318 2.7127-3.1914 1.875-0.15957 3.0318 2.3138 3.0318 3.351 0 1.0372-1.4361 2.9521-1.4361 2.9521s2.234 0.99732 2.8324 1.875c0.59839 0.87764 2.5132 8.936 2.5132 8.936l-1.3165 0.63828-2.5132-5.4653 0.5186 16.635-2.3138 0.03989-0.87764-8.8562-1.5558 0.07979-0.5585 8.537-1.7952-0.07979 0.11968-16.157-1.8351 5.4254-2.0345-0.95742s1.9946-8.6168 2.9122-9.4945c0.91753-0.87764 2.8723-1.2766 2.8723-1.2766z"
        fill={selected ? "#fff" : "#ff4300"}
      />
    </svg>
  );
}
