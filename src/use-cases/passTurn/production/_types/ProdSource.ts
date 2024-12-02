import { BuildingDataProp } from "../../../../data/buildings/_types/props/BuildingProps";
import { HolBuildInstId } from "../../../../types/buildings/HolBuildInst";

export type ProdSource = HolBuildInstId & {
  prop: BuildingDataProp;
};
