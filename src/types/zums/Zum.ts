import { Cell } from "../grid/Cell";
import { Id } from "../Id";

export type Zum = Id & {
  refCell: Cell["id"];
};