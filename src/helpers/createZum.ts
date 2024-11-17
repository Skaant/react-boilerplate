import { ZUM_NAMES } from "../data/zum-names.data";
import { Index } from "../types/Index";
import { Zum } from "../types/zums/Zum";

export function createZum(zums: Index<Zum>, zum?: Partial<Zum>): Zum {
  return {
    id: (Object.keys(zums).length + 1).toString(),
    name: ZUM_NAMES[Math.floor(Math.random() * ZUM_NAMES.length)],
    cell: "0,0",
    ...zum,
  };
}
