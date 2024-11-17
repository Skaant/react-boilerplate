import React, { useCallback, useContext, useMemo } from "react";
import { UIContext } from "../../UIContext";
import { GameContext } from "../../GameContext";
import { Cell } from "../../types/grid/Cell";
import { Building } from "../../types/buildings/Building";
import { Zum } from "../../types/zums/Zum";
import CellSelection from "./CellSelection";
import ZumSelection from "./ZumSelection";
import BuildingSelection from "./BuildingSelection";

export default function Selection() {
  const [UI, setUI] = useContext(UIContext);
  const [game] = useContext(GameContext);
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
      ...UI,
      selection: undefined,
    });
  }, [UI]);
  return selection ? (
    <div id="selection">
      {selection._type === "cell" ? (
        <CellSelection cell={selection} />
      ) : selection._type === "building" ? (
        <BuildingSelection building={selection} />
      ) : (
        <ZumSelection zum={selection} />
      )}
      <button onClick={dismiss}>Fermer (esc)</button>
    </div>
  ) : (
    <></>
  );
}
