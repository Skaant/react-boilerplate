import { Cell } from "../grid/Cell";
import { Id } from "../Id";

export type Zum = Id & {
  name: string;
  cell: Cell["id"];
};
