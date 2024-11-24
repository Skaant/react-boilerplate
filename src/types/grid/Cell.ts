import { Building } from "../buildings/Building";
import { Id } from "../Id";
import { Zum } from "../zums/Zum";

export type Cell = Id & {
  /** 0, 1, 2 ... */
  x: number;
  /** 0, 1, 2 ... */
  y: number;
  zums: Zum["id"][];
  buildings: Building["id"][];
} & (
    | {
        type: "space";
      }
    | { type: "ground"; waild: number }
  );
