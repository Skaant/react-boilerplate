import React from "react";
import { GridElement } from "../../types/grid/GridElement";
import { Building } from "../../types/buildings/Building";

export const KOLOS_SEED_LANDED_SVG_WIDTH = 0.64;
export const KOLOS_SEED_LANDED_SVG_HEIGHT = 0.64;

export default function KolosSeedLandedSvg({
  id,
  x,
  y,
  cellSize,
  step = 2,
  onClick,
}: GridElement &
  Building & {
    cellSize: number;
    step: 2 | 3;
    onClick?: (id: Building["id"]) => void;
  }) {
  return (
    <svg
      x={x}
      y={y}
      width={cellSize * KOLOS_SEED_LANDED_SVG_WIDTH}
      height={cellSize * KOLOS_SEED_LANDED_SVG_HEIGHT}
      viewBox="0 0 31.75 31.75"
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <path
        d="m8.4815 17.538c0.5497 1.849 1.1525 2.6876 1.1525 2.6876l12.302-0.22466s0.74143-2.7149 0.28852-4.7976c-0.86049-3.9586-7.6726-8.5004-7.6726-8.5004s-7.5732 5.7796-6.0706 10.835z"
        fill="#a40"
        stroke-width=".90064"
      />
      {step === 3 && (
        <path
          d="m18.341 14.579s0.76261 1.1789 1.0766 2.9842c0.31397 1.8053 0.04877 2.4522 0.04877 2.4522l-1.7268 0.11774s0.53795-1.6237 0.51775-2.8205c-0.0343-2.0322 0.08373-2.7336 0.08373-2.7336z"
          fill="#87decd"
        />
      )}
    </svg>
  );
}
