import { createContext } from "react";
import { Index } from "../types/Index";
import { Cell } from "../types/grid/Cell";
import { Zum } from "../types/zums/Zum";
import { Building } from "../types/buildings/Building";
import { State } from "../types/_helpers/State";

export type GameContextData =
  | undefined
  | {
      turn: number;
      tutorial: number;
      cells: Index<Cell>;
      zums: Index<Zum>;
      buildings: Index<Building>;
    };
export const GameContext = createContext<State<GameContextData>>([
  undefined,
  () => {},
]);
