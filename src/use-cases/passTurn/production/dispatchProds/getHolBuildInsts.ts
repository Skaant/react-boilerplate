import { Building } from "../../../../types/buildings/Building";
import { HolBuildInst } from "../../../../types/buildings/HolBuildInst";

export function getHolBuildInsts(building: Building): HolBuildInst[] {
  const { developments, modules, ..._building } = building;
  return [
    _building,
    ...(developments ? Object.values(developments) : []),
    ...(modules || []),
  ];
}
