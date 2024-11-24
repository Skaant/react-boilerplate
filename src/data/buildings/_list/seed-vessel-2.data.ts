import { BuildingData } from "../_types/BuildingData";
import { SEED_VESSEL_ROOTS } from "./seed-vessel/developments/seed-vessel-roots.data";

export const SEED_VESSEL_2: BuildingData<"seed-vessel-2"> = {
  type: "seed-vessel-2",
  name: "Vaisseau-graine aterri",
  description:
    "Atteri, on ne sait encore où. Le vaisseau-graine et les Zums commencent à se réveiller doucement. Ils ont trés soif.",
  props: [{ type: "zums-prod", value: 0.1 }],
  developments: [SEED_VESSEL_ROOTS],
  evolutions: [
    "Relais Hol-Zong",
    "Manufacture",
    "Vault de toutes les traïbs",
    "Grand arbre",
  ],
  modules: ["rooms", "wa-tank", "inside-garden", "hol-zong-shi-vault"],
};
