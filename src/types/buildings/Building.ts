import { Cell } from "../grid/Cell";
import { Id } from "../Id";
import { Zum } from "../zums/Zum";

export type Building = Id & {
  cell: Cell["id"];
} & (
    | {
        type: "kolos-seed";
        residents: Zum["id"][];
      }
    | {
        type: "dom";
        residents: Zum["id"][];
      }
  );
