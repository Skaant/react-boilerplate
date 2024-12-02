import { GenericBuildingDataDevelopment } from "../types/BuildingDataDevelopment";

export const SEED_VESSEL_ROOTS: GenericBuildingDataDevelopment<"roots"> = {
  type: "roots",
  name: "Racines",
  description:
    "Le premier organe à se mettre en route. Perméable au Wa, les racines permettent de capter la Wa présent dans le sol, et de la remonter jusqu'au vaisseau-graine.",
  count: 5,
  costs: [{ type: "jing", value: 1 }],
  props: [{ type: "wa-prod", value: 0.5 }],
  initial: {
    props: [{ type: "wa-prod", value: 1 }],
  },
};
