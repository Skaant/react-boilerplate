import { BuildingData } from "../_types/BuildingData";

export const SEED_VESSEL_1: BuildingData<"seed-vessel-1"> = {
  type: "seed-vessel-1",
  name: "Vaisseau-graine en transit",
  description:
    "La graine parcourt l'espace à la recherche d'un sol dans lequel croître. À son bord, des Zums et tout le matériel pour fonder un nouvel établissement.",
  costs: [],
  props: [],
  evolutions: [
    "Relais Hol-Zong",
    "Manufacture",
    "Vault de toutes les traïbs",
    "Grand arbre",
  ],
  modules: ["rooms", "wa-tank", "inside-garden", "hol-zong-shi-vault"],
};
