import { GameContextData } from "../../contexts/GameContext";
import { State } from "../../types/_helpers/State";
import { landSeedVessel } from "../landSeedVessel";

export function passTurn({
  gameState: [game, setGame],
}: {
  gameState: State<GameContextData>;
}) {
  let _game = {
    ...game!,
    turn: game!.turn + 1,
    tutorial: game!.tutorial === 1 ? 2 : game!.tutorial,
  };
  if (game!.tutorial === 1) _game = landSeedVessel(_game);
  setGame(_game);
}
