import { GameContextData } from "../../../contexts/GameContext";
import { ProductionDataProps } from "../../../data/buildings/_types/props/BuildingProps";
import { ProdSource } from "./types/ProdSource";

export function setProdSourceStock(
  prop: ProductionDataProps,
  source: ProdSource,
  game: Exclude<GameContextData, undefined>
): Exclude<GameContextData, undefined> {
  const _game = { ...game };
  if (source.type) return _game;
}
