import {
  BuildingDataDevelopment,
  BuildingDevelopmentType,
} from "./types/BuildingDataDevelopment";
import { SEED_VESSEL_ROOTS } from "./list/seed-vessel-roots.data";

export const DEVELOPMENTS: {
  [key in BuildingDevelopmentType]: BuildingDataDevelopment;
} = {
  [SEED_VESSEL_ROOTS.type]: SEED_VESSEL_ROOTS,
};
