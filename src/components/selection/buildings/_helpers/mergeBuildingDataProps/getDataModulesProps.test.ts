import { describe, expect, it } from "vitest";
import { Building } from "../../../../../types/buildings/Building";
import { getDataModulesProps } from "./getDataModulesProps";
import { ROOMS_MODULE } from "../../../../../data/buildings/modules/list/rooms.module";
import { WA_TANK_MODULE } from "../../../../../data/buildings/modules/list/wa-tank.module";

describe("getDataModulesProps", () => {
  it("should return all modules props", () => {
    const modules: Exclude<Building["modules"], undefined> = [
      { type: "rooms" } as Exclude<Building["modules"], undefined>[number],
      { type: "rooms" } as Exclude<Building["modules"], undefined>[number],
      { type: "wa-tank" } as Exclude<Building["modules"], undefined>[number],
    ];
    expect(getDataModulesProps(modules)).toEqual([
      ...ROOMS_MODULE.props,
      ...ROOMS_MODULE.props,
      ...WA_TANK_MODULE.props,
    ]);
  });
});
