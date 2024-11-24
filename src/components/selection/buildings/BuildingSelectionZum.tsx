import React, { useCallback, useContext, useMemo } from "react";
import { Module } from "../../../types/buildings/Module";
import { MODULES } from "../../../data/buildings/modules/modules.data";
import BuildingSelectionProps from "./BuildingSelectionProps";
import { HasResidents } from "../../../types/buildings/attributes/HasResidents";
import { GameContext } from "../../../contexts/GameContext";
import { UIContext } from "../../../contexts/ui/UIContext";
import { Zum } from "../../../types/zums/Zum";

export default function BuildingSelectionZum({
  zum,
  selectZum,
}: {
  zum: Zum;
  selectZum: (zumId: Zum["id"]) => void;
}) {
  const [UI, setUI] = useContext(UIContext);
  const [game] = useContext(GameContext);
  const { id, state, name } = zum;
  return (
    <div
      key={id}
      className={`p-2 ${
        state === "dry"
          ? "bg-dark-lighter text-light"
          : "bg-light text-dark-lighter"
      }`}
      onClick={() => selectZum(id)}
    >
      <div className="d-flex justify-between align-center">
        <h3 className="mt-0 mb-0">{name}</h3>
        {state === "dry" && (
          <span className="badge-s bg-light text-dark-lighter">
            Statut : deshydraté
          </span>
        )}
      </div>
    </div>
  );
}
