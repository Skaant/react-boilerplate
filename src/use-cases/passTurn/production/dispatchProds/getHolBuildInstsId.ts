import { Building } from "../../../../types/buildings/Building";
import { HolBuildInstId } from "../../../../types/buildings/HolBuildInst";

export function getHolBuildInstsId(building: Building): HolBuildInstId[] {
  const { developments, modules, ..._building } = building;
  const buildingId = building.id;
  return [
    {
      type: "building",
      buildingId,
    },
    ...(developments
      ? Object.values(developments).map(
          ({ type }) =>
            ({
              type: "development",
              buildingId,
              developmentType: type,
            } as HolBuildInstId)
        )
      : []),
    ...(modules?.map(
      ({ id }) =>
        ({ type: "module", buildingId, moduleId: id } as HolBuildInstId)
    ) || []),
  ];
}
