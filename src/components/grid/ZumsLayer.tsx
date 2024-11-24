import React, { useCallback, useContext, useMemo } from "react";
import { GameContext } from "../../contexts/GameContext";
import { GridElement } from "../../types/grid/GridElement";
import { Zum } from "../../types/zums/Zum";
import ZumSvg, { ZUM_SVG_HEIGHT, ZUM_SVG_WIDTH } from "../svg/ZumSvg";
import { UIContext } from "../../contexts/ui/UIContext";
import { setSelection } from "../../contexts/ui/helpers/setSelection";
import { CONFIG } from "../../data/config.data";

export default function ZumsLayer() {
  const [game] = useContext(GameContext);
  const [UI, setUI] = useContext(UIContext);
  const cellSize = useMemo(
    () => UI && (CONFIG.CELL_SIZE * 3) / UI.zoom,
    [UI?.zoom]
  );
  const zums = useMemo(
    () =>
      cellSize === undefined
        ? undefined
        : game &&
          Object.values(game.cells)
            .map(
              ({ x, y, zums }) =>
                [
                  ...zums
                    .filter((zumId) => game.zums[zumId].state !== "dry")
                    .map((zumId, index) => ({
                      x:
                        x * cellSize +
                        cellSize * (0.95 - ZUM_SVG_WIDTH * (index + 1)),
                      y: y * cellSize + cellSize * (0.95 - ZUM_SVG_HEIGHT),
                      ...game.zums[zumId],
                      ...(UI?.selection?.type === "zum" &&
                      UI.selection.id === zumId
                        ? { selected: true }
                        : {}),
                    })),
                ] as (GridElement & Zum & { selected?: true })[]
            )
            .flat(),
    [cellSize, UI?.selection, game?.cells, game?.zums]
  );
  const onClick = useCallback(
    (id: Zum["id"]) => {
      (UI?.selection?.type !== "zum" || id !== UI.selection.id) &&
        setSelection([UI, setUI], {
          type: "zum",
          id,
        });
    },
    [UI]
  );
  return (
    <>
      {cellSize &&
        zums?.map((zum) => (
          <ZumSvg key={zum.id} cellSize={cellSize} {...zum} onClick={onClick} />
        ))}
    </>
  );
}
