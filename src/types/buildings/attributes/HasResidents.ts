import { Zum } from "../../zums/Zum";

export type HasResidents = {
  residents: Zum["id"][];
  /** Progression up to next zum, between 0 & 1 */
  zumGrowth?: number;
};
