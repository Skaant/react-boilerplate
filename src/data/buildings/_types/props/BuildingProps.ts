export type BuildingProps =
  | {
      type: "zums-slots";
      value: number;
    }
  | {
      type: "zums-prod";
      value: number;
    }
  | {
      type: "wa-max";
      value: number;
    }
  | {
      type: "wa-prod";
      value: number;
    }
  | {
      type: "jing-max";
      value: number;
    }
  | {
      type: "jing-prod";
      value: number;
    }
  | {
      type: "data-max";
      value: number;
    };
