import React, { createElement, useCallback, useContext, useMemo } from "react";
import { GameContext } from "../../GameContext";
import { GridElement } from "../../types/grid/GridElement";
import { Building } from "../../types/buildings/Building";
import { ConfigContext } from "../../ConfigContext";
import DomSvg, { DOM_SVG_HEIGHT, DOM_SVG_WIDTH } from "../svg/DomSvg";
import { UIContext } from "../../UIContext";
import BuildingSwitch from "./BuildingSwitch";
import { BUILDINGS_DIMENSIONS } from "./_helpers/buildings-dimensions";

export default function BuildingsLayer() {
  const [config] = useContext(ConfigContext);
  const [UI, setUI] = useContext(UIContext);
  const [game] = useContext(GameContext);
  const buildings = useMemo(
    () =>
      config &&
      game &&
      Object.values(game.cells)
        .map(
          ({ x, y, buildings }) =>
            [
              ...(buildings as Building["type"][]).map((buildingId) => {
                const building = game.buildings[buildingId];
                const { width, height } = BUILDINGS_DIMENSIONS[building.type];
                return {
                  x: x * config.cellSize + config.cellSize * ((1 - width) / 2),
                  y:
                    y * config.cellSize +
                    (height > 0.9
                      ? (0.9 - height) * config.cellSize
                      : config.cellSize * ((1 - height) / 2)),
                  ...building,
                };
              }),
            ] as (GridElement & Building)[]
        )
        .flat(),
    [config?.cellSize, game?.cells, game?.buildings]
  );
  const onClick = useCallback(
    (id: Building["id"]) => {
      (UI?.selection?.type !== "building" || id !== UI.selection.id) &&
        setUI({
          ...UI,
          selection: {
            type: "building",
            id,
          },
        });
    },
    [UI]
  );
  return (
    <>
      {config &&
        buildings?.map((building) => (
          <BuildingSwitch
            key={building.id}
            cellSize={config.cellSize}
            {...building}
            onClick={onClick}
          />
        ))}
    </>
  );
}
