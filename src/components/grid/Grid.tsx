import React, { useContext, useMemo, useCallback } from "react";
import { GameContext } from "../../GameContext";
import { ConfigContext } from "../../ConfigContext";
import ZumsLayer from "./ZumsLayer";
import BuildingsLayer from "./BuildingsLayer";
import { UIContext } from "../../UIContext";
import { Cell } from "../../types/grid/Cell";

export default function Grid() {
  const [config] = useContext(ConfigContext);
  const [UI, setUI] = useContext(UIContext);
  const [game] = useContext(GameContext);
  const dimensions = useMemo(
    () =>
      config &&
      game &&
      Object.values(game.cells).reduce(
        (acc, { x, y }) => ({
          width: Math.max(acc.width, x + 1),
          height: Math.max(acc.height, y + 1),
        }),
        { width: 0, height: 0 }
      ),
    [config?.cellSize, game?.cells]
  );
  const onClick = useCallback(
    (id: Cell["id"]) => {
      (UI?.selection?.type !== "cell" || id !== UI.selection.id) &&
        setUI({
          ...UI,
          selection: {
            type: "cell",
            id,
          },
        });
    },
    [UI]
  );
  const cells = useMemo(
    () =>
      config &&
      game &&
      Object.values(game.cells).map(({ id, x, y, waild }) => (
        <rect
          key={id}
          x={x * config.cellSize}
          y={y * config.cellSize}
          width={config.cellSize}
          height={config.cellSize}
          fill={waild === 2 ? "#0a0" : "#050"}
          onClick={() => onClick(id)}
        />
      )),
    [config?.cellSize, game?.cells, onClick]
  );
  return dimensions ? (
    <div id="grid-container" className="w-100">
      <div className="w-content m-auto">
        <svg
          height={dimensions.height * config!.cellSize}
          width={dimensions.width * config!.cellSize}
        >
          {cells}
          <BuildingsLayer />
          <ZumsLayer />
        </svg>
      </div>
    </div>
  ) : (
    <>Loading ...</>
  );
}
