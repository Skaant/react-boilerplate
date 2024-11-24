import { ModuleData } from "../types/ModuleData";

export const WA_TANK_MODULE: ModuleData<"wa-tank"> = {
  type: "wa-tank",
  name: "Cuve Wa",
  description:
    "La Wa est stockée dans un matérieau spongieux, qui devient rigide lorsqu'on le presse ou qu'il sèche.",
  props: [{ type: "wa-max", value: 5 }],
};
