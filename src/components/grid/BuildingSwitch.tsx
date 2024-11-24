import React from "react";
import { Building } from "../../types/buildings/Building";
import DomSvg from "../svg/DomSvg";
import KolosSeedSvg from "../svg/KolosSeedSvg";
import { GridElement } from "../../types/grid/GridElement";
import KolosSeedTransitSvg from "../svg/KolosSeedTransitSvg";

export default function BuildingSwitch(
  props: {
    cellSize: number;
  } & GridElement &
    Building & {
      onClick: (id: Building["id"]) => void;
    }
) {
  return props.type === "dom" ? (
    <DomSvg {...props} />
  ) : props.type === "seed-vessel" ? (
    props.step === 1 ? (
      <KolosSeedTransitSvg {...props} />
    ) : (
      <KolosSeedSvg {...props} />
    )
  ) : (
    <></>
  );
}
