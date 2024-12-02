import { GameState } from "../../../../contexts/game/GameContext";
import { HolBuildInstId } from "../../../../types/buildings/HolBuildInst";

export function getNextInstance(
  prevs: HolBuildInstId[],
  instances: HolBuildInstId[]
) {
  return instances.find((instance) => !prevs.includes(instance));
}
