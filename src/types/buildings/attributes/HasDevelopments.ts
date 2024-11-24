import { BuildingDevelopment } from "../Building";

export type HasDevelopments<T extends BuildingDevelopment["type"][]> = {
  developments: {
    [key in T[number]]: {
      type: T[number];
      count: number;
    };
  };
};
