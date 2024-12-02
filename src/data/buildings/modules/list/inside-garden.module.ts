import { ModuleData } from "../types/ModuleData";

export const INSIDE_GARDEN_MODULE: ModuleData<"inside-garden"> = {
  type: "inside-garden",
  name: "Jardin intérieur",
  description:
    "Un ecosystème d'humus, de champignons et de plantes, équilibré pour se maintenir en toute autonomie. Il n'y a pas de transformation, donc pas vraiment de stockage de Jing : il y a ce qui pousse, c'est tout.",
  props: [
    { type: "wa-prod", value: -1 },
    { type: "jing-prod", value: 2 },
    { type: "jing-max", value: 2 },
  ],
};
