import { GameContextData } from "../contexts/GameContext";
import { State } from "../types/_helpers/State";

export function landSeedVessel({
  gameContext: [game, setGame],
}: {
  gameContext: State<GameContextData>;
}) {
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
  setGame({
    ...game!,
    cells,
    buildings,
  });
}
