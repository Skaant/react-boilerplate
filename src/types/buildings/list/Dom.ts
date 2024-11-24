import { HasResidents } from "../attributes/HasResidents";
import { GenericBuilding } from "../Building";

export type Dom = GenericBuilding & {
  type: "dom";
} & HasResidents;
