export type BuildingCosts =
  | {
      type: "wa";
      value: number;
    }
  | {
      type: "wa-prod";
      value: number;
    }
  | {
      type: "jing";
      value: number;
    }
  | {
      type: "jing-prod";
      value: number;
    };
