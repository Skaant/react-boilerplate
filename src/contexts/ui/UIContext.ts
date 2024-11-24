import { createContext } from "react";
import { Id } from "../../types/Id";
import { State } from "../../types/_helpers/State";

export type UISelection = {
  type: "cell" | "building" | "zum";
  id: Id["id"];
};

export type UIContextData =
  | undefined
  | {
      zoom: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
      selection?: UISelection;
      selectionHistory: (undefined | UISelection)[];
    };
export const UIContext = createContext<State<UIContextData>>([
  undefined,
  () => {},
]);
