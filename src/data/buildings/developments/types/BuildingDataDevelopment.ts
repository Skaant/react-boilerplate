import { SEED_VESSEL_ROOTS } from "../list/seed-vessel-roots.data";
import { CostsAndProps } from "../../_types/BuildingData";

export type BuildingDevelopmentType = BuildingDataDevelopment["type"];
/** @todo Rename BuildingDevelopmentData */
export type BuildingDataDevelopment = typeof SEED_VESSEL_ROOTS;
export type GenericBuildingDataDevelopment<T extends string> = {
  type: T;
  name: string;
  description: string;
  count: number;
} & CostsAndProps & {
    initial?: CostsAndProps;
    final?: CostsAndProps;
  };
