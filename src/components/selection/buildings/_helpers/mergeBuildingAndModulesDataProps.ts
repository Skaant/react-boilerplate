import { BUILDINGS } from "../../../../data/buildings/buildings.data";
import { MODULES } from "../../../../data/buildings/modules/modules.data";
import { Building } from "../../../../types/buildings/Building";

export function mergeBuildingAndModulesDataProps(building: Building) {
  return [
    ...(BUILDINGS[`${building.type}${building.step ? `-${building.step}` : ""}`]
      .props || []),
    ...(
      (building.modules || [])
        .filter(({ state }) => !state)
        .map((module) => MODULES[module.type].props) || []
    ).flat(),
  ];
}
