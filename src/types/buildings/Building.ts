import { BuildingDataDevelopment } from "../../data/buildings/_types/BuildingData";
import { Cell } from "../grid/Cell";
import { Id } from "../Id";
import { Dom } from "./list/Dom";
import { SeedVessel } from "./list/SeedVessel";
import { Module } from "./Module";

export type Building = SeedVessel | Dom;

export type GenericBuilding = Id & {
  cell: Cell["id"];
  state?: "dry";
  step?: number;
  developments?: { [type: string]: BuildingDevelopment };
  modules?: Module[];
};

export type BuildingDevelopment = {
  type: BuildingDataDevelopment["type"];
  count: number;
};
