import { ModuleData } from "../types/ModuleData";

export const HOL_ZONG_SHI_VAULT_MODULE: ModuleData<"hol-zong-shi-vault"> = {
  type: "hol-zong-shi-vault",
  name: "Shi-Vault du Hol-Zong",
  description:
    "Relais minimaliste du Hol-Zong, le réseau de conscience collective. La pièce présente une interface pour naviguer dessus.",
  props: [{ type: "data-max", value: 10 }],
};
