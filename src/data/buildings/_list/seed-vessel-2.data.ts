import { BuildingData } from "../_types/BuildingData";
import { SEED_VESSEL_ROOTS } from "../developments/list/seed-vessel-roots.data";
import { SHARED_SEED_VESSEL_DATA } from "./seed-vessel-1.data";

export const SHARED_SEED_VESSEL_DATA_2: Pick<
  BuildingData<"seed-vessel">,
  "props" | "developments" | "modules"
> = {
  ...SHARED_SEED_VESSEL_DATA,
  developments: { [SEED_VESSEL_ROOTS.type]: SEED_VESSEL_ROOTS },
};

export const SEED_VESSEL_2: BuildingData<"seed-vessel-2"> = {
  ...SHARED_SEED_VESSEL_DATA_2,
  type: "seed-vessel-2",
  name: "Vaisseau-graine atterri",
  description:
    "Atterri, on ne sait encore où. Là, le vaisseau-graine est entré en contact avec lae Wa. Aussitôt une toute petite racine en est sortie et a percé le sol, à la recherche d'encore plus de Wa.",
};
