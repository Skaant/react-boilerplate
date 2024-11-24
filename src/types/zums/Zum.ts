import { Cell } from "../grid/Cell";
import { Id } from "../Id";

export type Zum = Id & {
  state?: "dry";
  name: string;
  cell: Cell["id"];
};
