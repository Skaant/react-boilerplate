import { Module } from "../../../types/buildings/Module";
import {
  BuildingDataDevelopment,
  BuildingDevelopmentType,
} from "../developments/types/BuildingDataDevelopment";
import { BuildingCosts } from "./costs/BuildingCosts";
import { BuildingProps } from "./props/BuildingProps";

export type BuildingData<T extends string, S = {}> = {
  type: T;
  name: string;
  description: string;
} & CostsAndProps & {
    developments?: {
      [key in BuildingDevelopmentType]: BuildingDataDevelopment;
    };
    evolutions?: string[];
    modules?: Module["type"][];
  } & S;

export type CostsAndProps = {
  costs?: BuildingCosts[];
  props?: BuildingProps[];
};
