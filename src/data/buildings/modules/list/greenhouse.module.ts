import { ModuleData } from "../types/ModuleData";

export const GREENHOUSE_MODULE: ModuleData<"greenhouse"> = {
  type: "greenhouse",
  name: "Serre",
  description:
    "Une membrane translucide permet à la lumière de passer, et maintient une atmosphère tempérée, idéale pour le jardinage.",
  props: [
    { type: "jing-prod", value: 3 },
    { type: "jing-max", value: 3 },
  ],
};
