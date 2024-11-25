import { Module } from "../../../types/buildings/Module";
import { Index } from "../../../types/Index";
import { BuildingCosts } from "./costs/BuildingCosts";
import { BuildingProps } from "./props/BuildingProps";

export type BuildingData<T extends string, S = {}> = {
  type: T;
  name: string;
  description: string;
} & CostsAndProps & {
    developments?: {
      [key: BuildingDataDevelopment["type"]]: BuildingDataDevelopment;
    };
    evolutions?: string[];
    modules?: Module["type"][];
  } & S;

type CostsAndProps = {
  costs?: BuildingCosts[];
  props?: BuildingProps[];
};

export type BuildingDataDevelopment = {
  type: string;
  name: string;
  count: number;
} & CostsAndProps & {
    initial?: CostsAndProps;
    final?: CostsAndProps;
  };
