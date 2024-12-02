import { describe, it, expect } from "vitest";
import { getHolisticBuildingProdProps } from "./getHolisticBuildingProdProps";

describe("getHolisticBuildingProdProps", () => {
  it("should return production props from a building, its developments and modules", () => {
    expect(
      getHolisticBuildingProdProps({
        id: "001",
        type: "seed-vessel",
        cell: "0,0",
        step: 3,
        developments: {
          roots: { type: "roots", count: 2 },
        },
        modules: [
          {
            type: "inside-garden",
            id: "020",
            buildingId: "001",
            jing: 0,
          },
        ],
      })
    ).toEqual([
      {
        buildingId: "001",
        prop: {
          type: "zums-prod",
          value: 0.1,
        },
        type: "building",
      },
      {
        buildingId: "001",
        prop: {
          type: "wa-prod",
          value: -1,
        },
        type: "building",
      },
      {
        buildingId: "001",
        prop: {
          type: "jing-prod",
          value: 1,
        },
        type: "building",
      },
      {
        buildingId: "001",
        developmentType: "roots",
        prop: {
          type: "wa-prod",
          value: 1,
        },
        type: "development",
      },
      {
        buildingId: "001",
        moduleId: "020",
        prop: {
          type: "wa-prod",
          value: -1,
        },
        type: "module",
      },
      {
        buildingId: "001",
        moduleId: "020",
        prop: {
          type: "jing-prod",
          value: 2,
        },
        type: "module",
      },
    ]);
  });
});
