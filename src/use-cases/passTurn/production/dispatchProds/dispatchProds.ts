import { getHolBuildInstById } from "../../../../contexts/game/accessers/getHolBuildInstById";
import { GameState } from "../../../../contexts/game/GameContext";
import { ProdSource } from "../_types/ProdSource";
import { getHolBuildInstsId } from "./getHolBuildInstsId";
import { getNextInstance } from "./getNextInstance";

export function dispatchProd(prods: ProdSource[], game: GameState): GameState {
  const _game = { ...game };
  prods.forEach(({ prop, ...instanceId }) => {
    // -> if prop type zums
    // else (extract)
    let remain = prop.value;
    const instancesId = getHolBuildInstsId(
      _game.buildings[instanceId.buildingId]
    );
    const prevs = [instanceId];
    let instance = getHolBuildInstById(instanceId, game);
    while (remain && instance) {
      remain = 0; // est-ce instance peut recevoir ?
      const instance = getNextInstance(prevs, instancesId);
      instance && prevs.push(instance);
    }
  });
  return _game;
}
