import { BuildingDataDevelopment } from "../../../_types/BuildingData";

export const SEED_VESSEL_ROOTS: BuildingDataDevelopment = {
  type: "roots",
  name: "Racines",
  count: 5,
  costs: [{ type: "jing", value: 1 }],
  props: [{ type: "wa-prod", value: 0.5 }],
  initial: {
    props: [{ type: "wa-prod", value: 1 }],
  },
};
