import React, { createElement, useCallback, useContext, useMemo } from "react";
import { GameContext } from "../../contexts/GameContext";
import { GridElement } from "../../types/grid/GridElement";
import { Building } from "../../types/buildings/Building";
import { ConfigContext } from "../../contexts/ConfigContext";
import { UIContext } from "../../contexts/ui/UIContext";
import BuildingSwitch from "./BuildingSwitch";
import { BUILDINGS_DIMENSIONS } from "./_data/buildings-dimensions.data";
import { setSelection } from "../../contexts/ui/helpers/setSelection";
import { CONFIG } from "../../data/config.data";

export default function BuildingsLayer() {
  const [UI, setUI] = useContext(UIContext);
  const [game] = useContext(GameContext);
  const cellSize = useMemo(
    () => UI && (CONFIG.CELL_SIZE * 3) / UI.zoom,
    [UI?.zoom]
  );
  const buildings = useMemo(
    () =>
      cellSize === undefined
        ? undefined
        : game &&
          Object.values(game.cells)
            .map(
              ({ x, y, buildings }) =>
                [
                  ...(buildings as Building["type"][]).map((buildingId) => {
                    const building = game.buildings[buildingId];
                    const { width, height } =
                      BUILDINGS_DIMENSIONS[
                        `${building.type}${
                          building.step ? `-${building.step}` : ""
                        }`
                      ];
                    return {
                      x: x * cellSize + cellSize * ((1 - width) / 2),
                      y:
                        y * cellSize +
                        (height > 0.9
                          ? (0.9 - height) * cellSize
                          : cellSize * ((1 - height) / 2)),
                      ...building,
                    };
                  }),
                ] as (GridElement & Building)[]
            )
            .flat(),
    [cellSize, game?.cells, game?.buildings]
  );
  const onClick = useCallback(
    (id: Building["id"]) => {
      (UI?.selection?.type !== "building" || id !== UI.selection.id) &&
        setSelection([UI, setUI], {
          type: "building",
          id,
        });
    },
    [UI?.selection]
  );
  const element = useMemo(
    () => (
      <>
        {cellSize &&
          buildings?.map((building) => (
            <BuildingSwitch
              key={building.id}
              cellSize={cellSize}
              {...building}
              onClick={onClick}
            />
          ))}
      </>
    ),
    [cellSize, buildings, onClick]
  );
  return element;
}
