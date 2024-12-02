import { Building } from "../../../../../types/buildings/Building";
import { BuildingInstanceProps } from "./_types/BuildingInstanceProps";

export function mergeBuildingInstanceProps(
  {
    modules,
    ...building
  }: Pick<Building, "state" | "modules"> & BuildingInstanceProps,
  state?: Building["state"]
): BuildingInstanceProps {
  return (
    (modules?.filter(({ state: _state }) => _state === state) ||
      []) as BuildingInstanceProps[]
  ).reduce(
    (merge, module) => {
      if (module.residents) {
        merge.residents = [...(merge.residents || []), ...module.residents];
      }
      if (module.zumGrowth) {
        merge.zumGrowth = (merge.zumGrowth || 0) + module.zumGrowth;
      }
      if (module.wa) {
        merge.wa = (merge.wa || 0) + module.wa;
      }
      if (module.jing) {
        merge.jing = (merge.jing || 0) + module.jing;
      }
      if (module.data) {
        merge.data = (merge.data || 0) + module.data;
      }
      return merge;
    },
    building.state ? {} : (building as BuildingInstanceProps)
  );
}
