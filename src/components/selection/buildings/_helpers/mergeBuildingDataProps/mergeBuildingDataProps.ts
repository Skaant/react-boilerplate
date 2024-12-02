import { BUILDINGS } from "../../../../../data/buildings/buildings.data";
import { Building } from "../../../../../types/buildings/Building";
import { getDataDevelopmentsProps } from "./getDataDevelopmentsProps";
import { getDataModulesProps } from "./getDataModulesProps";
import { mergeDataProps } from "./mergeDataProps";

export function mergeBuildingDataProps(
  building: Building,
  state?: Building["state"]
) {
  const data =
    BUILDINGS[
      `${building.type}${
        building.step ? `-${building.step}` : ""
      }` as keyof typeof BUILDINGS
    ];
  return mergeDataProps([
    ...((state === building.state && data.props) || []),
    ...(!state && building.developments && data.developments
      ? getDataDevelopmentsProps(building.developments, data.developments)
      : []),
    ...(building.modules ? getDataModulesProps(building.modules, state) : []),
  ]);
}
