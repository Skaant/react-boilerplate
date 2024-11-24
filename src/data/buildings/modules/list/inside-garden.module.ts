import { ModuleData } from "../types/ModuleData";

export const INSIDE_GARDEN_MODULE: ModuleData<"inside-garden"> = {
  type: "inside-garden",
  name: "Jardin intérieur",
  description:
    "Un ecosystème d'humus, de champignons et de plantes, équilibré pour évoluer en presque-autonomie.",
  props: [
    { type: "wa-prod", value: -1 },
    { type: "jing-prod", value: 2 },
    { type: "jing-max", value: 2 },
  ],
};
