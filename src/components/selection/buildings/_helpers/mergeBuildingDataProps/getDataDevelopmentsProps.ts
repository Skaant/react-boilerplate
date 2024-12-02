import { BuildingProps } from "../../../../../data/buildings/_types/props/BuildingProps";
import { BUILDINGS } from "../../../../../data/buildings/buildings.data";
import { Building } from "../../../../../types/buildings/Building";

export function getDataDevelopmentsProps(
  developments: Exclude<Building["developments"], undefined>,
  data: Exclude<
    (typeof BUILDINGS)[keyof typeof BUILDINGS]["developments"],
    undefined
  >
): BuildingProps[] {
  return developments && data
    ? Object.values(developments)
        .map(({ type, count }) =>
          [...Array(count)]
            .map((_, index) => {
              if (index === 0 && data[type].initial)
                return data[type].initial?.props || [];
              if (index === data[type].count - 1 && data[type].final)
                return data[type].final?.props || [];
              return (data[type].props as BuildingProps[]) || [];
            })
            .flat()
        )
        .flat()
    : [];
}
