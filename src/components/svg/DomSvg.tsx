import React from "react";
import { ConfigContextData } from "../../ConfigContext";
import { GridElement } from "../../types/grid/GridElement";
import { Building } from "../../types/buildings/Building";

export const DOM_SVG_WIDTH = 0.51;
export const DOM_SVG_HEIGHT = 0.4;

export default function DomSvg({
  id,
  cellSize,
  x,
  y,
  onClick,
}: Pick<Exclude<ConfigContextData, undefined>, "cellSize"> &
  GridElement &
  Building & {
    onClick?: (id: Building["id"]) => void;
  }) {
  return (
    <svg
      x={x}
      y={y}
      width={cellSize * DOM_SVG_WIDTH}
      height={cellSize * DOM_SVG_HEIGHT}
      viewBox="0 0 26.458 20.638"
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <path
        d="m8.1969 20.401s-0.52809-6.9708 3.591-7.2348c4.1191-0.26404 4.3303 7.182 4.3303 7.182l8.5022-0.31685c0.05049 0.75723 1.416-2.3618 1.5315-8.0797 0.10685-5.292-5.452-12.359-13.572-11.671-8.0044 0.67877-12.552 8.1004-12.304 12.41 0.35156 6.1122 2.0388 7.7705 2.0595 7.6045z"
        fill="#61a4d2"
      />
    </svg>
  );
}
