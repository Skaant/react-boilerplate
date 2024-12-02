import { Building, BuildingDevelopment } from "./Building";
import { BuildingModule } from "./Module";

export type HolBuildInst =
  | Omit<Building, "">
  | BuildingDevelopment
  | BuildingModule;
export type HolBuildInstId = { buildingId: Building["id"] } & (
  | { type: "building" }
  | { type: "development"; developmentType: BuildingDevelopment["type"] }
  | { type: "module"; moduleId: BuildingModule["id"] }
);
