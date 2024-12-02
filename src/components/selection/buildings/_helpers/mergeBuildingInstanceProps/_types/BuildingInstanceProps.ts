import { HasData } from "../../../../../../types/buildings/attributes/HasData";
import { HasJing } from "../../../../../../types/buildings/attributes/HasJing";
import { HasResidents } from "../../../../../../types/buildings/attributes/HasResidents";
import { HasWa } from "../../../../../../types/buildings/attributes/HasWa";
import { OptionalNested } from "../../../../../../types/Optional";

export type BuildingInstanceProps = OptionalNested<
  HasResidents & HasWa & HasJing & HasData
>;
