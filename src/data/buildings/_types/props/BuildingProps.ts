export type BuildingDataProp = BuildingProps;
/** @deprecated Rename to `BuildingDataProp` */
export type BuildingProps =
  | {
      type: "zums-slots";
      value: number;
    }
  | ZumsProdBuildingProps
  | {
      type: "wa-max";
      value: number;
    }
  | WaProdBuildingProps
  | {
      type: "jing-max";
      value: number;
    }
  | JingProdBuildingProps
  | {
      type: "data-max";
      value: number;
    };
export type ZumsProdBuildingProps = {
  type: "zums-prod";
  value: number;
};
export type WaProdBuildingProps = {
  type: "wa-prod";
  value: number;
};
export type JingProdBuildingProps = {
  type: "jing-prod";
  value: number;
};
export type ProductionDataProps =
  | ZumsProdBuildingProps
  | WaProdBuildingProps
  | JingProdBuildingProps;
