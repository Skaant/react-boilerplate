import { GameContextData } from "../contexts/GameContext";
import { Building } from "../types/buildings/Building";
import { createCells } from "./createCells";
import { createZums } from "./createZums";

export function createGame(): GameContextData {
  const cells = createCells(1, 1);
  const zums = createZums(
    3,
    { cell: "0,0", state: "dry" },
    { cell: "0,0", state: "dry" },
    { cell: "0,0", state: "dry" }
  );
  const buildings = {
    "1": {
      id: "1",
      cell: "0,0",
      state: "dry",
      type: "seed-vessel",
      step: 1,
      modules: [
        { type: "rooms", residents: Object.keys(zums) },
        {
          type: "wa-tank",
        },
        {
          type: "inside-garden",
          state: "dry",
        },
        {
          type: "hol-zong-shi-vault",
          state: "dry",
        },
      ],
    } as Building,
  };
  cells["0,0"].zums = Object.keys(zums);
  cells["0,0"].buildings = ["1"];
  return {
    turn: 1,
    tutorial: 0,
    cells,
    zums,
    buildings,
  };
}
