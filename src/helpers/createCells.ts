import { Building } from "../types/buildings/Building";
import { Cell } from "../types/grid/Cell";
import { Index } from "../types/Index";
import { Zum } from "../types/zums/Zum";

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
        waild: (x + y) % 2 === 0 ? 2 : 3,
        zums: [],
        buildings: [],
      };
    }
  }
  return cells;
}
