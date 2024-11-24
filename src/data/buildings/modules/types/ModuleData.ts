import { Module } from "../../../../types/buildings/Module";
import { BuildingProps } from "../../_types/props/BuildingProps";

export type ModuleData<T extends Module["type"]> = {
  type: T;
  name: string;
  description: string;
  props: BuildingProps[];
};
