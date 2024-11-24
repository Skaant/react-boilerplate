import React, { useCallback, useContext, useMemo } from "react";
import { UIContext } from "../../contexts/ui/UIContext";
import { GameContext } from "../../contexts/GameContext";
import { Cell } from "../../types/grid/Cell";
import { Building } from "../../types/buildings/Building";
import { Zum } from "../../types/zums/Zum";
import CellSelection from "./CellSelection";
import ZumSelection from "./ZumSelection";
import BuildingSelection from "./buildings/BuildingSelection";
import { getSelectionBgAndColor } from "./helpers/getSelectionBgAndColor";
import SelectionTutorial from "./SelectionTutorial";

export default function Selection() {
  const [UI, setUI] = useContext(UIContext);
  const [game] = useContext(GameContext);
  const bgAndColor = useMemo(
    () => UI && game && getSelectionBgAndColor({ UI, game }),
    [UI?.selection, game?.cells, game?.buildings]
  );
  const selection = useMemo(() => {
    const selection = UI && UI.selection;
    if (!selection || !game) return undefined;
    if (selection.type === "cell")
      return {
        _type: "cell",
        ...game.cells[selection.id],
      } as {
        _type: "cell";
      } & Cell;
    if (selection.type === "building")
      return {
        _type: "building",
        ...game.buildings[selection.id],
      } as {
        _type: "building";
      } & Building;
    if (selection.type === "zum")
      return { _type: "zum", ...game.zums[selection.id] } as {
        _type: "zum";
      } & Zum;
    return undefined;
  }, [UI, game]);
  const dismiss = useCallback(() => {
    setUI({
      ...UI!,
      selection: undefined,
      selectionHistory: [],
    });
  }, [UI]);
  return (
    <div id="selection" className={"p-4 " + bgAndColor}>
      {selection ? (
        selection._type === "cell" ? (
          <CellSelection cell={selection} />
        ) : selection._type === "building" ? (
          <BuildingSelection building={selection} />
        ) : (
          <ZumSelection zum={selection} />
        )
      ) : (
        <div>
          <h2 className="text-funnel">Trikro</h2>
          <SelectionTutorial />
        </div>
      )}
      {selection && (
        <div className="pt-2">
          <button className="badge-m bg-light text-dark" onClick={dismiss}>
            Fermer (Échap)
          </button>
        </div>
      )}
    </div>
  );
}
