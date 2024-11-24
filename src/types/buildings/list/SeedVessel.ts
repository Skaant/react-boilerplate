import { HasDevelopments } from "../attributes/HasDevelopments";
import { GenericBuilding } from "../Building";

export type SeedVessel = GenericBuilding & {
  type: "seed-vessel";
} & (
    | { step: 1 }
    | ({
        step: 2;
      } & HasDevelopments<["roots"]>)
  );
