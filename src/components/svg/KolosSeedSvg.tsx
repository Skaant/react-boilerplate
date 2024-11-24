import React from "react";
import { GridElement } from "../../types/grid/GridElement";
import { Building } from "../../types/buildings/Building";

export const KOLOS_SEED_SVG_WIDTH = 0.87;
export const KOLOS_SEED_SVG_HEIGHT = 1.48;

export default function KolosSeedSvg({
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
      width={cellSize * KOLOS_SEED_SVG_WIDTH}
      height={cellSize * KOLOS_SEED_SVG_HEIGHT}
      viewBox="0 0 139 246"
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <path
        d="m3.8952 245.07 53.22-1.0709s0.35697-33.555 17.135-33.912c16.778-0.35697 17.135 33.555 17.135 33.555l46.763 1.0709s2.1116-62.954-16.778-88.886c-20.28-27.84-44.029-47.105-44.029-47.105l-29.45 1.6064c-0.01486-0.0104-31.825 34.374-41.497 70.487-8.6516 32.304-2.4988 64.255-2.4988 64.255z"
        fill="#917c6f"
      />
      <g transform="translate(-84.724 -106.18)" fill="#00fa89">
        <path d="m132.61 216.5 21.801 27.881 7.6494-29.488-3.7482-77.463-27.13 0.89243z" />
        <path d="m164.03 144.57 0.17849 17.492 26.237-12.851-2.4988-18.384z" />
        <path d="m165.28 171.17 1.0709 19.098 26.951-9.9952-2.1418-19.455z" />
        <path d="m131.19 131.37 26.416-0.17848-2.4988-23.739-21.954 1.4279z" />
        <path d="m127.26 143.68-0.89243 22.311-31.592-14.814 4.2837-17.67z" />
        <path d="m126.19 173.49-0.17848 22.132-28.558-11.245 4.8191-21.24z" />
      </g>
    </svg>
  );
}
