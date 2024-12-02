import { describe, expect, it } from "vitest";
import { mergeDataProps } from "./mergeDataProps";
import { WA_TANK_MODULE } from "../../../../../data/buildings/modules/list/wa-tank.module";
import { INSIDE_GARDEN_MODULE } from "../../../../../data/buildings/modules/list/inside-garden.module";

describe("mergeDataProps", () => {
  it("should merge building props with the same type", () => {
    expect(
      mergeDataProps([
        ...WA_TANK_MODULE.props,
        ...WA_TANK_MODULE.props,
        ...INSIDE_GARDEN_MODULE.props,
      ])
    ).toEqual([{ type: "wa-max", value: 10 }, ...INSIDE_GARDEN_MODULE.props]);
  });
});
