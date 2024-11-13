import { createContext } from "react";
import { Index } from "./types/Index";
import { Cell } from "./types/grid/Cell";
import { Zum } from "./types/zums/Zum";

export type GameContextData =
  | undefined
  | {
      cells: Index<Cell>;
      zums: Index<Zum>;
    };
export const GameContext = createContext<
  [GameContextData, React.Dispatch<React.SetStateAction<GameContextData>>]
>([undefined, () => {}]);
