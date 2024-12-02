import { describe, it, expect } from "vitest";
import { getDataDevelopmentsProps } from "./getDataDevelopmentsProps";
import { Building } from "../../../../../types/buildings/Building";
import { SEED_VESSEL_ROOTS } from "../../../../../data/buildings/developments/list/seed-vessel-roots.data";

describe("getDataDevelopmentsProps", () => {
  it("should return the correct BuildingProps array", () => {
    const developments: Building["developments"] = {
      [SEED_VESSEL_ROOTS.type]: { type: SEED_VESSEL_ROOTS.type, count: 2 },
    };
    const data = {
      [SEED_VESSEL_ROOTS.type]: SEED_VESSEL_ROOTS,
    };
    const result = getDataDevelopmentsProps(developments, data);
    expect(result).toEqual([
      { type: "wa-prod", value: 1 },
      { type: "wa-prod", value: 0.5 },
    ]);
  });
});
