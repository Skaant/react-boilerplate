import { GameContextData } from "../contexts/GameContext";
import { State } from "../types/_helpers/State";
import { UIContextData } from "../contexts/ui/UIContext";
import { moveZum } from "../use-cases/moveZum";
import { setPreviousSelection } from "../contexts/ui/helpers/setPreviousSelection";

let keyupListener: undefined | ((ev: KeyboardEvent) => void) = undefined;

export function bindKeyboard({
  UIState,
  gameState,
}: {
  UIState: State<UIContextData>;
  gameState: State<GameContextData>;
}): void {
  keyupListener && document.removeEventListener("keydown", keyupListener);
  keyupListener = (ev: KeyboardEvent) => {
    if (ev.key === "Escape") {
      setPreviousSelection(UIState);
    } else if (UIState[0]?.selection?.type === "zum") {
      const zumId = UIState[0].selection.id;
      if (ev.key === "z" || ev.key === "ArrowUp") {
        moveZum(zumId, "up", gameState);
      } else if (ev.key === "s" || ev.key === "ArrowDown") {
        moveZum(zumId, "down", gameState);
      } else if (ev.key === "q" || ev.key === "ArrowLeft") {
        moveZum(zumId, "left", gameState);
      } else if (ev.key === "d" || ev.key === "ArrowRight") {
        moveZum(zumId, "right", gameState);
      }
    }
  };
  document.addEventListener("keydown", keyupListener);
}
