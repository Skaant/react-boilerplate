import { describe, it, expect } from "vitest";
import {
  BuildingProps,
  JingProdBuildingProps,
  WaProdBuildingProps,
  ZumsProdBuildingProps,
} from "../../../data/buildings/_types/props/BuildingProps";
import { getProductionProps } from "./getProductionProps";

describe("getProductionProps", () => {
  it("should return only production buildings props", () => {
    const input: BuildingProps[] = [
      { type: "jing-prod" } as JingProdBuildingProps,
      { type: "wa-prod" } as WaProdBuildingProps,
      { type: "zums-prod" } as ZumsProdBuildingProps,
      { type: "wa-max", value: 1 },
    ];
    const result = getProductionProps(input);
    expect(result).toHaveLength(3);
    expect(result).toEqual([
      { type: "jing-prod" },
      { type: "wa-prod" },
      { type: "zums-prod" },
    ]);
  });
});
