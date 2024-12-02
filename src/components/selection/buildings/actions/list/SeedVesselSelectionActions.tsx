import React, { useCallback, useContext, useMemo } from "react";
import { SeedVessel } from "../../../../../types/buildings/list/SeedVessel";
import { GameContext } from "../../../../../contexts/GameContext";
import { Building } from "../../../../../types/buildings/Building";

export default function SeedVesselSelectionActions({
  building,
}: {
  building: SeedVessel;
}) {
  const [game, setGame] = useContext(GameContext);
  const disabled = useMemo(() => building.step !== 2, [building.step]);
  const rehydrate = useCallback(() => {
    const _game = { ...game! };
    _game.tutorial = 3;
    _game.buildings = {
      ..._game.buildings,
      [building.id]: {
        ..._game.buildings[building.id],
        step: 3,
        state: undefined,
      } as Building,
    };
    setGame(_game);
  }, [building.id, game?.buildings]);
  return (
    <div className="d-flex gap-1">
      {building.step < 3 && (
        <button
          className="badge-m bg-light text-dark-lighter"
          disabled={disabled}
          onClick={rehydrate}
        >
          Réhydrater (-1 Wa/tour)
        </button>
      )}
    </div>
  );
}
