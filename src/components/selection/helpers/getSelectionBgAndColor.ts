import { GameContextData } from "../../../contexts/GameContext";
import { UIContextData } from "../../../contexts/ui/UIContext";

export function getSelectionBgAndColor({
  UI,
  game,
}: {
  UI: Exclude<UIContextData, undefined>;
  game: Exclude<GameContextData, undefined>;
}) {
  if (UI.selection) {
    if (UI.selection.type === "cell") {
      return game.cells[UI.selection.id].type === "ground"
        ? "text-light-darker bg-dark-lightest"
        : "text-light bg-space";
    } else if (UI.selection.type === "building") {
      return "text-light bg-seed";
    } else if (UI.selection.type === "zum") {
      return "bg-zum";
    }
  } else return "bg-dark-lightest";
}
