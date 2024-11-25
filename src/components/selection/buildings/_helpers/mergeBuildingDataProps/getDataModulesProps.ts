import { BuildingProps } from "../../../../../data/buildings/_types/props/BuildingProps";
import { MODULES } from "../../../../../data/buildings/modules/modules.data";
import { Building } from "../../../../../types/buildings/Building";

export function getDataModulesProps(
  modules: Exclude<Building["modules"], undefined>
): BuildingProps[] {
  return modules
    .filter(({ state }) => !state)
    .map((module) => MODULES[module.type].props)
    .flat();
}
