import { ModuleData } from "../types/ModuleData";

export const WA_TANK_MODULE: ModuleData<"wa-tank"> = {
  type: "wa-tank",
  name: "Cuve Wa",
  description:
    "Un matériau spongieux tapisse cette cavité organique. Lorsqu'il sèche, il devient très dur.",
  props: [{ type: "wa-max", value: 5 }],
};
