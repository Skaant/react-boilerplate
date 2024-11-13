import { Id } from "../Id";
import { Zum } from "../zums/Zum";

export type Cell = Id & {
  x: number;
  y: number;
  wighld: number;
  zums: Zum["id"][];
};
