import { BuildingProps } from "../../../../../data/buildings/_types/props/BuildingProps";
import { MODULES } from "../../../../../data/buildings/modules/modules.data";
import { Building } from "../../../../../types/buildings/Building";
import { Module } from "../../../../../types/buildings/Module";

export function getDataModulesProps(
  modules: Exclude<Building["modules"], undefined>,
  state?: Module["state"]
): BuildingProps[] {
  return modules
    .filter(({ state: _state }) => state === _state)
    .map((module) => MODULES[module.type].props)
    .flat();
}
