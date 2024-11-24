import React from "react";
import { GridElement } from "../../types/grid/GridElement";
import { Building } from "../../types/buildings/Building";

export const KOLOS_SEED_TRANSIT_SVG_WIDTH = 0.31;
export const KOLOS_SEED_TRANSIT_SVG_HEIGHT = 0.31;

export default function KolosSeedTransitSvg({
  id,
  x,
  y,
  cellSize,
  onClick,
}: GridElement &
  Building & {
    cellSize: number;
    onClick?: (id: Building["id"]) => void;
  }) {
  return (
    <svg
      x={x}
      y={y}
      width={cellSize * KOLOS_SEED_TRANSIT_SVG_WIDTH}
      height={cellSize * KOLOS_SEED_TRANSIT_SVG_HEIGHT}
      viewBox="0 0 31.75 31.75"
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <path
        d="m14.935 16.768s-1.7849 9.4151 3.1681 12.539c4.953 3.1235 12.762 0.66932 12.762 0.66932s0.6247-9.9952-2.9896-12.672c-3.6143-2.6773-12.94-0.53546-12.94-0.53546z"
        fill="#a40"
      />
      <path
        d="m15.042 15.642s-3.1964-1.0488-5.0237-2.3634c-1.8273-1.3146-2.4551-2.7502-2.4551-2.7502l1.3056 0.14059s-4.9786-4.4677-6.1359-6.4956c-1.1572-2.0279-2.1971-3.6161-2.1971-3.6161s7.7043 5.144 8.5653 6.0282c0.861 0.88422 1.6244 1.6405 1.6244 1.6405l-0.7006-1.8781s2.7547 1.837 3.7338 3.8762c0.97911 2.0392 1.0046 2.44 1.0046 2.44l0.57384-2.2273s1.0852 2.3007 0.80248 3.4812c-0.28267 1.1805-1.0976 1.7241-1.0976 1.7241z"
        fill="#87decd"
      />
    </svg>
  );
}
