import { BuildingData } from "../_types/BuildingData";

export const DOM: BuildingData<"dom"> = {
  type: "dom",
  name: "Dom",
  description:
    "Lieu de vie basique pour les Zums, fait d'une sorte de carapace et de larges ouvertures transparentes.",
  costs: [],
  props: [
    {
      type: "zums-slots",
      value: 5,
    },
    {
      type: "wa-prod",
      value: 1,
    },
  ],
  evolutions: ["Vault", "Serre", "Dom collectif"],
  modules: ["rooms", "wa-tank", "greenhouse"],
};
