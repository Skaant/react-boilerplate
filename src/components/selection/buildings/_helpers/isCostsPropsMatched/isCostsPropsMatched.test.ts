import { describe, it, expect } from "vitest";
import { isCostsPropsMatched } from "./isCostsPropsMatched";
import { CostsAndProps } from "../../../../../data/buildings/_types/BuildingData";
import { BuildingProps } from "../../../../../data/buildings/_types/props/BuildingProps";
import { BuildingInstanceProps } from "../mergeBuildingInstanceProps/_types/BuildingInstanceProps";
import { SEED_VESSEL_ROOTS } from "../../../../../data/buildings/_list/seed-vessel/developments/seed-vessel-roots.data";

describe("isCostsPropsMatched", () => {
  it("should return true when costs and props are undefined", () => {
    const input: CostsAndProps = { costs: undefined, props: undefined };
    expect(isCostsPropsMatched(input)).toBe(true);
  });

  it("should return true when costs are met and props are matched", () => {
    const input: CostsAndProps = {
      costs: [{ type: "jing", value: 1 }],
      props: [{ type: "wa-prod", value: -1 }],
    };
    const data: BuildingProps[] = [{ type: "wa-prod", value: 2 }];
    const instance: BuildingInstanceProps = { jing: 4 };
    expect(isCostsPropsMatched(input, data, instance)).toBe(true);
  });

  it("should return false when costs are not met", () => {
    const input: CostsAndProps = {
      costs: [{ type: "jing", value: 1 }],
      props: [{ type: "wa-prod", value: -1 }],
    };
    const data: BuildingProps[] = [{ type: "wa-prod", value: 2 }];
    const instance: BuildingInstanceProps = { jing: 0 };
    expect(isCostsPropsMatched(input, data, instance)).toBe(false);
  });

  it("should return false when props are not matched", () => {
    const input: CostsAndProps = {
      costs: [{ type: "jing", value: 1 }],
      props: [{ type: "wa-prod", value: -1 }],
    };
    const data: BuildingProps[] = [{ type: "wa-prod", value: 0.5 }];
    const instance: BuildingInstanceProps = { jing: 4 };
    expect(isCostsPropsMatched(input, data, instance)).toBe(false);
  });

  it("should return true when costs are undefined and props are matched", () => {
    const input: CostsAndProps = {
      props: [{ type: "wa-prod", value: -1 }],
    };
    const data: BuildingProps[] = [{ type: "wa-prod", value: 2 }];
    expect(isCostsPropsMatched(input, data)).toBe(true);
  });

  it("should return true when props are undefined and costs are met", () => {
    const input: CostsAndProps = {
      costs: [{ type: "jing", value: 1 }],
    };
    const instance: BuildingInstanceProps = { jing: 4 };
    expect(isCostsPropsMatched(input, undefined, instance)).toBe(true);
  });
});
