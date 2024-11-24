import { Cell } from "../types/grid/Cell";
import { Index } from "../types/Index";

export function createCells(height: number, width: number): Index<Cell> {
  if (height < 1 || width < 1) {
    throw new Error("Height and width must be greater than 0");
  }
  const cells: Index<Cell> = {};
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const id = `${x},${y}`;
      cells[id] = {
        id,
        x,
        y,
        type: "space",
        zums: [],
        buildings: [],
      };
    }
  }
  return cells;
}
