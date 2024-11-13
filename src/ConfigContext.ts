import { createContext } from "react";

export type ConfigContextData =
  | undefined
  | {
      cellSize: number;
    };
export const ConfigContext = createContext<
  [ConfigContextData, React.Dispatch<React.SetStateAction<ConfigContextData>>]
>([undefined, () => {}]);
