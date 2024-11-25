import { Building } from "../../../../../types/buildings/Building";
import { MergedBuildingProps } from "../../_types/MergedBuildingProps";

export function mergeBuildingInstanceProps({
  modules,
  ...building
}: Pick<Building, "state" | "modules"> &
  MergedBuildingProps): MergedBuildingProps {
  return (
    (modules?.filter(({ state }) => !state) || []) as MergedBuildingProps[]
  ).reduce(
    (merge, module) => {
      if (module.residents) {
        merge.residents = [...(merge.residents || []), ...module.residents];
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
    building.state ? {} : (building as MergedBuildingProps)
  );
}
