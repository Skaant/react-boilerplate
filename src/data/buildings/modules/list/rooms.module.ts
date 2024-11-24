import { ModuleData } from "../types/ModuleData";

export const ROOMS_MODULE: ModuleData<"rooms"> = {
  type: "rooms",
  name: "Chambres",
  description:
    "Des petits cocons confortables et insonorisés permettent aux Zums de s'intaller et se reposer.",
  props: [{ type: "zums-slots", value: 3 }],
};
