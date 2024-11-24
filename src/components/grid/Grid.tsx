import React, { useContext, useMemo, useCallback } from "react";
import { GameContext } from "../../contexts/GameContext";
import { ConfigContext } from "../../contexts/ConfigContext";
import ZumsLayer from "./ZumsLayer";
import BuildingsLayer from "./BuildingsLayer";
import { UIContext } from "../../contexts/ui/UIContext";
import { Cell as CellType } from "../../types/grid/Cell";
import Cell from "./cells/Cell";
import { setSelection } from "../../contexts/ui/helpers/setSelection";
import { CONFIG } from "../../data/config.data";

export default function Grid() {
  const [UI, setUI] = useContext(UIContext);
  const [game] = useContext(GameContext);
  const cellSize = useMemo(
    () => UI && (CONFIG.CELL_SIZE * 3) / UI.zoom,
    [UI?.zoom]
  );
  const dimensions = useMemo(
    () =>
      game &&
      Object.values(game.cells).reduce(
        (acc, { x, y }) => ({
          width: Math.max(acc.width, x + 1),
          height: Math.max(acc.height, y + 1),
        }),
        { width: 0, height: 0 }
      ),
    [game?.cells]
  );
  const onClick = useCallback(
    (id: CellType["id"]) => {
      (UI?.selection?.type !== "cell" || id !== UI.selection.id) &&
        setSelection([UI, setUI], {
          type: "cell",
          id,
        });
    },
    [UI]
  );
  const cells = useMemo(
    () =>
      game &&
      Object.values(game.cells).map((cell) => (
        <Cell key={cell.id} cell={cell} onClick={onClick} />
      )),
    [game?.cells, onClick]
  );
  return cellSize && dimensions ? (
    <div id="grid-container">
      <svg
        id="grid"
        height={dimensions.height * cellSize}
        width={dimensions.width * cellSize}
      >
        {cells}
        <BuildingsLayer />
        <ZumsLayer />
      </svg>
    </div>
  ) : (
    <>Loading ...</>
  );
}
