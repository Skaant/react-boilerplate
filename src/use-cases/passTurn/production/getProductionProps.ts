import {
  BuildingProps,
  JingProdBuildingProps,
  WaProdBuildingProps,
  ZumsProdBuildingProps,
} from "../../../data/buildings/_types/props/BuildingProps";

export function getProductionProps(props: BuildingProps[]) {
  return props.filter(({ type }) => type.endsWith("-prod")) as (
    | ZumsProdBuildingProps
    | WaProdBuildingProps
    | JingProdBuildingProps
  )[];
}
