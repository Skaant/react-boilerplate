export type BuildingCosts =
  | {
      type: "wa";
      value: number;
    }
  | {
      type: "jing";
      value: number;
    };
