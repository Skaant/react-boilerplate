import React, { useMemo } from "react";
import { SeedVessel } from "../../../../../types/buildings/list/SeedVessel";

export default function SeedVesselSelectionActions({
  building,
}: {
  building: SeedVessel;
}) {
  const disabled = useMemo(
    () => building.step === 1 || building.developments["roots"].count > 0,
    [building]
  );
  return (
    <div className="d-flex gap-1">
      <button
        className="badge-m bg-light text-dark-lighter"
        disabled={disabled}
      >
        Réhydrater (-1 Wa/tour)
      </button>
    </div>
  );
}
