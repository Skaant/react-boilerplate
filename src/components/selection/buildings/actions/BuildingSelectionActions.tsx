import React from "react";
import { Building } from "../../../../types/buildings/Building";
import SeedVesselSelectionActions from "./list/SeedVesselSelectionActions";

export default function BuildingSelectionActions({
  building,
}: {
  building: Building;
}) {
  if (building.type === "seed-vessel" && building.step === 1)
    return <SeedVesselSelectionActions building={building} />;
  return undefined;
}
