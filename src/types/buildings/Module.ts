import { Id } from "../Id";
import { Building } from "./Building";
import { HasData } from "./attributes/HasData";
import { HasJing } from "./attributes/HasJing";
import { HasResidents } from "./attributes/HasResidents";
import { HasWa } from "./attributes/HasWa";

export type BuildingModule = Module;
/** @deprecated Rename to BuildingModule */
export type Module = Id & {
  state?: "dry";
  buildingId: Building["id"];
} & (
    | ({
        type: "rooms";
      } & HasResidents)
    | ({
        type: "wa-tank";
      } & HasWa)
    | ({
        type: "inside-garden" | "greenhouse";
      } & HasJing)
    | ({
        type: "hol-zong-shi-vault";
      } & HasData)
  );
