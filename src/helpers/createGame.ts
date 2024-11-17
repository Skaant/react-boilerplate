import { GameContextData } from "../GameContext";
import { Building } from "../types/buildings/Building";
import { createCells } from "./createCells";
import { createZums } from "./createZums";

export function createGame(): GameContextData {
  const cells = createCells(3, 3);
  const zums = createZums(3, { cell: "1,1" }, { cell: "1,1" }, { cell: "1,1" });
  const buildings = {
    "1": {
      id: "1",
      cell: "1,1",
      type: "kolos-seed",
      residents: Object.keys(zums),
    } as Building,
    "2": {
      id: "2",
      cell: "0,0",
      type: "dom",
    } as Building,
  };
  cells["1,1"].zums = Object.keys(zums);
  cells["1,1"].buildings = ["1"];
  cells["0,0"].buildings = ["2"];
  return {
    cells,
    zums,
    buildings,
  };
}
