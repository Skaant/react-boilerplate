import { BuildingData } from "../_types/BuildingData";

export const SHARED_SEED_VESSEL_DATA: Pick<
  BuildingData<"seed-vessel">,
  "props" | "modules"
> = {
  props: [
    { type: "zums-prod", value: 0.1 },
    { type: "wa-prod", value: -1 },
    { type: "jing-max", value: 1 },
    { type: "jing-prod", value: 1 },
  ],
  modules: ["rooms", "wa-tank", "inside-garden", "hol-zong-shi-vault"],
};

export const SEED_VESSEL_1: BuildingData<"seed-vessel-1"> = {
  ...SHARED_SEED_VESSEL_DATA,
  type: "seed-vessel-1",
  name: "Vaisseau-graine en transit",
  description:
    "La graine parcourt l'espace à la recherche d'un sol dans lequel croître. À son bord, des Zums et tout le matériel pour fonder un nouvel établissement.",
};
