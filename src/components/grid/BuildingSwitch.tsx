import React, { useContext } from "react";
import { Building } from "../../types/buildings/Building";
import DomSvg from "../svg/DomSvg";
import KolosSeedSvg from "../svg/KolosSeedSvg";
import { GridElement } from "../../types/grid/GridElement";
import KolosSeedTransitSvg from "../svg/KolosSeedTransitSvg";
import { GameContext } from "../../contexts/GameContext";
import KolosSeedLandedSvg from "../svg/KolosSeedLanded";

export default function BuildingSwitch(
  props: {
    cellSize: number;
  } & GridElement &
    Building & {
      onClick: (id: Building["id"]) => void;
    }
) {
  const [game, setGame] = useContext(GameContext);
  return props.type === "dom" ? (
    <DomSvg {...props} />
  ) : props.type === "seed-vessel" ? (
    props.step === 1 ? (
      <KolosSeedTransitSvg
        {...props}
        onClick={(id: Building["id"]) => {
          setGame({ ...game!, tutorial: 1 });
          props.onClick(id);
        }}
      />
    ) : (
      <KolosSeedLandedSvg {...props} step={props.step} />
    )
  ) : (
    <></>
  );
}
