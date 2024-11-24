import { Building } from "../../../../types/buildings/Building";
import { MergedBuildingOrModule } from "../_types/MergedBuildingOrModule";

export function mergeBuildingAndModulesProps({
  modules,
  ...building
}: Pick<Building, "state" | "modules"> &
  MergedBuildingOrModule): MergedBuildingOrModule {
  return (
    (modules?.filter(({ state }) => !state) || []) as MergedBuildingOrModule[]
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
    building.state ? {} : (building as MergedBuildingOrModule)
  );
}
