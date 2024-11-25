import { BuildingProps } from "../../../../../data/buildings/_types/props/BuildingProps";
import { BUILDINGS } from "../../../../../data/buildings/buildings.data";
import { Building } from "../../../../../types/buildings/Building";

export function getDataDevelopmentsProps(
  developments: Building["developments"],
  data: (typeof BUILDINGS)[keyof typeof BUILDINGS]["developments"]
): BuildingProps[] {
  return developments && data
    ? Object.values(developments)
        .map(({ type, count }) =>
          [...Array(count)]
            .map(() => data.developments?.[type].props as BuildingProps)
            .flat()
        )
        .flat()
    : [];
}
