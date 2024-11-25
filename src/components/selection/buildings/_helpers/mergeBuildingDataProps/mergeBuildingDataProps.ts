import { BUILDINGS } from "../../../../../data/buildings/buildings.data";
import { Building } from "../../../../../types/buildings/Building";
import { getDataDevelopmentsProps } from "./getDataDevelopmentsProps";
import { getDataModulesProps } from "./getDataModulesProps";

export function mergeBuildingDataProps(building: Building) {
  const data =
    BUILDINGS[
      `${building.type}${
        building.step ? `-${building.step}` : ""
      }` as keyof typeof BUILDINGS
    ];
  return [
    ...(data.props || []),
    ...(building.developments && data.developments
      ? getDataDevelopmentsProps(building.developments, data.developments)
      : []),
    ...(building.modules ? getDataModulesProps(building.modules) : []),
  ];
}
