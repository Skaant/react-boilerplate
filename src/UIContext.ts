import { createContext } from "react";
import { Index } from "./types/Index";
import { Cell } from "./types/grid/Cell";
import { Zum } from "./types/zums/Zum";
import { Id } from "./types/Id";

export type UIContextData =
  | undefined
  | {
      selection?: {
        type: "cell" | "building" | "zum";
        id: Id["id"];
      };
    };
export const UIContext = createContext<
  [UIContextData, React.Dispatch<React.SetStateAction<UIContextData>>]
>([undefined, () => {}]);
