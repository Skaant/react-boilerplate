import { BuildingData } from "../_types/BuildingData";
import { SHARED_SEED_VESSEL_DATA_2 } from "./seed-vessel-2.data";

export const SEED_VESSEL_3: BuildingData<"seed-vessel-3"> = {
  ...SHARED_SEED_VESSEL_DATA_2,
  type: "seed-vessel-3",
  name: "Vaisseau-graine germé",
  description:
    "Le vaisseau-graine est maintenant vivifié. Malgré sa consommation problématique de Wa, qui augmente l'humidité de l'air, une moisissure nutritive se développe sur ses parois.",
};
