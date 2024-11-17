import React, { useCallback, useContext, useMemo } from "react";
import { GameContext } from "../../GameContext";
import { GridElement } from "../../types/grid/GridElement";
import { Zum } from "../../types/zums/Zum";
import { ConfigContext } from "../../ConfigContext";
import ZumSvg, { ZUM_SVG_HEIGHT, ZUM_SVG_WIDTH } from "../svg/ZumSvg";
import { UIContext } from "../../UIContext";

export default function ZumsLayer() {
  const [config] = useContext(ConfigContext);
  const [game] = useContext(GameContext);
  const [UI, setUI] = useContext(UIContext);
  const zums = useMemo(
    () =>
      config &&
      game &&
      Object.values(game.cells)
        .map(
          ({ x, y, zums }) =>
            [
              ...zums.map((zum, index) => ({
                x:
                  x * config.cellSize +
                  config.cellSize * (0.95 - ZUM_SVG_WIDTH * (index + 1)),
                y:
                  y * config.cellSize +
                  config.cellSize * (0.95 - ZUM_SVG_HEIGHT),
                ...game.zums[zum],
                ...(UI?.selection?.type === "zum" && UI.selection.id === zum
                  ? { selected: true }
                  : {}),
              })),
            ] as (GridElement & Zum & { selected?: true })[]
        )
        .flat(),
    [config?.cellSize, UI?.selection, game?.cells, game?.zums]
  );
  const onClick = useCallback(
    (id: Zum["id"]) => {
      (UI?.selection?.type !== "zum" || id !== UI.selection.id) &&
        setUI({
          ...UI,
          selection: {
            type: "zum",
            id,
          },
        });
    },
    [UI]
  );
  return (
    <>
      {JSON.stringify(zums)}
      {zums?.map((zum) => (
        <ZumSvg
          key={zum.id}
          cellSize={config!.cellSize}
          {...zum}
          onClick={onClick}
        />
      ))}
    </>
  );
}
