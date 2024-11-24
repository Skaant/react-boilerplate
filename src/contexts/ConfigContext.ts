import { createContext } from "react";
import { State } from "../types/_helpers/State";

export type ConfigContextData = undefined | {};
export const ConfigContext = createContext<State<ConfigContextData>>([
  undefined,
  () => {},
]);
