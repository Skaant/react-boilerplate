import { GameContextData } from "../contexts/GameContext";
import { State } from "../types/_helpers/State";

export function landSeedVessel(
  game: Exclude<GameContextData, undefined>
): Exclude<GameContextData, undefined> {
  const cells = { ...game!.cells };
  cells["0,0"] = {
    ...cells["0,0"],
    type: "ground",
    waild: 3,
  };
  const buildings = { ...game!.buildings };
  buildings["1"] = {
    ...buildings["1"],
    step: 2,
    developments: {
      roots: {
        type: "roots",
        count: 1,
      },
    },
  };
  return {
    ...game!,
    cells,
    buildings,
  };
}
