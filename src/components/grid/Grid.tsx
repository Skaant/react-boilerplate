import React, { useContext, useMemo } from "react";
import { GameContext } from "../../GameContext";
import { ConfigContext } from "../../ConfigContext";

export default function Grid() {
  const [config] = useContext(ConfigContext);
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
  const cells = useMemo(
    () =>
      config &&
      game &&
      Object.values(game.cells).map(({ id, x, y, wighld }) => (
        <rect
          key={id}
          x={x * config.cellSize}
          y={y * config.cellSize}
          width={config.cellSize}
          height={config.cellSize}
          fill={wighld === 2 ? "#050" : "#0a0"}
        />
      )),
    [config?.cellSize, game?.cells]
  );
  return dimensions ? (
    <svg
      height={dimensions.height * config!.cellSize}
      width={dimensions.width * config!.cellSize}
    >
      {cells}
    </svg>
  ) : (
    <>Loading ...</>
  );
}
